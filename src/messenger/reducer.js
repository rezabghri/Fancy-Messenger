import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export function reducer(state,action){
    switch(action.type){
        case ACTIONS.INPUT_CHANGE:
            return{
                ...state,
                keyword:action.payload
            }
         case ACTIONS.FORWARD_MESSAGE:
            // if(action.payload.e.key==='Enter'){
            //     console.log("enter pressed")
            //      const newList=[...state.listItem];
            //       newList.push(state.keyword);
            //     }
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
                   itemId:state.Data.find(x=>x.id===action.payload)
               }   
            case ACTIONS.CLOSE_CONTENT:
                return{
                    ...state,
                    status:action.payload.close,
                    itemId:action.payload.id
                }
             case ACTIONS.SEND_MESSAGE:
                 const newList=[...state.listItem]
                 return{
                     ...state,
                     keyword:'',
                     listItem:newList.push(action.payload)
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
    ITEM_CLICK:"ITEM_CLICK",
    CLOSE_CONTENT:"  CLOSE_CONTENT",
    SEND_MESSAGE:"SEND_MESSAGE"
}
