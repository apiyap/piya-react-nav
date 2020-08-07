import React , {Children , isValidElement, cloneElement} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './nav-top.css';

class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive : false,
            action : '',
          };

        this.childHandleClick = this.childHandleClick.bind(this);
    }
    
    childHandleClick(e, sender)
    {

        
        switch(sender.state.type)
        {
            case "toggle":
                this.setState({responsive : !this.state.responsive});
                break;
            case "top-nav-item":
                this.setState({
                    action : sender.props.href,
                    responsive : false
                });
                break
            default:
                this.setState({responsive : false});
                break;
        }

        
    }

    render() {

        var { action , responsive } = this.state;
        const css = (responsive?" responsive": "" );

        const eles = Children.map(this.props.children, (child, idx) => {
            // Checking isValidElement is the safe way and avoids a TS error too.
            if (isValidElement(child)) {
                switch(child.type.name)
                {
                    case "NavDropdown":
                        //console.log(child);
                        return cloneElement(child, { 
                            css: (action===child.props.href? " active" : "" ),
                            callback: this.childHandleClick  
                        });
                        break;
                    case "NavMenu":          
                        if(action==='' && idx===0 )
                        {
                            action = child.props.href;
                        }
                        return cloneElement(child, { 
                            css: (action===child.props.href? " active" : "" ),
                            callback: this.childHandleClick  
                        });
                    case "NavToggle":
                        return cloneElement(child, { callback: this.childHandleClick })
                    default:
                        return cloneElement(child/* , { callback:this.childHandleClick } */)

                }
            }
        });

        return(
        <div className={"topnav" + css} /* onClickCapture={this.childHandleClick} */ >
            {eles}
        </div>
        );
    }
    
}

class NavToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type : 'toggle',
          };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        e.preventDefault();
        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,this);
        }
    }
    render() {
        return(
            <a type="button" role="button" href={"#"} className="top-nav-item icon" onClick={this.handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        );
    }
}

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type : 'top-nav-item',
          };
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick = (e) => {
        e.preventDefault();
        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,this);
        }
    }
    render() {
        const {href, css} = this.props;

        return(
            <a href={href} className={"top-nav-item" + css} onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type : 'top-nav-item',
          };
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick = (e) => {
        e.preventDefault();
        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,this);
        }
    }
    render() {
        const {href, css, name} = this.props;

        return(
        <div className={"top-nav-item" + css} onClick={this.handleClick}>
            <a href="#" className="dropbtn" >Dropdown 
                <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div> 
        );
    }
}


const Nav = {
    Top : NavTop,
    // Brand : Brand,
    Toggle : NavToggle,
    Menu : NavMenu,
    // Collapse : NavCollapse,
    // Bar : Navbar,
    // Link : NavLink,

    Dropdown :{
      Menu: NavDropdown,
     // Item: NavDropdownItem,
      Divider : ()=>{ return (<div className="dropdown-divider" role="separator"></div>); }
    }
  }
   
  
  export default Nav;
