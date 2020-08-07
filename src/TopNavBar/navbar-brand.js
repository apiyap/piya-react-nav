import React  from 'react';

class NavBrand extends React.Component {
    handleClick = () => {
        const { onItemClick } = this.props;
        if(typeof(onItemClick) === 'function') {
            onItemClick();
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

export default NavBrand;