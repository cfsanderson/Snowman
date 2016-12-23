import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Footer extends Component {

  render () {
    return (
      <div className='footer'>
        <footer>
          <h2>Stay connected with me.</h2>
          <div className='socials'>
            <ul>
              <li><a href='https://twitter.com/cfsanderson' target='_blank'><i className='fa fa-twitter' aria-hidden='true' /></a></li>
              <li><a href='https://www.facebook.com/caleb.f.sanderson' target='_blank'><i className='fa fa-facebook' aria-hidden='true' /></a></li>
              <li><a href='https://www.instagram.com/cfsanderson/' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a></li>
              <li><a href='https://www.linkedin.com/in/calebsanderson' target='_blank'><i className='fa fa-linkedin' aria-hidden='true' /></a></li>
              <li><a href='https://github.com/cfsanderson' target='_blank'><i className='fa fa-github' aria-hidden='true' /></a></li>
            </ul>
          </div>
          <h5>Copyright &copy; 2016 Caleb Frost Sanderson. Built with <i className='fa fa-heart' aria-hidden='true' /> at The Iron Yard</h5>
        </footer>
      </div>
    )
  }
}

export default Footer
