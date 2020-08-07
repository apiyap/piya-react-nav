import React   from 'react';

import '../../layout.css';
import Nav from './side-navbar'

export default  class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e,sender){

        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,sender);
        }  
    }

    render(){

        return(
            <Nav.Sidebar open={this.props.open} active="home" callback={this.handleClick}>
                <Nav.Item href="#" name="home" css="fa fa-home" />
                <Nav.Item href="#" name="clock" css="fa fa-fw fa-clock" />
                <Nav.Item href="#" name="hashtag" css="fas fa-hashtag" />
            </Nav.Sidebar>
        );
    }

}

