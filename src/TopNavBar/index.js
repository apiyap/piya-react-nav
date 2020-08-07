import React ,{ Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

import NavBrand from './navbar-brand'
import NavToggler from './navbar-toggler'
import NavCollapse from './navbar-collapse'
import TopNav from './navbar-dropdown'

import '../../layout.css';
import  './index.css';



export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      open: false,
      activePath: '/',
      items: [
          {
            path: '/', /* path is used as id to check which NavItem is active basically */
            name: 'Home',
            css: 'fa fa-fw fa-home',
            key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
          },
          {
            path: '/about',
            name: 'About',
            css: 'fa fa-fw fa-clock',
            key: 2
          },
          {
            path: '/NoMatch',
            name: 'NoMatch',
            css: 'fas fa-hashtag',
            key: 3
          },
        ]
   }
   this.onNavbarTogglerClick = this.onNavbarTogglerClick.bind(this);
   this.onNavBrandClick =  this.onNavBrandClick.bind(this);

   
 }


 
 onNavbarTogglerClick(){
  //console.log("onNavbarTogglerClick:");
  this.setState({ toggle: !this.state.toggle }); 
  //console.log(this.state.toggle);
   
 }
 onNavBrandClick()
 {
   console.log("onNavBrandClick");
 }

 

 render() {
  // const { items, activePath } = this.state;
  return(
<nav className ="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
    <NavBrand onItemClick={this.onNavBrandClick}><FontAwesomeIcon icon={faCogs} /></NavBrand>
    <NavToggler default="" on ="" onItemClick={this.onNavbarTogglerClick} >
      <span className="navbar-toggler-icon"></span>
    </NavToggler>
 
    <NavCollapse default="collapse" on="collapsed" collapse={this.state.toggle} >
        <div className="mr-auto navbar-nav">
            <a value="connect" href="#features" data-rb-event-key="#features" className="nav-link">Connected</a>
            <TopNav.Dropdown name="Dropdown" >
                <a href="#action/3.1" className="dropdown-item">Action</a>
                <a href="#action/3.2" className="dropdown-item">Another action</a>
                <a href="#action/3.3" className="dropdown-item">Something</a>
                <div className="dropdown-divider" role="separator"></div>
                <a href="#action/3.4" className="dropdown-item">Separated link</a>
            </TopNav.Dropdown>
        </div>
    </NavCollapse>
</nav>
  );
 }
  
};
