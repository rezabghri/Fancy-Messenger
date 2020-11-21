import React,{createContext} from 'react';

export const PropsContext=createContext(null);

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
