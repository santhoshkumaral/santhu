const initstate={
    name:"",password:""
}
const rootReducer = (state=initstate,action)=>{
    if (action.type === 'santhosh'){
        return{
        ...state,name:action.name
    }
}
    if(!action.name)
    return state;
}
export default rootReducer;


