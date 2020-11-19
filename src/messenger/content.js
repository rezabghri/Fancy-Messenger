import React from 'react';
import styled from 'styled-components';
import HeaderContent from './headerContent';
import ChatContent from './chatContent';
import InputMessage from './inputMessage';

export default function Content() {

    const Wrapper=styled.div`
      
    `

    return (
        <div>
            <Wrapper>
                <HeaderContent/>
                <ChatContent/>

                <InputMessage/>

            </Wrapper>
        </div>
    )
}
