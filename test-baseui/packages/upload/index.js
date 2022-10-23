import tUpload from "./index.vue"
tUpload.install = app =>{
    app.component(tUpload.name,tUpload)
}
export default tUpload;