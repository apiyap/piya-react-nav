import React ,{Children, isValidElement , cloneElement} from 'react';
import './side-navbar.css'

class SideNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : this.props.active,
        };
        this.childHandleClick = this.childHandleClick.bind(this);
    }
    
    childHandleClick = (e, sender) => {

        this.setState({ active: sender.props.name }, ()=>{
            const { callback } = this.props;
            if(typeof(callback) === 'function') {
                callback(e,this);
            }
        }); 
    }


    render() {

        const eles = Children.map(this.props.children, child => {
            // Checking isValidElement is the safe way and avoids a TS error too.
            if (isValidElement(child)) {
              return cloneElement(child, { 
                  callback:this.childHandleClick ,
                  active : (child.props.name===this.state.active ?'active' : '')
             })
            }
        });
        const { open } =  this.props;

        const bar = (open===true? " open" : "");
        return(
            <div className={ "sidebar-left-nav" + bar   } >
                {eles}
            </div>
        );
    }

}



class NavItem extends React.Component {
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
        const {href, css, active } = this.props;

        return(
             <div className={"navitem " + active}>
                <a href={href} className={css} onClick={this.handleClick}>
                    {this.props.children}
                </a>
             </div>
        );
    }
}


const Nav = {
    Sidebar: SideNavbar,
    Item: NavItem
}

export default Nav;
