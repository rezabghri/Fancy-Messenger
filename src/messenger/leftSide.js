import React from "react";
import styled from "styled-components";
import Search from "./search";
//import UserList from './userList';
import List from './list';
//import listItem from "./listItem";


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

export default function LeftSide({data}) {
  return (
    <div>
      <Wrapper>
        <Search />
        <HR />
       <List  data={Data} />
        {/* <HR/> */}
      </Wrapper>
    </div>
  );
}
