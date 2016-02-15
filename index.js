import createBrowserHistory from "history/lib/createBrowserHistory"
import createHashHistory from "history/lib/createHashHistory"
const History = window.cordova ? createHashHistory() : createBrowserHistory()
export default History
