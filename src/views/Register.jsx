import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({ registerFirstName: '', registerLastName: '', registerEmail: '', registerDate: '', registerSchool: '', registerPassword: '', registerRepassword: '', errors: [] })
    }

    componentDidMount() {
        this.setState({ errors: [], validation: false });
    }

    postLogin(e) {
        e.preventDefault();
        let currentErrors = [];
        if (!this.state.registerFirstName) currentErrors.push('Vous devez entrez un prénom !');
        if (!this.state.registerLastName) currentErrors.push('Vous devez entrez un nom !');
        if (!this.state.registerEmail) currentErrors.push('Vous devez entrez un email !');
        if (!this.state.registerDate) currentErrors.push('Vous devez entrez une date de naissance !');
        if (!this.state.registerSchool) currentErrors.push('Vous devez entrez une école !');
        if (!this.state.registerPassword) currentErrors.push('Vous devez entrez un mot de passe !');
        if (!this.state.registerRepassword) currentErrors.push('Vous devez entrez la confirmation du mot de passe !');
        this.setState({ errors: currentErrors });

        if (currentErrors.length == 0) {
            const params = new URLSearchParams();
            params.append('registerFirstName', this.state.registerFirstName);
            params.append('registerLastName', this.state.registerLastName);
            params.append('registerEmail', this.state.registerEmail);
            params.append('registerDate', this.state.registerDate);
            params.append('registerSchool', this.state.registerSchool);
            params.append('registerPassword', this.state.registerPassword);
            params.append('registerRepassword', this.state.registerRepassword);

            fetch('https://api.ndl.maxime6678.fr/userRegistration.php', {
                method: 'POST',
                body: params
            })
            .then(res => res.json())
            .then(res => {
                if (res.Registration && res.Registration == 'Registered') {
                    this.setState({ validation: true, errors: [], loginEmail: '', loginPassword: '' });
                } else if (res.Registration && res.Registration == 'FailedPass') {
                    this.setState({ errors: ['Les mots de passes ne correspondent pas'], loginEmail: '', loginPassword: '' });
                } else if (res.Registration && res.Registration == 'FailedMailUsed') {
                    this.setState({ errors: ['L\'email est déjà utilisé'], loginEmail: '', loginPassword: '' });
                } else if (res.Registration && res.Registration == 'FailedMail') {
                    this.setState({ errors: ['Email invalide'], loginEmail: '', loginPassword: '' });
                } else {
                    this.setState({ errors: ['Erreur lors de la connection au serveur ...'], loginEmail: '', loginPassword: '' });
                }
            })
            .catch(err => {
                this.setState({ errors: ['Erreur lors de la connection au serveur ...'], loginEmail: '', loginPassword: '' });
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
            <>
                <div class="w-full h-screen max-w-xs mx-auto flex flex-col justify-center align-middle z-10 my-32">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {this.state.errors.map((error, i) => (
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" key={i} role="alert">
                                <span class="block sm:inline">{error}</span>
                                <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={this.deleteError.bind(this, i)}>
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>
                        ))}
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-email">Prénom</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-first-name" type="text" placeholder="John" value={this.state.loginEmail} onChange={(e) => this.setState({ loginEmail: e.target.value })} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-password">Nom</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-last-name" type="text" placeholder="Doe" value={this.state.loginPassword} onChange={(e) => this.setState({ loginPassword: e.target.value })} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-email">Email</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-email" type="email" placeholder="john.doe@gmail.com" value={this.state.loginEmail} onChange={(e) => this.setState({ loginEmail: e.target.value })} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-password">Date de naissance</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-date" type="text" placeholder="18/12/1995" value={this.state.loginPassword} onChange={(e) => this.setState({ loginPassword: e.target.value })} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-password">École</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-school" type="text" placeholder="IUT Paul Sabatier" value={this.state.loginPassword} onChange={(e) => this.setState({ loginPassword: e.target.value })} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-email">Mot de passe</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-password" type="password" placeholder="*********" value={this.state.loginEmail} onChange={(e) => this.setState({ loginEmail: e.target.value })} />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-password">Confirmation du mot de passe</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="register-repassword" type="password" placeholder="*********" value={this.state.loginPassword} onChange={(e) => this.setState({ loginPassword: e.target.value })} />
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-between">
                            <button className="text-base rounded bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 transition-all" style={{width: 'fit-content'}} onClick={this.postLogin.bind(this)}><i class="fa fa-user-plus" aria-hidden="true"></i> Inscription</button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2" href="/login">Mot de passe oublié?</a>
                            <div>Déjà un compte ? <Link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2" to="/login">Cliquez ici !</Link></div>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2019 Stud'LP. Tous droits réverser.
                    </p>
                </div>
            </>
        )
    }

}

export default Register;