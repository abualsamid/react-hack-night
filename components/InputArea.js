import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import processMessage from '../logic'

class InputArea extends Component {
  constructor(props) {
    super(props)
  }
  send() {
    const self = this;
    const {sendMessage, replyToMessage} = this.props;
    const v = this.message.value;

    sendMessage({author: "me", item: v});
    replyToMessage({author:"bot", item: processMessage(v) })
    this.message.value="";

  }
  render() {
    const txtStyle ={width: "100%;"}
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={(e)=>e.preventDefault()} >
              <textarea ref={(input) => this.message = input } />
              <br/>
              <button className="btn btn-primary btn-lg" onClick={this.send.bind(this)}>Send</button>

            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  (state, ownProps) => ({
    messages : state.home.messages
  }),
  actions
)(InputArea)
