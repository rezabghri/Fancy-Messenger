import React, { useReducer } from "react";
import {reducer} from './reducer';
import {PropsContext} from './context';
import Head from "./head";
import LeftSide from "./leftSide";
import Content from "./content";
import "bootstrap/dist/css/bootstrap.min.css";
//import UserList from './userList';
import avatar from "../img/avatar.png";
import List from "./list";

// const Data=[
//     {id:'1',Name:'Reza',lastChat:'Hi there',chatCount:10,time:'18:05'},
//     {id:'2',Name:'Mohammad',lastChat:'Hi there',chatCount:10,time:'18:05'},
//     {id:'3',Name:'Pegah',lastChat:'Hi there',chatCount:10,time:'18:05'},
//     {id:'4',Name:'Zahra',lastChat:'Hi there',chatCount:10,time:'18:05'}
// ]

export default function Main() {
  const [state, dispatch] = useReducer(reducer, {
    keyword: "",
    val:"",
    itemId:null,
    listItem:[],
    mode:'search'
  });



//keyword,dispatch,itemId,listItem,mode
  return (
      <PropsContext.Provider value={dispatch}>
    <div>
      <Head />
      <div>
        <div className="row">
          <div className="col-md-4">
            <LeftSide mode={state.mode} kw={state.val} itmId={state.itemId}/>
            {/* <List data={Data}/> */}
          </div>
          <div className="col-md-8" style={{ border: "2px solid #e5c3c3" }}>
            <Content listItem={state.listItem}   keyword={state.keyword} id={state.itemId}/>
          
          </div>
        </div>
      </div>
    </div>
      </PropsContext.Provider>
  );
}
