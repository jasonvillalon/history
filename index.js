import {browserHistory, hashHistory} from "react-router"
const History = window.cordova ? hashHistory : browserHistory
export default History
