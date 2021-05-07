import FileUpload from './components/FileUpload'
import GetData from './components/GetData'
import LoginLogout from './components/LoginLogout'
import AuthWrapper from './AuthWrapper'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact={true} path="/">
            <>
              <FileUpload />
              <GetData />
            </>
          </PrivateRoute>
          <Route path="/login">
            <LoginLogout />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  )
}

export default App
