import React from 'react';
import styled from 'styled-components';
import HeaderContent from './headerContent';
import ChatContent from './chatContent';
import InputMessage from './inputMessage';
import {withDispatch,PropsContext} from './context';

export default function Content({listItem}) {

    const dispatch=React.useContext(PropsContext);

    const Wrapper=styled.div`
      
    `

    return (
        <div>
            <Wrapper>
                <HeaderContent/>
                <ChatContent liItem={listItem}/>

                <InputMessage />

            </Wrapper>
        </div>
    )
}

// withDispatch(Content);