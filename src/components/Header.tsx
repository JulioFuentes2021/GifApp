import React from "react";
import { Header, Logo, Bars, BarsSection } from '../styles/Header.style';
import { UploadButton, SignInButton } from '../GlobalStyles/Buttons';
// import {} from 'styled-components/cssprop';
import { FaBars } from 'react-icons/fa';

const Header1:React.FC = () => {
    return (
        <Header>
            <Logo>
                GifApp
            </Logo>
            <BarsSection>
                <UploadButton>
                    Upload
                </UploadButton>
                <SignInButton>
                    Sign In
                </SignInButton>
                <Bars>
                    <FaBars />
                </Bars>
            </BarsSection>
        </Header>
    )
}

export default Header1;