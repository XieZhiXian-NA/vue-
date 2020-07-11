//路由全局守卫 权限控制逻辑
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            //若用户角色已附加则说明动态路由已添加
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    const { roles } = await store.dispatch('user/getInfo')
                    //根据当前用户角色动态生成路由
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    //t添加这些路由至路由器
                    router.addRoutes(accessRoutes)
                    //继续路由切换， 确保addRoutes完成
                    next({ ...to, replace: true })
                } catch (error) {
                    //出错需重置令牌并重新登录(令牌过期、网络错误等原因)
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)

                }
            }
        }
    } else {//用户无令牌
        if (whiteList.indexOf(to.path) !== -1) {
            next() //白名单路由放过
        } else {
            // 重定向至登录页
            next(`/login?redirect=${to.path}`)
         }
    }
})

