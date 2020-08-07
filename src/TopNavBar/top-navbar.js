import React ,{Children, isValidElement , cloneElement} from 'react';
import './top-navbar.css'


class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            expand: (typeof(this.props.expand)==='undefined')? '':' '+this.props.expand,
            style: (typeof(this.props.style)==='undefined')? '':' '+this.props.style,
            bg: (typeof(this.props.bg)==='undefined')? '':' '+this.props.bg,
            fixed: (typeof(this.props.fixed)==='undefined')? '':' '+this.props.fixed,
            height:(typeof(this.props.height)==='undefined')? 32 :this.props.height,
        };

        // this.childHandleClick = this.childHandleClick.bind(this);
      }

    //   childHandleClick = (e, sender) =>{
    //     const { callback } = this.props;
    //     if(typeof(callback) === 'function') {
    //         callback(e,sender);
    //     }
    // }

    render() {
        // const eles = Children.map(this.props.children, child => {
        //     // Checking isValidElement is the safe way and avoids a TS error too.
        //     if (isValidElement(child)) {
        //       return cloneElement(child, { callback:this.childHandleClick })
        //     }
        // });

        return(
            <nav  className ={`navbar${this.state.expand}${this.state.style}${this.state.bg}${this.state.fixed}`}>
                {this.props.children}
            </nav>
        );
    }
}

// class Item extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick = (e) => {
//         const { callback } = this.props;
//         if(typeof(callback) === 'function') {
//             callback(e,this);
//         }
//     }

//     render() {
//         const { css, active } = this.props;
//         return(
//              <div className={"navitem " + active}>
//                 <a href="#" className={css} onClick={this.handleClick}>
//                     <div></div>
//                 </a>
//              </div>
//         );
//     }
// }


class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (e) => {
        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,this);
        }
    }

    render() {

        return(
            <a href="#" className="navbar-brand" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}


class NavToggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        
        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,this);
        }
    }

    render() {

        return(
            <button  type="button" className={"navbar-toggler" } onClick={this.handleClick}>
                <span className="navbar-toggler-icon"></span>
                {this.props.children}
            </button>            
        );
    }
}


class NavCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

 
    render() {
        return(
            <div className={"navbar-collapse " + (this.props.collapse? "collapsed" : "collapse") } style={null}  >
                {this.props.children}
            </div>         
        );
    }
}

class Navbar extends React.Component {
    render() {
        return(
            <div className="mr-auto navbar-nav">
                {this.props.children}
            </div>         
        );
    }
}

class NavLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
        const { href } = this.props;
        return(
             <a href={href} className="nav-link" onClick={this.handleClick}> {this.props.children}</a>
        );
    }
}


class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse : false,

        }
        this.handleClick = this.handleClick.bind(this);
        this.childHandleClick = this.childHandleClick.bind(this);

    }

    handleClick = (e) => {
        this.setState({ collapse: !this.state.collapse }, ()=>{
            const { callback } = this.props;
            if(typeof(callback) === 'function') {
                callback(e,this);
            }
        }); 
    }

    childHandleClick = (e, sender) =>{
       
        this.setState({ collapse: !this.state.collapse },()=>{
            const { callback } = this.props;
            if(typeof(callback) === 'function') {
              
                callback(e,sender);
            }
        }); 
    }

    render() {

       const eles = Children.map(this.props.children, child => {
            // Checking isValidElement is the safe way and avoids a TS error too.
            if (isValidElement(child)) {
              return cloneElement(child, { callback:this.childHandleClick })
            }
        });

        return(   
            <div className={"dropdown nav-item " }>
            <a aria-haspopup="true" href="#" className="dropdown-toggle nav-link" role="button" onClick={this.handleClick}>{this.props.label}</a>
            <div className={"dropdown-menu " + (this.state.collapse? "show" : "")}>
            {eles}
            </div>
        </div>                 
        );
    }
}
class NavDropdownItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
        const { href } = this.props;
        return(
            <a href={href} className="dropdown-item" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

const Nav = {
  TopBar : TopNavbar,
  Brand : Brand,
  Toggle : NavToggler,
  Collapse : NavCollapse,
  Bar : Navbar,
  Link : NavLink,
  Dropdown :{
    Menu: NavDropdown,
    Item: NavDropdownItem,
    Divider : ()=>{ return (<div className="dropdown-divider" role="separator"></div>); }
  }
}
 

export default Nav;
