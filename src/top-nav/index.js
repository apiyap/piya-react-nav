import React from 'react';

import Nav from './nav-top'
import './nav-top.css'




class TopNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false,
      };
       
      this.handleClick = this.handleClick.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.wrapper = React.createRef();
    }

    handleClick(e)
    {
        //console.log(e);
        this.setState({responsive : !this.state.responsive});
    }

    onSelect(e,sender)
    {
        console.log(e);
        console.log(sender);
    }

    render() {
        const { action , responsive } = this.state;
        const css = (responsive?" responsive": "" );

        return (
            <>
            <Nav.Top >
                <Nav.Menu href="#home">Home</Nav.Menu>
                <Nav.Menu href="#news">News</Nav.Menu>
                <Nav.Menu href="#contact">Contact</Nav.Menu>
                <Nav.Menu href="#about1">About1</Nav.Menu>
                <Nav.Dropdown>
                        <Nav.Menu href="#Link1" css="">Link 1</Nav.Menu>
                        <Nav.Menu href="#Link2" css="">Link 2</Nav.Menu>
                        <Nav.Menu href="#Link3" css="">Link 3</Nav.Menu>
                        <Nav.Divider/>
                        <Nav.Menu href="#Link4" css="">Link 4</Nav.Menu>
                </Nav.Dropdown> 
                <Nav.Menu href="#about2">About2</Nav.Menu>
                <Nav.Toggle/>
            </Nav.Top>

            </>
        );
    }
}  






export default TopNavBar;
