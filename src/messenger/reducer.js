export function reducer(state,action){
    switch(action.type){
        case ACTIONS.INPUT_CHANGE:
            return{
                ...state,
                keyword:action.payload
            }
         default :
          return state;   
    }
}


export const ACTIONS={
    INPUT_CHANGE:"INPUT_CHANGE"
}