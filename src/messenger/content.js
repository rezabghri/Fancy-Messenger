import React,{useContext} from 'react';
import styled from 'styled-components';
import HeaderContent from './headerContent';
import ChatContent from './chatContent';
import Chat2 from './chat2';
import Chat3 from './chat3';
import InputMessage from './inputMessage';
import {withDispatch,PropsContext} from './context';
import {ACTIONS} from './reducer';



const Wrapper=styled.div`
      
`

const Div=styled.div`
   height:75px;
   background-color: #039a8f;
`

export default function Content({listItem,keyword,id,status,data}) {

    const dispatch=useContext(PropsContext);


    const handleClose=(id)=>{
        dispatch({
            type:ACTIONS.CLOSE_CONTENT,
            payload:['close',id]
        })
    }

  

//    const handleChange=e=>{
//        dispatch({
//            type:ACTIONS.INPUT_CHANGE,
//            payload:e.target.value
//        })
//    }

// const handleKeyDown=(e)=>{
//     dispatch({
//             type:ACTIONS.FORWARD_MESSAGE,
//               payload:keyword    
//          })
//         if(e.keyCode===13){
//          console.log("enter pressed")
//          const newList=[...listItem];
//         newList.push(keyword);
//         // {<LiItem liItem/>}
// }
// }

    return (
        <div >
              {status==='open' && id===data.id && 
            <Wrapper >
                <HeaderContent Id={id} dytaa={data} onClose={handleClose}/>
                
                < ChatContent liItem={listItem} kword={keyword}/>
               
                <InputMessage   kword={keyword}  />
            </Wrapper>}
            {status==='close' && <Div ></Div>}
        </div>
    )
}


// withDispatch(Content);