import {createStore} from "redux"

//초기 state
const init = {
    "number":0,
    "unit":1,
    "info": "버튼을 눌러주세요"
}

//create reducer 

const reducer = (state=init, action)=>{
    switch (action.type) {
        case "INCREMENT_NUMBER" :
        return{
            ...state, //이부분을 해주지 않으면 바꾸려는 스테이트외에 스테이트가 날아가게 됨
            "number" : state.number + state.unit

        }
        case "DECREMENT_NUMBER" :
        return{
            ...state,
            "number" : state.number - state.unit
        }
        case "CHANGE_UNIT":
            return{
                ...state,
                "unit" : parseInt(action.unit)
            }
        case "CHANGE_INFO":
            return{
                ...state,
                "info" : action.info
            }
        //1. 제일 처음 리덕서가 호출될떄 초기 스테이트를 컴포넌트로 주기 위해서
        //2. 컴포넌트에서 스테이트를 가져오는 요청을 했을때
        default:
            return state
    }
}

//create store

const store = createStore(reducer)

export default store