import React from 'react';
import { SearchGifsContainer, SearchGifsInput, Icon } from '../styles/SearchGifs.style';
import { FaSearch } from 'react-icons/fa';

const SearchGifs = () => {
    return (
        <SearchGifsContainer>
            <SearchGifsInput />
            <Icon>
                <FaSearch />
            </Icon>
        </SearchGifsContainer>
    )
};

export default SearchGifs;