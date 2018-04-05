import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ContactForm from './component/Contact.jsx'
import Video from './component/Video.jsx'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      companyName: '',
      description: '',
      dateDue: '',
      phone: '',
      email: ''
    }
    this.addMessage = this.addMessage.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }
  addMessage(name, companyName, description, dateDue, phone, email){
    $.ajax({
      method:'POST',
      url:'/sendMessage',
      contentType:'application/json',
      data:JSON.stringify({
        name: url,
        companyName: companyName,
        description: description,
        dateDue: dateDue,
        phone: phone,
        email: email
      })
    }).done()
  }

  getMessage(){
    $.ajax({
      url: '/mesageopus',
      method:'GET',
      success: (results) =>{
        this.setState({
          item: results
        })
      },
      error: (xhr, err) => {
       console.log('err', err);
     }
    });
  }
  componentDidMount(){
    this.getMessage();
  }
  render(){
  return (
  <div>
  <Video />
  <ContactForm addItem={this.addMessage}/>
  </div>)
}
}

ReactDOM.render(<App />, document.getElementById('app'));
