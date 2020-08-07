import React  from 'react';

class NavToggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle : false,
            cls_on : this.props.on,
            default : this.props.default,
        }
    }
    handleClick = () => {
        this.setState({ toggle: !this.state.toggle });
        const { onItemClick } = this.props;
        if(typeof(onItemClick) === 'function') {
            onItemClick();
        }
    }

    render() {
        
        return(
            <button  type="button" className={"navbar-toggler " + (this.state.toggle? this.state.cls_on : this.state.default) } onClick={this.handleClick}>
                {this.props.children}
            </button>            
        );
    }
}

export default NavToggler;