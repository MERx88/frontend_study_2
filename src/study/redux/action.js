

const incrementNumber =()=>{
    return{
        "type" : "INCREMENT_NUMBER"
    }
       
}

const decrementNumber =()=>{
    return{
        "type" : "DECREMENT_NUMBER"
    }
    
}

const changeUnit=(unit)=>{
    return{
        "type": "CHANGE_UNIT",
        "unit" : unit
    }
}

const changeInfo=(info)=>{
    return{
        "type": "CHANGE_INFO",
        "info": info
    }
}

export {incrementNumber,decrementNumber,changeUnit,changeInfo}