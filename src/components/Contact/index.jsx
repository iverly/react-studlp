import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import fetch from 'node-fetch';

class Contact extends React.Component {

    constructor (props) {
        super(props);

        this.state = ({ contactFirstName: '', contactLastName: '', contactEmail: '', contactMessage: '', errors: [], validation: false })
    }

    componentDidMount() {
        this.setState({ errors: [], validation: false });
    }

    postMessage(e) {
        e.preventDefault();
        let currentErrors = [];
        if (this.state.contactFirstName == '') currentErrors.push('Vous devez entrez un prénom !');
        if (!this.state.contactLastName) currentErrors.push('Vous devez entrez un nom !');
        if (!this.state.contactEmail) currentErrors.push('Vous devez entrez un email !');
        if (!this.state.contactMessage) currentErrors.push('Vous devez entrez un message !');
        this.setState({ errors: currentErrors });

        if (currentErrors.length == 0) {
            const params = new URLSearchParams();
            params.append('contactFirstName', this.state.contactFirstName);
            params.append('contactLastName', this.state.contactLastName);
            params.append('contactEmail', this.state.contactEmail);
            params.append('contactMessage', this.state.contactMessage);
            
            fetch('https://api.ndl.maxime6678.fr/tickets.php', {
                method: 'POST',
                body: params
            })
            .then(res => res.json())
            .then(res => {
                if (res.Ticket && res.Ticket == 'FailedInput') {
                    this.setState({ validation: true, errors: [], contactFirstName: '', contactLastName: '', contactEmail: '', contactMessage: '' });
                } else {
                    this.setState({ errors: ['Erreur lors de l\'envoie du message ...'], contactFirstName: '', contactLastName: '', contactEmail: '', contactMessage: '' });
                }
            })
            .catch(err => {
                this.setState({ errors: ['Erreur lors de l\'envoie du message ...'], contactFirstName: '', contactLastName: '', contactEmail: '', contactMessage: '' });
            })
        }
    }

    deleteError(i) {
        let newErrors = this.state.errors;
        newErrors = newErrors.filter((v, j) => { return i != j});
        this.setState({ errors: newErrors });
    }

    render() {
        return (
            <div className="flex flex-col py-6">
                <div className="bg-blue-500 py-2 mb-4">
                    <div className="container text-3xl text-white font-bold px-2 md:px-0">Nous contacter</div>
                </div>
                <div className="container pl-4 mt-4">
                    {this.state.validation && 
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-3xl mx-auto mb-4" role="alert">
                            <span class="block sm:inline">Votre message a bien été envoyé.</span>
                        </div>
                    }
                    {this.state.errors.map((error, i) => (
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-3xl mx-auto mb-4" key={i} role="alert">
                            <span class="block sm:inline">{error}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={this.deleteError.bind(this, i)}>
                                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                        </div>
                    ))}
                    <form class="w-full max-w-3xl mx-auto">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-first-name">Prénom</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-first-name" type="text" placeholder="John" value={this.state.contactFirstName} onChange={(e) => this.setState({ contactFirstName: e.target.value })} />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-last-name">Nom</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-last-name" type="text" placeholder="Doe" value={this.state.contactLastName} onChange={(e) => this.setState({ contactLastName: e.target.value })} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-email">Email</label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact-email" type="text" placeholder="john.doe@gmail.com" value={this.state.contactEmail} onChange={(e) => this.setState({ contactEmail: e.target.value })} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact-message">Message</label>
                                <textarea class="appearance-none block w-full h-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" id="contact-message" placeholder="Bonjour, ..." value={this.state.contactMessage} onChange={(e) => this.setState({ contactMessage: e.target.value })} />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <ScrollAnimation animateIn='rollIn' animateOnce={true}>
                                <button className="text-lg rounded bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 mt-4 border-b-4 border-blue-700 hover:border-blue-500 transition-all" style={{width: 'fit-content'}} onClick={this.postMessage.bind(this)}><i class="fa fa-paper-plane" aria-hidden="true"></i> Envoyer</button>
                            </ScrollAnimation>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Contact;