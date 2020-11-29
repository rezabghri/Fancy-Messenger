import React, { useReducer,useContext } from "react";
import { PropsContext } from "./context";
import { ACTIONS } from "./reducer";
import styled from "styled-components";
import avatar from "../img/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Row = styled.div`
&:hover {
  background-color: #0edba9;
  transition:1s;
}
`;

const Li = styled.li`

`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const Span = styled.span`
  float: right;
  color: #c3bfbf;
`;

const HR = styled.hr`
  height: 1px;
  color: #e5c3c3;
`;


export default function ListItem({
  Name,
  lastChat,
  chatCount,
  time,
  onItem,
  isOvered,
  dataa=[]
}) {

  const dispatch=useContext(PropsContext);

  const handleItemClick=(id)=>{
    //let res=dataa.find(x=>x.id===id);
   
    dispatch({
      type:ACTIONS.ITEM_CLICK,
      payload:id
    })
    //console.log(res)
}


  return (

        <div>
        { dataa.map(item=>{
          return  (
            <>
            <Li style={{ listStyleType: "none" }} onClick={handleItemClick} key={item.id} >
          <Row className="row col-lg-12 col-md-12">
            <div>
              <Image
                className="img-responsive img-circle"
                src={avatar}
                alt="reza"
              ></Image>
            </div>
            <div className="col-md-3">
              <span style={{ fontSize: 18, fontWeight: 600 }}>{item.Name}</span>
              <div>
                <span>{item.lastChat}</span>
              </div>
            </div>
            <div className="col-md-7">
              <Span>{item.time}</Span>
              <div>
                <span
                  style={{
                    backgroundColor: "#c3bfbf",
                    borderRadius: "50%",
                    color: "#ccc",
                    float: "right",
                  }}
                >
                  {item.chatCount}
                </span>
              </div>
            </div>
          </Row>
        </Li>
        <HR/>
        </>
          )
          
        })}








          {/* onMouseOver={()=>dispatch({type:ACTIONS.COLOR_CHANGE,payload:itemId})} */}
          {/* <Li style={{ listStyleType: "none" }} onClick={()=>onItem()} >
            <Row className="row col-lg-12 col-md-12">
              <div>
                <Image
                  className="img-responsive img-circle"
                  src={avatar}
                  alt="reza"
                ></Image>
              </div>
              <div className="col-md-3">
                <span style={{ fontSize: 18, fontWeight: 600 }}>{Name}</span>
                <div>
                  <span>{lastChat}</span>
                </div>
              </div>
              <div className="col-md-7">
                <Span>{time}</Span>
                <div>
                  <span
                    style={{
                      backgroundColor: "#c3bfbf",
                      borderRadius: "50%",
                      color: "#ccc",
                      float: "right",
                    }}
                  >
                    {chatCount}
                  </span>
                </div>
              </div>
            </Row>
          </Li> */}
        </div>
      

  );
}
