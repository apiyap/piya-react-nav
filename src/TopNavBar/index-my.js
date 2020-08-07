import React ,{ Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import '../../layout.css';
import Nav from './top-navbar'


export default class TopNavBar extends Component {

    constructor(props) {
        super(props);
        var { style,bg,expand,fixed } = this.props;
        this.state = {
            toggle : false,
            style : (typeof(style)==='undefined' ? 'navbar-dark' : style),
            bg : (typeof(bg)==='undefined' ? 'bg-primary' : bg),
            expand : (typeof(expand)==='undefined' ? 'navbar-expand-md' : expand),
            fixed : (typeof(fixed)==='undefined' ? 'fixed-top' : fixed),
        }
        this.handleClick = this.handleClick.bind(this);
        
    }


    handleClick(e,sender){

        switch (sender.props.name)
        {
            case 'dropdown':
                break;
            case 'toggle':
                this.setState({ toggle: !this.state.toggle}); 
                break;
            default:
                if(this.state.toggle)
                {
                    this.setState({ toggle: false});
                }
                break;
        }

        const { callback } = this.props;
        if(typeof(callback) === 'function') {
            callback(e,sender);
        }
    }

 
    render() {
        const { toggle ,style, bg, expand, fixed } = this.state; 

        return(
            <Nav.TopBar style={style} bg={bg} expand={expand} fixed={fixed} >
                <Nav.Brand name="brand"  callback={this.handleClick}><FontAwesomeIcon icon={faCogs} /></Nav.Brand>
                <Nav.Toggle name="toggle"  callback={this.handleClick}/>
                <Nav.Collapse name="collapse"  collapse={toggle} >
                    <Nav.Bar>
                        <Nav.Link name="connect2" href="#connect2" callback={this.handleClick} >Connected2</Nav.Link>
                        <Nav.Dropdown.Menu label="Dropdown" name="dropdown" callback={this.handleClick}>
                            <Nav.Dropdown.Item name="action" href="/action">Action</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item name="action2" href="#action/3.2">Another action</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item name="action3" href="#action/3.3">Something</Nav.Dropdown.Item>
                            <Nav.Dropdown.Divider/>
                            <Nav.Dropdown.Item name="action4" href="#action/3.4">Separated link</Nav.Dropdown.Item>
                        </Nav.Dropdown.Menu>
                    </Nav.Bar>
                </Nav.Collapse>
            </Nav.TopBar >
        );
    }
}