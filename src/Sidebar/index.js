import React from 'react';
import '../../layout.css';
import './index.css';


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/about',
                  name: 'About',
                  css: 'fa fa-fw fa-clock',
                  key: 2
                },
                {
                  path: '/NoMatch',
                  name: 'NoMatch',
                  css: 'fas fa-hashtag',
                  key: 3
                },
              ]
        }
    }

    onItemClick = (path, name) => {
        this.setState({ activePath: path });
        console.log(name + ':' + path);
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <div className="sidebar">
                {
                    items.map((item) => {
                        return (
                            <MyNavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={(item.path === activePath)?"active" : ""}
                                key={item.key}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

class MyNavItem extends React.Component {
    handleClick = () => {
        const { path, name, onItemClick } = this.props;
        onItemClick(path , name);
    }

    render() {
        const { active } = this.props;
        return(
             <div className={"navitem " + active}>
                <a href="#" className={this.props.css} onClick={this.handleClick}>
                    <div></div>
                </a>
             </div>
        );
    }
}

export default SideNav;

