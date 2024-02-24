import { types } from "./types"

const intialState=
{
    isAuthenticated:false
}
export const appReducer=((state=intialState,action={type:"",payload:""})=>{
    switch (action.type){
        case types.APP_AUTHENTICATION:
            return({...state,isAuthenticated:action.payload})
        default:
            return({...state})
    }

})