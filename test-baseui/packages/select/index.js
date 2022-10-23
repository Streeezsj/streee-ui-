import tSelect from "./index.vue"
tSelect.install = app =>{
    app.component(tSelect.name,tSelect)
}
export default tSelect;