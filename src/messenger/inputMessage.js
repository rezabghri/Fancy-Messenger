import React,{useReducer,useContext,useRef,useEffect,forwardRef} from 'react';
import {reducer} from './reducer';
import styled, { keyframes } from 'styled-components';
import {PropsContext,withDispatch} from './context';
import {ACTIONS} from './reducer';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {LiItem} from './chatContent';

const Input=styled.input`
   border-radius:6px;
   margin:10px;
   width:95%;
   border:none;
   outline-style:none;
`

export default function InputMessage({liItem=[],kword,onPress}) {

    const dispatch=useContext(PropsContext);

    const inputRef=useRef();

    // const [{keyword},dispatch]=useReducer(reducer,{
    //     keyword:''
    // })


   //const handleChange=()=>{
      
    //    dispatch({
    //        type:ACTIONS.INPUT_CHANGE,
    //        payload:e.target.value
    //     })
  // }

  useEffect(()=>{
      inputRef.current.focus();
  },[])

  const handleKeyDown=(e)=>{
      if(e.keyCode===13){
        console.log("enter pressed")
        const newList=[...liItem];
         newList.push({kword});
       }
       dispatch({
           type:ACTIONS.FORWARD_MESSAGE,
           payload:kword
       })
      }

      const handleSubmitMessage=()=>{

      }
   

    return (
        // <PropsContext.Consumer>
    //  { (keyword)=> 
      <div>
            <div className="row" style={{backgroundColor:'#ededed'}}> 
            <div className="col-md-11" >


                <Input type='text' ref={inputRef} value={kword} onChange={(e)=>dispatch({
                   type:ACTIONS.INPUT_CHANGE,
                   payload:e.target.value
                })} onKeyDown={handleKeyDown}/>
            </div>
            {/* <div className="col-md-3"> */}
            {!kword ?<FontAwesomeIcon icon={faPaperclip} className="fa-lg" style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>
           : <FontAwesomeIcon icon={faPaperPlane} className="fa-lg" onClick={handleSubmitMessage} style={{ justifyContent: "center",alignItems: "center", marginTop: 15, color: "#0ec1aa",cursor:"pointer"}}/>} 
            {/* </div> */}
            </div>
        </div>
        //}
        // </PropsContext.Consumer>
    )
}
