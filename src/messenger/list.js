import React from "react";
import ListItem from "./listItem";
import styled from "styled-components";
import { PropsContext } from "./context";

const Ul = styled.ul`
  cursor: pointer;

  
`;

const HR = styled.hr`
  height: 1px;
  color: #e5c3c3;
`;

export default function List({ data }) {
  return (
    <PropsContext.Consumer>
      {(itemId)=>
        <div>
          <Ul>
            {data.map((item) => {
              return (
                <>
                  <ListItem
                    isOvered={itemId===item.id}
                    key={item.id}
                    Name={item.Name}
                    lastChat={item.lastChat}
                    time={item.time}
                    chatCount={item.chatCount}
                  />
                  <HR />
                </>
              );
            })}
          </Ul>
        </div>
      }
    </PropsContext.Consumer>
  );
}
