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
    this.updateName = this.updateName.bind(this)
    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
    this.updatePhone =this.updatePhone.bind(this);
    this.updateEmail= this.updateEmail.bind(this);
    this.add = this.add.bind(this);
  }
  updateName(e){
    this.setState({
      name: e.target.value
    })
  }
  updateCompanyName(e){
    this.setState({
      companyName: e.target.value
    })
  }
  updateDescription(e){
    this.setState({
      description: e.target.value
    })
  }
  updateDueDate(e){
    this.setState({
      dateDue: e.target.value
    })
  }
  updatePhone(e){
    this.setState({
      phone: e.target.value
    })
  }  updateEmail(e){
      this.setState({
        email: e.target.value
      })
    }
    add(){
      this.props.addMessage(this.state.name, this.state.companyName, this.state.description, this.state.dateDue, this.state.phone, this.state.email)
      this.setState({
        name: '',
        companyName: '',
        description: '',
        dateDue: '',
        phone: '',
        email: ''
      })
    }
  render() {
    return(
      <div id="Contact-Form">
      <h1>Platicame de tu Proyecto!</h1><br />
      <h3>Llena el formato para saber un poco mas sobre ti y tu proyecto.</h3><br />
      <p><h2>Hola!</h2>Mi nombre es <input onChange={this.updateName} type="text" name="Fullname" placeholder="Nombre completo"/> y soy
      parte de <input onChange={this.updateCompanyName} type="text" name="CompanyName" placeholder="Nombre de Empresa"/>, estoy
      buscando alguien que me ayude con un proyecto: <textarea onChange={this.updateDescription} type="text" name="Description" placeholder="Pequeña descripcion del trabajo"/>.
      Este proyecto tengo un objetivo de completarlo en o cerca de <input onChange={this.updateDueDate} type="date" name="Date" />.
      Pueden contactarme por telefono: <input onChange={this.updatePhone} type="text" name="Phone" placeholder="Numero de telefono" />
      o al correo electronico: <input onChange={this.updateEmail} type="text" name="Email" placeholder="Correo electronico"/> para hablar mas.
      <br />
      Gracias!
      </p>
      <br />
        <button onClick={this.add}>Enviar!</button>
      </div>
    )
  }
}

export default ContactForm
