import tTree from "./index.vue"
tTree.install = app =>{
    app.component(tTree.name,tTree)
}
export default tTree;