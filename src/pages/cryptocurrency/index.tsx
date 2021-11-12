import React from 'react';
import {PercentTdStyled, TableStyled, TbodyStyled} from "./style";


// название и картинка
// цена
//изме
//MKTCAP
//CHANGE24HOUR в процентах

export const Cryptocurrency = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200}}>
            <TableStyled>
                <thead>
                <tr>
                    <th>Монета</th>
                    <th>Полное название</th>
                    <th>Цена</th>
                    <th>Изменения за 24 часа</th>
                    {/*CHANGEPCT24HOUR*/}
                    <th>Market Cap</th>
                    {/*MKTCAP*/}
                </tr>
                </thead>
                <TbodyStyled>
                    <tr>
                        <td>
                            <img style={{width: 30}} src="https://www.cryptocompare.com/media/37746251/btc.png"
                                 alt="btc"/>
                            BTC
                        </td>
                        <td>Bitcoin</td>
                        <td>$69 9000</td>
                        <PercentTdStyled color="#EF5C5C">
                            <span>
                                -2.41%
                            </span>
                        </PercentTdStyled>
                        <td>$ 1,201.47 B</td>
                    </tr>
                    <tr>
                        <td>
                            <img style={{width: 30}} src="https://www.cryptocompare.com/media/37746251/btc.png"
                                 alt="btc"/>
                            BTC
                        </td>
                        <td>Bitcoin</td>
                        <td>$69 9000</td>
                        <PercentTdStyled color="#5CEF6A">
                            <span>
                                -2.41%
                            </span>
                        </PercentTdStyled>
                        <td>$ 1,201.47 B</td>
                    </tr>
                </TbodyStyled>
            </TableStyled>
        </div>
    )
}
