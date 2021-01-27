import React, {useState} from 'react';
import './Users.css';
import Preloader from '../preloader/preloader'
import { NavLink } from 'react-router-dom';
//import axios from 'axios'
import {API} from '../api/api'

const UsersCom = (props) => {
    let pagesCount = Math.ceil( props.totalCount / props.countInPage);

    let pages = [];
    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i) 
        }

    const [positionNumber, changeNumber] = useState(1) //обработчик откуда стартует и функция изменения state 
    const positionCount = Math.ceil(pagesCount / props.countInPage); //это величина, на которую можно максиимум изменить positionNumber
    
    const leftPositionNumber = (positionNumber - 1) * 100 + 1;
    const rightPositionNumber = positionNumber * 100;

    return (
        <>
             {props.isPreloader? <Preloader/> : undefined}
            <div>

               {/* {positionNumber > 1 && <button onClick={changeNumber(positionNumber -1)}>Назад</button>}
                
                {pages
                    .filter(pop => pop >= leftPositionNumber && pop <= rightPositionNumber)
                    .map((pop) => { 
                    return  <span key={pop} className={props.numberCount === pop ? 'activePage': undefined}
                        onClick={ (e) => {props.newPage(pop)}}
                        >{pop}</span>
                    }
                    )}

                {positionCount > positionNumber && <button onClick={changeNumber(positionNumber + 1)}>Вперед</button>}
                 */}
