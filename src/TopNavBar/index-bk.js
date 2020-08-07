import React ,{ Component} from 'react';
import { Nav, Navbar, NavDropdown/*Container, NavDropdown, Form, FormControl , Button */  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import '../../layout.css';
import  './';



export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   menuClick : '',
    // };

  }

 
  render () {
    
    return <Navbar collapseOnSelect expand="lg"  bg="primary"  variant="dark" fixed="top" >
      
    <Navbar.Brand href="#" onClick={()=>this.props.callback('options')} ><FontAwesomeIcon icon={faCogs} /></Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features" value='connect' onClick={()=>this.props.callback('connect')} >Connected</Nav.Link>
        {<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" >Separated link</NavDropdown.Item>
        </NavDropdown> }
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
 

  };
};

