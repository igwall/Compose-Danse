import React from 'react'
import Root from './root'
import Header from '../components/Header/Header'
import {connect} from 'react-redux'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Page extends React.Component {
  render () {
    return (
      <Root>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          z-index: 2;
          top: 0;
          left: 0;
        }
        .content {
          position: absolute;
          top: 100px;
          left: 0px;
          height: calc(100% - 100px);
          width: 100%;
        }
        `}</style>
      </Root>
    )
  }
}
