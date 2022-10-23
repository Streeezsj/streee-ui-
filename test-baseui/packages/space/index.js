import tSpace from "./index.vue"
tSpace.install = app =>{
    app.component(tSpace.name,tSpace)
}
export default tSpace;