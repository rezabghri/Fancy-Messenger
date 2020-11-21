import React from "react";
import {PropsContext} from './context';
import styled from "styled-components";
import Search from "./search";
//import UserList from './userList';
import List from './list';
import { ACTIONS } from "./reducer";
//import listItem from "./listItem";
import InputSearch from './inputSearch';


const Data=[
  {id:'1',Name:'Reza',lastChat:'Hi there',chatCount:10,time:'18:05'},
  {id:'2',Name:'Mohammad',lastChat:'Hi there',chatCount:10,time:'18:05'},
  {id:'3',Name:'Pegah',lastChat:'Hi there',chatCount:10,time:'18:05'},
  {id:'4',Name:'Zahra',lastChat:'Hi there',chatCount:10,time:'18:05'}
]


const Wrapper = styled.div`
  background-color: #f9eded;

`;

const HR = styled.hr`
  height: 1px;
  color: #e5c3c3;
`;

export default function LeftSide({data,mode}) {

  const dispatch=React.useContext(PropsContext);

   const handleSearchClick=()=>{
     dispatch({
       type:ACTIONS.CHANGE_MODE,
       payload:'input'
     })
   }

  return (
    <div>
      <Wrapper>
      {/* <Search onSearch={handleSearchClick}/> */}
        {mode==='search'&&
          <InputSearch onSearch={handleSearchClick}/>  }
        {/* {mode==='input' && <InputSearch/>} */}
        <HR />
       <List  data={Data} />
        {/* <HR/> */}
      </Wrapper>
    </div>
  );
}
