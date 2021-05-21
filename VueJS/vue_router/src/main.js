
import { createApp,Vue } from 'vue'
import VueRouter from 'vue-router'
// import { BootstrapVue} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
// App.use(BootstrapVue)
import LoginScreen from './components/LoginScreen.vue'
import Foo from './components/Foo.vue'
// import Bar from './components/Bar.vue'
const router = new VueRouter({
    routes:[
        { path:'/loginPage',component: LoginScreen },
        { path:'/foo',component: Foo },
        // { path:'/bar',component:Bar }
   
        ],

})
 Vue.use(VueRouter);
App = new Vue({
    router
  }).$mount('#app')

createApp(App).mount('#app')

// App.use(BootstrapVueIcons)


