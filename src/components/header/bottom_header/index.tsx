import React from 'react';
import {Link} from "react-router-dom";

import {WrapperItemsStyled} from "./style";

export const BottomHeader = () => {
    return (
        <div>
            <WrapperItemsStyled>
                <span>
                    <Link to="/">
                        *icon*
                    </Link>
                </span>
                <span>
                    <Link to="/briefcase">
                        Мой портфель
                    </Link>
                </span>
                <span>
                    <Link to="/test">
                        Тест
                    </Link>
                </span>
                <span>
                    <Link to="/cryptocurrency">
                        Криптовалюты
                    </Link>
                </span>
            </WrapperItemsStyled>
        </div>
    );
};
