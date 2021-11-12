import React from 'react';

import {WrapperHeader, WrapperItemsStyled, WrapperProfileStyled} from './style'

export const TopHeader = () => {
    return (
        <WrapperHeader>
            <WrapperItemsStyled>
                <span>Баланс портфеля: <b>$10 000</b></span>
                <span>Общий доход:<b>▲ 12.7%</b></span>
                <span>Цена BTC:<b>$69 082</b></span>
                <span>Курс доллара:<b>₽70</b></span>
            </WrapperItemsStyled>
            <WrapperProfileStyled>
                <span>
                    <b>Профиль</b>
                </span>
                <span>☽</span>
            </WrapperProfileStyled>
        </WrapperHeader>
    );
};
