export default[{
    path:"/",
    name:'home',
    component:()=>import("@/views/home.vue"),
    children:[
        {
            path:'',
            name:'button',
            component:()=>import("/packages/button/doc/doc.md")
        },
        {
            path:'input',
            name:'input',
            component:()=>import("/packages/input/doc/doc.md")
        },
        {
            path:'textarea',
            name:'textarea',
            component:()=>import("/packages/textarea/doc/doc.md")
        },
        // {
        //     path:'space',
        //     name:'space',
        //     component:()=>import("/packages/space/doc/doc.md")
        // },
        {
            path:'select',
            name:'select',
            component:()=>import("/packages/select/doc/doc.md")
        },
        {
            path:'radio',
            name:'radio',
            component:()=>import("/packages/radio/doc/doc.md")
        },
        {
            path:'tree',
            name:'tree',
            component:()=>import("/packages/tree/doc/doc.md")
        },
        {
            path:'upload',
            name:'upload',
            component:()=>import("/packages/upload/doc/doc.md")
        }
    ]
}]