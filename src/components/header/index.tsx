import React from 'react';

import {TopHeader} from './top_header';
import {BottomHeader} from './bottom_header';

import {WrapperStyled} from "./style";

export const Header = () => {
    return (
        <WrapperStyled>
            <TopHeader/>
            <BottomHeader/>
        </WrapperStyled>
    )
}
