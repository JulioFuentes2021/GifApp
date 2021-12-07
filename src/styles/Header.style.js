import styled from "styled-components"

export const Header = styled.header`
    background-color: #fff;
    display: flex;
    color: #007add;
    justify-content: space-between;
    margin: .5rem;
`;

export const Logo = styled.span`
    font-size: clamp(1rem, 3vw, 3rem);
    color: blue;
    padding: .5rem;
    cursor: pointer;
`;

export const Bars = styled.span`
    font-size: clamp(.8rem, 3vw, 2rem);
`;

export const BarsSection = styled.ul`
    display: flex;
`;