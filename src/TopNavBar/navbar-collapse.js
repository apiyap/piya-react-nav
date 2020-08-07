import React  from 'react';

class NavCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cls_on : this.props.on,
            cls_def : this.props.default,
        }


    }

 

    render() {
        const { cls_on , cls_def } = this.state;
        return(
            <div className={"navbar-collapse " + (this.props.collapse? cls_on : cls_def) }  >
                {this.props.children}
            </div>         
        );
    }
}



export default NavCollapse;