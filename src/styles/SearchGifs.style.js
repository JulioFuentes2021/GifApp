import styled from "styled-components";

export const SearchGifsContainer = styled.div`
    background-color: #2e93e6;
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
`;

export const SearchGifsInput = styled.input.attrs(props => ({
    type: "text",
    placeholder: "Search for GIFs and Stickers"
  }))`
    background-color: #fff;
    border-radius: .5rem;
    width: 100%;
    height: 3rem;
    border: none;
    /* border: 1px solid #000; */
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.60);
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.60);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.60);
    padding: 0 1rem;

`;

export const Icon = styled.span`
    position: absolute;
    right: 0;
    margin: 0 1rem 0 0;
    cursor: pointer;
    height: 3rem;
    display: flex;
    align-items: center;
`;


// export const SearchGifBar = styled.input`
//     background-color: #fff;
//     border-radius: .5rem;
// `;

