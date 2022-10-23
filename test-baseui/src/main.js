import { createApp } from 'vue'
import App from './App.vue'
import TUI from "../packages/index.js"
// import TUI from "../packages/index.js"
import router from "../src/router/index.js"
import '../node_modules/struis/dist/style.css'
import hljs from 'highlight.js'
import "highlight.js/styles/color-brewer.css"
const app =createApp(App)
app.use(TUI)
app.use(router)
app.mount('#app')
app.directive("highlight",function(el){
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) =>{
        hljs.highlightBlock(block)
    })
})