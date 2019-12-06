import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <>
                <div class="w-full h-screen max-w-xs mx-auto flex flex-col justify-center align-middle z-10">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-email">Email</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="login-email" type="text" placeholder="jhon.doe@gmail.com" />
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="login-password">Mot de passe</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="login-password" type="text" placeholder="*********" />
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-between">
                            <button className="text-base rounded bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 transition-all" style={{width: 'fit-content'}}><i class="fa fa-sign-in" aria-hidden="true"></i> Connexion</button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2" href="#">Mot de passe oublié?</a>
                            <div>Pas de compte ? <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2" href="#">Cliquez ici !</a></div>
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

export default Login;