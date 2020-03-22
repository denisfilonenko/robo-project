import VueRouter from 'vue-router'
import Home from './pages/home'
import Play from './pages/play'
import CodeLab from './pages/codeLab'
import About from './pages/about'

export default new VueRouter({
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path: '/play',
            component: Play
        },
        {
            path: '/codeLab',
            component: CodeLab
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})