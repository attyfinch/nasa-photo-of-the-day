import React, { useState, useEffect} from "react";
import styled from 'styled-components';

const StyledDescrip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    text-align: left;
`

const StylishButton = styled.button`
  align-items: center;
  appearance: button;
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  padding: 20px 20px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

const Description = ({ title, exp, copyright, date }) => {
    return (
        <StyledDescrip>
            <h2>{title}</h2>
            <p className="picTaker">Image by: {copyright}</p>
            <p className="description">{exp}</p>
            <StylishButton>Get HD Version</StylishButton>
        </StyledDescrip>
    )
}

export default Description




