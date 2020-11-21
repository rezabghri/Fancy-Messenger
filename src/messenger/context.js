import React,{createContext} from 'react';

export const PropsContext=createContext(null);

export  function withDispatch(Component) {
    return props=>{
      return ( 
       <PropsContext.Consumer>
            <div>
                {dispatch=><Component dispatch={dispatch} {...props}/>}
            </div>
            </PropsContext.Consumer>
        )
    }
}
