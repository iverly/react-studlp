import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    render() {
        return (
            <div className="container flex" style={{height: window.innerHeight - 80}}>
                <div className="z-10" style={{paddingTop: (window.innerHeight - 80)/4}}>
                    <div className="flex flex-col align-middle px-2 md:px-0">
                        <div className="text-5xl font-bold text-white">Vous êtes un étudiant en <span className="text-blue-500">difficulté</span> ?</div>
                        <div className="text-2xl text-white">Découvrez maintenant les meilleurs astuces !</div>
                        <Link className="text-lg rounded-full bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 mt-4 border-b-4 border-blue-700 hover:border-blue-500 transition-all" style={{width: 'fit-content'}} to="/discover"><i class="fa fa-search" aria-hidden="true"></i> Rechercher</Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full" style={{height: window.innerHeight}}>
                    <img className="h-full w-full" src="https://miro.medium.com/max/12681/1*yfjvR5gGFIQAluxjBMBq-Q.jpeg" />
                </div>
            </div>
        )
    }

}

export default Banner;