import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './component/Contact.jsx'
import Video from './component/Video.jsx'


const App =() => (
  <div>
  <Video />
  <ContactForm />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
