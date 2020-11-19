import React, { useReducer } from "react";
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
  });

  return (
    <div>
      <Head />
      <div>
        <div className="row">
          <div className="col-md-4">
            <LeftSide />
            {/* <List data={Data}/> */}
          </div>
          <div className="col-md-8" style={{ border: "2px solid #e5c3c3" }}>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}
