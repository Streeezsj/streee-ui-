import tInput from "./index.vue"
tInput.install = app =>{
    app.component(tInput.name,tInput)
}
export default tInput;