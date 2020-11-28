import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../img/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
  background-color: #f9eded;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const Span = styled.span`
  padding-left: 30px;
  font-size: 30px;
  font-weight: 700;
`;

export default function HeaderContent({Id,onClose}) {
  return (
    <div>
      <Div className="row">
        <div className="col-md-3">
          <FontAwesomeIcon
            icon={faTimes}
            className="fa-lg"
            onClick={()=>onClose()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              color: "#0ec1aa",
              cursor:"pointer"
            }}
          />
        </div>
        <div className="col-md-6">
            <Image src={avatar} style={{paddingBottom:5}} />
            <Span>Reza</Span>
        </div>
        <div className="col-md-3">
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="fa-lg"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              color: "#0ec1aa",
            }}
          />
        </div>
      </Div>
    </div>
  );
}
