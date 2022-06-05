import React, { Component } from 'react'
import axios from 'axios';
const API_PATH = 'https://www.townscrapmetal.com/api/contact/index.php';

export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Hello',
       email: '',
       phone: '',
       message: '',
       mailSent: false,
       error: null
    }
  }
  
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
  };
  
  handleFormChange (e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    

    return (
      <div>
        <div className="contact">
            <form id="contact" action="" method="post">
              <h2>Quick Contact</h2>
              <p>Contact us today, and get reply with in 24 hours!</p>
              <div className='form-group'>
                <input name="name" onChange={e => this.handleFormChange(e)} placeholder="Your Name" type="text" tabIndex="1" required />
              </div>
              <div className='form-group'>
                <input name="email" onChange={e => this.handleFormChange(e)} placeholder="Your Email Address" type="email" tabIndex="2" required />
              </div>
              <div className='form-group'>
                <input name="phone" onChange={e => this.handleFormChange(e)} placeholder="Your Phone Number" type="tel" tabIndex="3" required />
              </div>
              <div className='form-group'>
                <textarea name="message" onChange={e => this.handleFormChange(e)} placeholder="Type your Message Here...." tabIndex="4" required></textarea>
              </div>
              <div className='form-group'>
                <button name="submit" onClick={e => this.handleFormSubmit(e)} type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </div>
              <div>
                {this.state.mailSent &&
                  <div>Thank you for contcting us.</div>
                }
              </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Contact