import React,{createContext} from 'react';

export const propsContext=createContext();

export  function withDispatch(Component) {
    return props=>{

        (
            <propsContext.Consumer>
            <div>
                {dispatch=><Component dispatch={dispatch} {...props}/>}
            </div>
            </propsContext.Consumer>
        )
    }
}
