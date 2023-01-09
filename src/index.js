import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {RecoilRoot} from "recoil"

import App from "./study/App"
import store from "./study/redux/reducer"

ReactDOM.createRoot(document.getElementById("root")).render(<RecoilRoot><App/></RecoilRoot>)

