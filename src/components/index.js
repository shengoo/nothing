import React, {Component} from 'react'
import image from './nophoto@2x.png';
import './index.css';

export default class extends Component {
  render() {
    return <div>
      <h2 className='nothing-title'>Welcome to React components</h2>
      <img src={image} />
      <p>hello</p>
    </div>
  }
}
