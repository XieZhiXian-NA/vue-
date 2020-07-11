import Vue from "vue"

import router from "./router"

import App from "./App.vue"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
