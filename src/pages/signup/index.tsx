import React from 'react';

import {FormStyled, ContainerStyled, InputWrapperStyled, TitleStyled, ButtonWrapperStyled} from "./style";

export const Signup = () => {
    return (
        <ContainerStyled>
            <FormStyled>
                <div style={{background: 'rgb(155 169 232);'}}>
                    <TitleStyled>
                        Регистрация
                    </TitleStyled>
                </div>
                <InputWrapperStyled>
                    <input type="text" placeholder="Имя"/>
                </InputWrapperStyled>
                <InputWrapperStyled>
                    <input type="text" placeholder="Почта"/>
                </InputWrapperStyled>
                <InputWrapperStyled>
                    <input type="text" placeholder="Пароль"/>
                </InputWrapperStyled>
                <InputWrapperStyled>
                    <input type="text" placeholder="Подтвердите пароль"/>
                </InputWrapperStyled>
                <ButtonWrapperStyled>
                    <button type="submit" onClick={(e) => e.preventDefault()}>Зарегистрироваться</button>
                </ButtonWrapperStyled>
                <h6 style={{margin: 0, fontSize: 14}}>
                    Или
                </h6>
                <ButtonWrapperStyled style={{background: 'rgb(235 238 255);', color: 'white'}}>
                    <button type="submit" onClick={(e) => e.preventDefault()}>Авторизация</button>
                </ButtonWrapperStyled>
            </FormStyled>
        </ContainerStyled>
    );
};
