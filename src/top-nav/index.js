import React from 'react';

// import Nav from './nav-top'
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
            {/* <Nav.Top >
                <Nav.Menu href="#home">Home</Nav.Menu>
                <Nav.Menu href="#news">News</Nav.Menu>
                <Nav.Menu href="#contact">Contact</Nav.Menu>
                <Nav.Menu href="#about">About</Nav.Menu>
                <Nav.Dropdown.Menu>

                </Nav.Dropdown.Menu>
                <Nav.Toggle/>
            </Nav.Top> */}


            <div className={"topnav" + css} >
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
                <button className="dropbtn">Dropdown 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
            <a href="#about">About</a>
            <a href="#"  className="icon" onClick={this.handleClick}>&#9776;</a>
            </div>


            </>
        );
    }
}  






export default TopNavBar;
