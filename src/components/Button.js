import React from 'react';
import './Button.CSS';
import { Link } from 'react-router-dom';
const STYLES = ['btn--primary' , 'btn--outline'];
const SIZES = ['btn-medium' ,'btn-large'];
export const button =({children, type, onClick, buttonStyle, buttonSize}) => {const checkButtonStyle=Styles.includes(buttonstyle) ? buttonStyle : STYLES[0];
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLE[0]; 
return(<link to = '/home4' classname='btn-mobile'> 
         <button
classname = {'btn ${checkButtonStyle} ${checkButtonSize}'}
onClick={onClick}>
type={type}
       >
         {childeren}
         </button>
         </link>
        ) 
        };                                                                          }
