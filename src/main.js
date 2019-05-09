// 入口文件
import Vue from 'vue'

// 导入 axios
import axios from 'axios'
Vue.prototype.$http = axios

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

// 导入mui样式表
import "./assets/mui/css/mui.css"
// 导入 mui 扩展图标css样式
import "./assets/mui/css/icons-extra.css"

// 按需导入Mint UI组件
// import { Header , Swipe , SwipeItem, Button ,Toast ,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header); // 头部组件
// Vue.component(Swipe.name, Swipe);   // 轮播图组件
// Vue.component(SwipeItem.name, SwipeItem); //轮播图组件
// Vue.component(Button.name, Button); //按钮组件
// Vue.component(Toast.name, Toast); //弹框组件
// Vue.use(Lazyload);    // 引入懒加载

// 完整引入Mint UI组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
  
// 导入 App 根组件
import app from './App.vue'

// 导入自己的 router.js 路由模块
import router from './router.js'

var vm = new Vue({
    el:"#app",
    // render 会把 el指定的容器中, 所有的内容都清空覆盖, 所以不要把路由的 router-view 和 router-link 直接写到 el 所控制的元素中 ,也就是当前index.html里的app盒子里, 因为render会清空覆盖;
    render:  c => c(app),
    // 4. 将路由对象挂载到 vm 上
    router:router
})

// 注意: App 这个组件, 是通过vm 实例的render函数, 渲染出来的, render 函数如果要渲染组件, 渲染出来的组件, 只能放到el:"#app"所指定的元素中;
// Account 和 GoodsList 组件, 是通过路由匹配监听到的,所以这两个组件,只能展示到路由的<router-view></router-view> 中去;