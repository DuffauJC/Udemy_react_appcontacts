import React, { Component } from 'react'
import Contact from './Contact'



export default class Liste extends Component {


    state = {
        contacts: [
            {
                id:1,
                nom: 'Jhonny Doe',
                email: 'jhon@gmail.com',
                tel: '555 - 555 - 555'
            },
            {
                id:2,
                nom: 'Julio Doe',
                email: 'jhon@gmail.com',
                tel: '555 - 555 - 555'
            },
            {
                id:3,
                nom: 'Jeannot Doe',
                email: 'jhon@gmail.com',
                tel: '555 - 555 - 555'
            }
        ]
    }

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(contact => 
            contact.id !== id)
        this.setState({
            contacts:nvContacts
        })
      
    }
    render() {
        return (
            <React.Fragment>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        supClick={()=>this.supprime(contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}
