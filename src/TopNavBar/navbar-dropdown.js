import React  from 'react';
import './top-navbar.css'

const TopNav = {

    Dropdown : class NavDropdown extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapse : false,
    
            }
    
    
        }
    
        handleClick = () => {
            this.setState({ collapse: !this.state.collapse }); 
        }
     
    
        render() {
    
            return(   
                <div className={"dropdown nav-item " }>
                <a aria-haspopup="true" href="#" className="dropdown-toggle nav-link" role="button" onClick={this.handleClick}>{this.props.name}</a>
                <div className={"dropdown-menu " + (this.state.collapse? "show" : "")}>
                {this.props.children}
                </div>
            </div>                 
            );
        }
    }
    

}




export default TopNav;