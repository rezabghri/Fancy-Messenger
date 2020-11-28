import React,{useContext} from "react";
import ListItem from "./listItem";
import styled from "styled-components";
import { PropsContext } from "./context";
import {ACTIONS} from './reducer';

const Ul = styled.ul`
  cursor: pointer;

  
`;

const HR = styled.hr`
  height: 1px;
  color: #e5c3c3;
`;

export default function List({ datas=[],itemid,usr=[]}) {
  const dispatch=useContext(PropsContext);

  const handleItemClick=(id)=>{
      let res=datas.find(x=>x.ID===id);
     
      dispatch({
        type:ACTIONS.ITEM_CLICK,
        payload:id
      })
      console.log(res)
  }

  return (
        <div>
          <Ul>
            {datas.map((item) => {
              return (
                <>
                  <ListItem
                    ID={itemid===item.id}
                    key={item.id}
                    Name={item.Name}
                    lastChat={item.lastChat}
                    time={item.time}
                    chatCount={item.chatCount}
                    onItem={handleItemClick}
                  />
                  <HR />
                </>
              );
            })}
          </Ul>
        </div>
  );
}
