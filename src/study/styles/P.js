
import styled from "styled-components"


const P = styled.p`
    width: fit-content;
    height :fit-content;
    color : ${props => props.color || "green"};
`
const CursorP =styled(P)`
    cursor:pointer;

`
export {P,CursorP} 

//대그를 만들어서 해당 태그에 불을수있는 스타일을 미리 지정해두는것
//장점 더이상 컴포넌트를 만들면서 css 문법을 신경쓰지 않아도 됨

//2.당연하세 적용되어야하는 기본값혹은 프롭스가 안들어왓을떄의 기본값 지정가능

//3.프롮스가 너무 많아지면 지저분 하지 않나요?
//이름으로 구분지을수잇음

//4. 공통으로 쓰이지 않고 어떤 컴포넌트에서만 쓰이고 말애들이면 그냥 그컴포넌트 안에 적어주면 끝