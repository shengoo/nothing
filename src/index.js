import React, {Component} from 'react'
import image from './nophoto@2x.png';

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React components</h2>
      <img src={image} />
    </div>
  }
}
