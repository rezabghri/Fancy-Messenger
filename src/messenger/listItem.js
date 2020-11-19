import React from "react";
import styled from "styled-components";
import avatar from "../img/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Row = styled.div``;

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const Span = styled.span`
  float: right;
  color: #c3bfbf;
`;

export default function ListItem({ Name, lastChat, chatCount, time }) {
  return (
    <div>
        <li style={{listStyleType:"none"}}>
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
      </li>
    </div>
  );
}