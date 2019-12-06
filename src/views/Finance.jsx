import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../components/Header';
import Footer from '../components/Footer';
 
class Finance extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
 
   render() {
       return (
           <>
                <Header transparent={false}/>
                <div className="h-full">
                    <ScrollAnimation animateIn='fadeIn'animateOut='fadeOut'>
                        <div className="h-64 overflow-hidden relative">
                            <img className="w-full bg-fixed absolute" src="https://www.studyrama.com/IMG/arton5673.jpg" alt="" />
                            <h2 className="absolute text-white text-6xl text-center w-full font-bold" style={{ top: '25%' }}>Aides Financières</h2>
                        </div>
                   </ScrollAnimation>
                    <div>
                       <div className="w-3/4 m-auto my-16">
                           <h3 className="text-5xl pl-6 font-bold text-white bg-blue-500 rounded-t">
                               Bourses
                           </h3>
                           <div className="h-1 w-full bg-blue-500">
                           </div>
                           <div className="">
                               <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                   <div id="R1" className=" my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                       Bourses d'étude
                                        <div className="h-1 w-full bg-blue-500">
                                        </div>
                                        <div className="text-2xl pt-4">
                                            Simulation
                                            <div className="text-xl font-normal px-6">
                                                Regarde si tu es éligible à une bourse, renseigne juste quelques infos sur ta situation sur <a href="https://simulateur.lescrous.fr/" className="text-blue-500" target="blank">lescrous.fr</a>
                                            </div>
                                        </div>
                                        <div className="text-2xl pt-4">
                                            Demande de bourse
                                            <div className="text-xl font-normal px-6">
                                                Tu as besoin de créer un Dossier Social Etudiant (DSE), la procédure est un peu longue (le temps que ton dossier soit traité) mais cela vaut le coup si tu es éligible aux bourses : <a href="https://www.messervices.etudiant.gouv.fr/envole/" className="text-blue-500" target="blank">Mes services etudiant</a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                    <div id="R2" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Bourse ERASMUS
                                        <div className="text-xl font-normal px-6">
                                            Si tu as prévu de faire tes études à l’étranger, Erasmus peut te permettre d’obtenir jusqu’à 450€ :   <a href="https://www.service-public.fr/particuliers/vosdroits/F378" className="text-blue-500" target="blank">Service public</a>
                                        </div>
                                    </div>
                                    <div id="R3" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Bourse au mérite
                                        <div className="text-xl font-normal px-6">
                                            T’as géré ton bac ? Félicitation, récupère t’as récompense : <a href="https://www.messervices.etudiant.gouv.fr/envole/" className="text-blue-500"> Mes services etudiant</a>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="w-3/4 m-auto my-16">
                            <h3 className="text-5xl pl-6 font-bold text-white bg-blue-500 rounded-t">
                                Banque
                            </h3>
                            <div className="h-1 w-full bg-blue-500">
                            </div>
                            <div>
                                <div id="R4" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                    Prêt étudiant
                                    <div className="text-xl font-normal px-6">
                                        Besoin de financer tes études ? Prêt étudiant garanti par l’état ici : <a href="https://www.service-public.fr/particuliers/vosdroits/F986" className="text-blue-500" target="blank"> Service public</a>
                                    </div>
                                </div>
                                <div id="R5" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                    Offres intéressantes
                                    <div className="h-1 w-full bg-blue-500">
                                    </div>
                                    <div className="text-2xl pt-4">
                                        Boursorama
                                    <div className="text-xl font-normal px-6">
                                            Offre Welcome : Carte gratuite + 80€ offerts: <a href="https://www.boursorama-banque.com/" className="text-blue-500" target="blank"> Boursorama</a>
                                    </div>
                                    </div>
                                    <div className="text-2xl pt-4">
                                        Hello bank
                                    <div className="text-xl font-normal px-6">
                                            Carte Visa gratuite + 80€ offert : <a href="https://www.hellobank.fr/" className="text-blue-500" target="blank">Hello bank</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
 
}
 
export default Finance;