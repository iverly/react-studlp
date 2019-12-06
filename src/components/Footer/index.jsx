import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div className="flex flex-col pt-6">
                <div className="bg-blue-500 py-12">
                    <div className="container text-3xl text-white font-bold flex flex-row">
                        <div className="flex flex-col w-1/3 align-middle justify-center px-4 md:px-0">
                            <div className="text-xl text-white font-bold">Stud'LP</div>
                            <div className="text-base text-white font-normal">Ce site a été crée lors de la Nuit de l'Info 2019 par 7 étudiants afin de répondre à un défi : aider les étudiants à connaître les différetes aides qu'ils ont à leur disposition.</div>
                        </div>
                        <div className="w-2/3 flex justify-end">
                            <ul className="flex flex-col mr-32">
                                <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-base font-normal text-white hover:text-gray-300 p-1 mr-2">Accueil</Link>
                                <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-base font-normal text-white hover:text-gray-300 p-1 mr-2">Finance</Link>
                                <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-base font-normal text-white hover:text-gray-300 p-1 mr-2">Logement</Link>
                                <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-base font-normal text-white hover:text-gray-300 p-1 mr-2">Santé</Link>
                                <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-base font-normal text-white hover:text-gray-300 p-1 mr-2">Alimentation</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;