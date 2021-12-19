import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavItems extends Component {
  render() {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {this.props.items.map( item => (
          <li key={ item.route } className='nav-item'>
            <Link className={ this.props.activeRoute === item.route ? 'nav-link active' : 'nav-link' } to={ item.route }>{ item.text }</Link>
          </li>
        ))}
      </ul>
    )
  }
}


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [
      {
        text: 'Home',
        route: '/'
      },
      {
        text: 'Resume',
        route: '/resume'
      },
      {
        text: 'Blog',
        route: '/blog'
      },
      {
        text: 'Contact',
        route: '/contact'
      },
    ]};
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavItems activeRoute={this.props.activeRoute} items={this.state.items}/>
          </div>
        </div>
      </nav>
    );
  }
}



export default Nav;