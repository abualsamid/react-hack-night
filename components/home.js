import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import  InputArea  from  './InputArea'



class Home extends Component {

  constructor(props) {
    super(props)
  }
  getItem(item) {
    if (item.author=="bot") {
      return (
        <div>

          <img src="http://www.gravatar.com/avatar/6d7b273512b621013346a866d80ffd30?s=20" />
          <br/>
          <span style={{fontStyle:"italic"}}>
            {item.item}
          </span>
        </div>
      )
    } else {
      return (
        <div>
          <strong>{item.author}</strong>
          <br/>
          {item.item}
        </div>
      )
    }

  }
  render() {
    const {messages} = this.props
    return (
      <div>
        <div>
          <br/>
          <InputArea />
        </div>

        <div className="wrap">
          <div className="row">
            <div className="col-md-12">
              <h1>Hello, </h1>
              <br/>

              {
                messages.map( this.getItem)
              }
            </div>
          </div>
          <div className="push">
          </div>
        </div>
        <br/>
        <br/>

        <br/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.home.messages
  }
}

export default connect(
  mapStateToProps,
  actions
)(Home)
