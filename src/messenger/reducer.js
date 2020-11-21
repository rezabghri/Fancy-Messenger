export function reducer(state,action){
    switch(action.type){
        case ACTIONS.INPUT_CHANGE:
            return{
                ...state,
                keyword:action.payload
            }
         case ACTIONS.FORWARD_MESSAGE:
                return{
                 keyword:action.payload
                }
         case ACTIONS.CHANGE_MODE:
             return{
                 mode:action.payload
             }
                

         default :
          return state;   
    }
}


export const ACTIONS={
    INPUT_CHANGE:"INPUT_CHANGE",
    FORWARD_MESSAGE:"FORWARD_MESSAGE",
    CHANGE_MODE:"CHANGE_MODE"
}