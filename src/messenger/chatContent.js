import React from "react";
import styled from "styled-components";
import {withDispatch} from './context';
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  height: 400px;
`;

const Section = styled.li`
  list-style-type: none;
  background-color: #e5f4f2;
  margin-top: 55px;
  padding-left: 10px;
  border: 1px solid #d1eeea;
  border-radius: 7px;
  height: 40px;
`;

const Li = styled.li`
  list-style-type: none;
  background-color: #e5f4f2;
  padding-left: 10px;
  border: 1px solid #d1eeea;
  border-radius: 7px;
  height: 40px;
  margin-top: 15px;
`;

export const LiItem = styled.li`
  list-style-type: none;
  background-color: #2af00b;
  padding-left: 10px;
  border: 1px solid #d1eeea;
  border-radius: 7px;
  height: 40px;
  margin-right:25px;
  margin-top: 105px;
`;

export default function ChatContent({ keyword,liItem=[],dispatch}) {
  return (
    // <PropsContext.Consumer>
      // {(dispatch)=>
    <div>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <ul className="col-md-6">
              <Section>
                <span style={{ justifyContent: "center" }}>Hi there</span>
              </Section>
              <Li>Hi there</Li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <Li
                style={{
                  backgroundColor: "#2af00b",
                  justifyContent: "center",
                  marginRight: 25,
                }}
              >
                Hi
              </Li>
              {liItem.map(item=>{
                return <LiItem  style={{ justifyContent: "center"}}>{keyword}</LiItem>
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
//}
    // </PropsContext.Consumer>
  );
}
