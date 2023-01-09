import React from "react"
// import {useSelector, useDispatch} from "react-redux"
import Number from "./Number"
import Info from "./Info"
import Buttons from "./Buttons"

// import { incrementNumber, decrementNumber, changeUnit, changeInfo } from "./redux/action"

import {useSetRecoilState} from "recoil"

import {info, unit} from "./CounterState"

const Counter = () =>{

    // const [number, setNumber]=React.useState(0)

    // const dispatch = useDispatch()

    const setInfo =useSetRecoilState(info)
    const setUnit =useSetRecoilState(unit)


    const changeUnitEvent=(e)=>{
        setUnit(parseInt(e.target.value))
    }

    const changeInfoEvent=(e)=>{
        setInfo(e.target.value)
    }

    return(
        <React.Fragment>
            <Number/>
            <Buttons/>
            <input type="text" onChange={changeUnitEvent}/>
            <input type="button" value="stegeus" onClick={changeInfoEvent}></input>
            <input type="button" value="myInfo" onClick={changeInfoEvent}></input>
            <Info/>
        </React.Fragment>
    )

}

export default Counter