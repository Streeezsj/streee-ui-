import tButton from "./button/index.js";
import tInput from "./input/index.js"
import tTextarea from "./textarea/index.js"
// import tSpace from "./space/index.js"
import tSelect from "./select/index.js"
import tRadio from "./radio/index.js"
import tTree from "./tree/index.js"
import tUpload from "./upload/index.js"
const components = [tButton,tInput,tTextarea,tSelect,tRadio,tTree,tUpload];
const install = (app) =>{
    // app.use(tButton)
    // app.use(tInput)
    // app.use(tTextarea)
    components.forEach((item) =>{
        app.use(item);
    })
}
const TUI = {
    install,
};
export {tButton,tInput,tTextarea,tSelect,tRadio,tTree,tUpload};
export default TUI
