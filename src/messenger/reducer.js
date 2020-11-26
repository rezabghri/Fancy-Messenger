export function reducer(state,action){
    switch(action.type){
        case ACTIONS.INPUT_CHANGE:
            return{
                ...state,
                keyword:action.payload
            }
         case ACTIONS.FORWARD_MESSAGE:
                return{
                    ...state,
                 listItem:action.payload
                }
         case ACTIONS.CHANGE_MODE:
             return{
                 ...state,
                 mode:action.payload
             }
          case ACTIONS.INPUTS_CHANGE:
              return{
                  ...state,
                  val:action.payload
              }   
           case ACTIONS.ITEM_CLICK:
               return{
                   ...state,
                   itemId:action.payload
               }   
                

         default :
          return state;   
    }
}


export const ACTIONS={
    INPUT_CHANGE:"INPUT_CHANGE",
    FORWARD_MESSAGE:"FORWARD_MESSAGE",
    CHANGE_MODE:"CHANGE_MODE",
    INPUTS_CHANGE:"INPUTS_CHANGE",
    ITEM_CLICK:"ITEM_CLICK"
}