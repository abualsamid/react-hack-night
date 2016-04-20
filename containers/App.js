import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { children } = this.props
    const style = {height: "100%"}
    return (
      <div>
          {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default connect()(App)
