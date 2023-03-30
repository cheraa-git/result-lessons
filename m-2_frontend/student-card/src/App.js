import {Route, Switch} from "react-router-dom"
import {StudentCardPage} from "./pages/StudentCardPage"
import {EditStudentPage} from "./pages/EditStudentPage"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={StudentCardPage}/>
        <Route path="/edit" exact component={EditStudentPage}/>
      </Switch>
    </>
  )
}

export default App
