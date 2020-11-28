import React from "react";
import {PropsContext} from './context';
import styled from "styled-components";
import Search from "./search";
//import UserList from './userList';
import List from './list';
import { ACTIONS } from "./reducer";
//import listItem from "./listItem";
import InputSearch from './inputSearch';


// const Data=[
//   {id:'1',Name:'Reza',lastChat:'Hi there',chatCount:10,time:'18:05'},
//   {id:'2',Name:'Mohammad',lastChat:'Hi there',chatCount:10,time:'18:05'},
//   {id:'3',Name:'Pegah',lastChat:'Hi there',chatCount:10,time:'18:05'},
//   {id:'4',Name:'Zahra',lastChat:'Hi there',chatCount:10,time:'18:05'}
// ]


const Wrapper = styled.div`
  background-color: #f9eded;

`;

const HR = styled.hr`
  height: 1px;
  color: #e5c3c3;
`;

export default function LeftSide({data,mode,kw,itmId,user}) {

   
  const dispatch=React.useContext(PropsContext);

   const handleInputSearchClick=()=>{
     dispatch({
       type:ACTIONS.CHANGE_MODE,
       payload:'search'
     })
   }

   const handleSearchClick=()=>{
     dispatch({
       type:ACTIONS.CHANGE_MODE,
       payload:'input'
     })
   }

  return (
    <div>
      <Wrapper>
        {mode==='input' && <Search onInputSearch={handleInputSearchClick}/>}
      
         {mode==='search'&&
          <InputSearch onSearch={handleSearchClick} kyword={kw} />  }
        {/* {mode==='input' && <Search/>} */} 
        <HR />
       <List  datas={data} itemid={itmId} usr={user} />
        {/* <HR/> */}
        {/* data={Data} */}
      </Wrapper>
    </div>
  );
}
