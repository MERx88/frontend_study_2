import React from "react"
// import {useSelector, useDispatch} from "react-redux"
import {useRecoilValue} from "recoil"
import styled from "styled-components"

import {P, CursorP} from "./styles/P"

import {number ,isEven} from "./CounterState"

const NumberDiv =styled.div`
    height :100px;
    text-align:center;
    color : ${props => props.color};

`

const Number = () =>{

    // const [number, setNumber]=React.useState(0)

    const numberstate=useRecoilValue(number)
    const isEvenState =useRecoilValue(isEven)

    return(
        <React.Fragment>
            <NumberDiv>
                <P >{numberstate}</P>
                <CursorP color={isEvenState=="홀수" ? "red" :"blue"}>{isEvenState}</CursorP>
            </NumberDiv>
        </React.Fragment>
    )

}

export default Number