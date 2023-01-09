import React from "react"

// import { incrementNumber, decrementNumber, changeUnit, changeInfo } from "./redux/action"

import {useSetRecoilState, useRecoilValue, useRecoilState, useResetRecoilState} from "recoil"

import {number,unit} from "./CounterState"

import styled from "styled-components"

const ButtonStyle=styled.input`
    width: 100px;
    height: 40px;
    color : ${props => props.color};
`


const Buttons=()=>{

    //스테이트 값을 가죠오는 친구(리랜더링에 영향이 가는친구)

    // const numberState = useSetRecoilValue(number)
    const unitState = useRecoilValue(unit)
    // //스테이트를 업데이트하는 함수를 가져오는 친구
    // const setNumber = useSetRecoilState(number)

    const [numberState, setNumber]=useRecoilState(number)


    const increaseEvent=()=>{
            setNumber(numberState+unitState)
        }
    
        const decreaseEvent=()=>{
            setNumber(numberState-unitState)
        }

        useResetRecoilState(number)
 
    return(
        <div>
            <ButtonStyle type="button" value="증가" color="red" onClick={increaseEvent}></ButtonStyle>
            <ButtonStyle type="button" value="감소" color="blue" onClick={decreaseEvent}></ButtonStyle>
        </div>
    )
}

export default Buttons