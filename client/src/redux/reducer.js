const { GETUSERS } = require("./actionTypes");


const init={
    users:null,
    loading:true
}

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETUSERS:
            return {
                ...state,loading:false,users:payload
            }
            
            
    
        default:
         return state
    }
}

export default reducer;