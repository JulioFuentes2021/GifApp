import styled from "styled-components";
// import { styled } from 'styled-components/cssprop'

export const UploadButton = styled.button`
    color: #fff;
    background-color: #007add;
    font-weight: 500;
    border: none;
    font-size: clamp(.8rem, 3vw, 1.3rem);
    margin: 0 1rem;
    box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.20);
    -webkit-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.41);
    cursor: pointer;
    padding: .5rem;
`;

export const SignInButton = styled.button`
    border: 1px solid #007add;
    color: #007add;
    font-size: clamp(.8rem, 3vw, 1.3rem);
    margin: 0 1rem 0 0;
    background-color: #fff;
    box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.20);
    -webkit-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.41);
    padding: .4rem;
    cursor: pointer;
`;