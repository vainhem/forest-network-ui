import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../index.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const {account} = this.props
    return (
      <div className="sidenav">
        <ul className="nav">
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-dashboard"></span> DASHBOARD
            </a>
          </li>
        </ul>
        <div className="border-soild"></div>
        <ul className="nav">
          {/*<li>*/}
            {/*<a href="/infouser">*/}
              {/*<span className="glyphicon glyphicon-cog"></span> Info User*/}
            {/*</a>*/}
          {/*</li>*/}
          <li>
            Amount: {this.props.reducer.account.ammount} CEL
          </li>
        </ul>

      </div>

    )


  }
}

Sidebar = connect(function (state) {
  return {...state}
})(Sidebar);

export default Sidebar;
