import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import TopNavBar from './top-nav';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
     
    this.handleClick = this.handleClick.bind(this);
  }

 

  handleClick(e,sender)
  {
      console.log(sender);
      switch(sender.props.name)
      {
        case 'brand':
          this.setState({ sidebarOpen: !this.state.sidebarOpen });    
          break;
        default:
          break;
      }
         
  }

 

  render() {
    return (
     <div d="App" className="app-body">
    <React.Fragment>
      <Router>
        <TopNavBar bg="bg-info" expand="navbar-expand-lg" callback={this.handleClick}/>
        {/* <SideNav open={this.state.sidebarOpen}  callback={this.handleClick}/> */}
 

        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch> */}
      </Router>
    </React.Fragment>
    </div>
    );
  }
}

export default App;
