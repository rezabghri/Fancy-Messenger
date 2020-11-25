import React,{useContext} from 'react';
import styled from 'styled-components';
import HeaderContent from './headerContent';
import ChatContent from './chatContent';
import InputMessage from './inputMessage';
import {withDispatch,PropsContext} from './context';
import {ACTIONS} from './reducer';



const Wrapper=styled.div`
      
`

export default function Content({listItem,keyword,id}) {

    const dispatch=useContext(PropsContext);

//    const handleChange=e=>{
//        dispatch({
//            type:ACTIONS.INPUT_CHANGE,
//            payload:e.target.value
//        })
//    }

    return (
        <div>
            <Wrapper>
                <HeaderContent Id={id}/>
                <ChatContent liItem={listItem} />

                <InputMessage   kword={keyword} />
              

            </Wrapper>
        </div>
    )
}

// withDispatch(Content);