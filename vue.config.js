const path = require('path')
const bodyParser = require("body-parser");
function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = 9999
const title = '开课吧'
module.exports = {
    publicPath: 'xzx',
    outputDir:'dist/xzx',
    devServer: {
        port,
        proxy:{
            //将请求/dev-api/user/login 代理到127.0.0.1:3000/user/login  
            //重写了路径27.0.0.1:3000/dev-api/user/login
            [process.env.VUE_APP_BASE_API]: {
                     target: 'http://127.0.0.1:3000',
                     changeOrigin: true,
                     pathRewrite: {
                         ["^" + process.env.VUE_APP_BASE_API]:""
                     } 
            }
        },
        // before: app => {
        //     app.use(bodyParser.json());
        //     app.use(
        //         bodyParser.urlencoded({
        //             extended: true
        //         })
        //     );
        //     app.post("/dev-api/user/login", (req, res) => {
        //         const { username } = req.body;
        //         if (username === "admin" || username === "jerry") {
        //             res.json({
        //                 code: 1,
        //                 data: username
        //             });
        //         } else {
        //             res.json({
        //                 code: 10204,
        //                 message: "用户名或密码错误"
        //             });
        //         }
        //     });
        //     app.get("/dev-api/user/info", (req, res) => {
        //         const roles = req.headers['x-token'] === "admin" ? ["admin"] : ["editor"];
        //         res.json({
        //             code: 1,
        //             data: roles
        //         });
        //     });
        // }
    },

    // webpack-merge 合并入最终的 webpack 配置
    configureWebpack: {
        name: title //项目标题
    },

    chainWebpack(config) {
        //svg规则 排除icons目录
        config.module.rule('svg')
            .exclude
            .add(resolve('src/icons'))
            .end()//退回到上一级

        //新增icons规则 设置svg-sprite-loader
        config.module.rule('icons')
            .test(/\.svg$/) //测试的以.svg为后缀名的文件
            .include
            .add(resolve('src/icons')) //进入到include下 要end返回到上一级
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' }) //将来使用图标用法
            .end()
    }
}