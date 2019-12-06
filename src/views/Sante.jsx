import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Sante extends React.Component {

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
                        <img className="w-full bg-fixed absolute" src="https://www.espacemembre.macsf.fr/cdn/var/macsf/storage/images/espace-personnel/parcours-etudiant/sante-etudiant/sante-image-d-accueil/118605-2-fre-FR/Sante-image-d-accueil.jpg" alt="" />
                        <h2 className="absolute text-white text-3xl text-center w-full sm:text-6xl font-bold" style={{ top: '25%' }}>Aides à la santé</h2>
                    </div>
                    </ScrollAnimation>
                    <div>
                        <div className="w-5/6 m-auto my-16 sm:w-3/4">
                            <h3 className="text-5xl pl-6 font-bold text-white bg-blue-500 rounded-t">
                                Santé
                            </h3>
                            <div className="h-1 w-full bg-blue-500">
                            </div>
                            <div className="">
                                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                    <div id="R2" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Mutuelle
                                        <div className="text-xl font-normal px-6">
                                            <a href="https://sitejeune.laregion.fr/Pass-Mutuelle-Etudiant-e" target="blank" className="text-blue-500">Pass mutuelle</a> L’aide de la Région s’élève au maximum à 100 € par étudiant et par année universitaire pour la souscription à une complémentaire santé étudiante.
                                        </div>
                                    </div>
                                    <div id="R3" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Docteur
                                        <div className="text-xl font-normal px-6">
                                            L’examen périodique de santé est proposé gratuitement par la CPAM à toute personne affiliée au régime général, mais aussi aux ayants droit ainsi que par la MSA pour les affiliés du régime agricole : <a href="https://www.aide-sociale.fr/bilan-sante-cpam-gratuit/" target="blank" className="text-blue-500">Aide sociale</a>
                                        </div>
                                    </div>
                                    <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Complémentaire santé
                                        <div className="text-xl font-normal px-6">
                                            Depuis la rentrée de septembre 2018, le système de Sécurité sociale étudiante a changé pour les nouveaux inscrits. En effet, ces derniers restent désormais attachés à leur régime actuel de Sécurité sociale, avec une cotisation annuelle unique de 90€ pour tous : <a href="https://www.aide-sociale.fr/complementaire-sante-etudiant/" target="blank" className="text-blue-500">Complémentaire santé</a>
                                        </div>
                                    </div>
                                    <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Remboursement de vos soins
                                        <div className="text-xl font-normal px-6">
                                            La caisse d'assurance maladie "Ameli" permet aux étudiants de bénéficer d'un remboursement aux soins : <a href="https://www.ameli.fr/assure/droits-demarches/etudes-emploi-retraite/etudiant/etudiant" target="blank" className="text-blue-500">Ameli</a>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
 
}
 
export default Sante;