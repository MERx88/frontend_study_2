import {atom, selector} from "recoil" 

export const number = atom({
    "key":"number",
    "default":0
})

export const unit = atom({
    "key":"unit",
    "default":1
})

export const info = atom({
    "key":"info",
    "default":"스테지어스"
})

export const isEven =selector({
    "key" : "isEven",
    "get" : ({get})=>{
        const numberValue =get(number)
        return numberValue % 2 == 0 ? "짝수" : "홀수"
    }
})