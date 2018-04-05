import React from 'react';

class ContactForm extends React.Component {
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
  }

  render() {
    return(
      <div id="Contact-Form">
      <h1>Platicame de tu Proyecto!</h1><br />
      <h3>Llena el formato para saber un poco mas sobre ti y tu proyecto.</h3><br />
      <p><h2>Hola!</h2>Mi nombre es <input type="text" name="Fullname" placeholder="Nombre completo"/> y soy
      parte de <input type="text" name="CompanyName" placeholder="Nombre de Empresa"/>, estoy
      buscando alguien que me ayude con un proyecto: <textarea type="text" name="Description" placeholder="Pequeña descripcion del trabajo"/>.
      Este proyecto tengo un objetivo de completarlo en o cerca de <input type="date" name="Date" />.
      Pueden contactarme por telefono: <input type="text" name="Phone" placeholder="Numero de telefono" />
      o al correo electronico: <input type="text" name="Email" placeholder="Correo electronico"/> para hablar mas.
      <br />
      Gracias!
      </p>
      <br />
      <div class="container">
	<button class="btn btn--skew btn-default">
		<span>Button</span>
	</button>
</div>
      </div>
    )
  }
}

export default ContactForm
