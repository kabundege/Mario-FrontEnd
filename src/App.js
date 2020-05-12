  import React,{ Component } from 'react';
  import { BrowserRouter,Route,Switch } from 'react-router-dom';
  import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
  import Nav from './Components/layout/navBar' ;
  import Dash from './Components/dashboard/dashboard';
  import ProjectDetail from './Components/projects/projectDetails';
  import Signin from './Components/auth/signinPage';
  import Signup from './Components/auth/signupPage';
  import Create from './Components/projects/createProject'
  import Forgot from './Components/password/forgotePassword'
  import Reset from './Components/password/resetPassword'
  import Landing from './Components/dashboard/landing'
  import Footer from './Components/additional/footer'
  import Update from './Components/projects/updateProject'
  import AboutUs from './Components/additional/AboutUs'
  import Contanct from './Components/additional/contanct'
  import Portfolio from './Components/additional/portfolio'
  import Verify from './Components/password/verifyAccount'
  import PageNotFound from './Components/additional/pageNotFound'

  class App extends Component {
    scrollUp = {background:'transparent',border:"1px solid green",outline:"none"}
    render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Nav />
              <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/login" component={Signin}/>
                <Route path='/dash' component={Dash}/>
                <Route path='/project/:id' component={ProjectDetail}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/create" component={Create}/>
                <Route path="/forgotpassword" component={Forgot}/>
                <Route path="/reset" component={Reset}/>
                <Route path="/update/:id" component={Update}/>
                <Route path="/about-us" component={AboutUs}/>
                <Route path="/contact-us" component={Contanct}/>
                <Route path="/more" component={Portfolio}/>
                <Route path="/verify/:token" component={Verify}/>
                <Route path="/PageNotFound" component={PageNotFound}/>
              </Switch>
            <Footer/>
          </div>
          <ScrollUpButton style={this.scrollUp} />
        </BrowserRouter>
      )
    }
  }
export default App
