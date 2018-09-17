import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Main from './Main'


 class App extends React.PureComponent {
   state = {
     currentUser: null,
  }

   updateUserList = (currentUser) => {
     this.setState({ currentUser });
   }
   render() {
     return (
       <Router>
         <div>
           <Route exact path='/' component={Home} />
           <Route path='/signin/' component={SignIn} />
          <Route path='/signup' component={() => <SignUp updateUserList={this.updateUserList}/>} />
           <Route path='/main' component={() => <Main currentUser={this.state.currentUser} />} />
        </div>
    </Router>
   )
  }
}


export default App

