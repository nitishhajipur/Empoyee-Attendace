import { lazy } from "react";

export const privateRoutes=[
    {
        element:"/home",
        pathName:"/*",
        component:lazy(()=>import("../component/Dashboard/navBar/Navbar")),
        to:"/*",
        renderChildren:true,
        children:[]   }
]