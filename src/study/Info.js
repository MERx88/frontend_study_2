import React from "react"
import {useSelector, useDispatch} from "react-redux"

import {useRecoilValue} from "recoil"

import {info} from "./CounterState"


const Info = () =>{

    // const [number, setNumber]=React.useState(0)

    const infoState=useRecoilValue(info)

    return(
        <React.Fragment>
            <div>{infoState}</div>
        </React.Fragment>
    )

}

export default Info