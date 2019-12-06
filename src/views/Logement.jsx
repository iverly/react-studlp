import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../components/Header';
import Footer from '../components/Footer';
 
class Logement extends React.Component {

    render() {
        return (
            <>
                <Header transparent={false}/>
                <div className="h-full">
                    <ScrollAnimation animateIn='fadeIn'animateOut='fadeOut'>
                        <div className="h-64 overflow-hidden relative">
                            <img className="w-full bg-fixed absolute" src="https://www.freyming-merlebach.fr/dynamic/images/pratique/cac_/logement!_564x221!_3!_0x0!_0!_FFFFFF.png" alt="" />
                            <h2 className="absolute text-white text-3xl sm:text-6xl text-center w-full font-bold" style={{ top: '25%' }}>Aides au logement</h2>
                        </div>
                    </ScrollAnimation>
                    <div>
                        <div className="w-5/6 sm:w-3/4 m-auto my-16">
                            <h3 className="text-5xl pl-6 font-bold text-white bg-blue-500 rounded-t">
                                Logement
                            </h3>
                            <div className="h-1 w-full bg-blue-500">
                            </div>
                            <div className="">
                                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                    <div id="R2" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Recherche de logements
                                        <div className="text-xl font-normal px-6">
                                            La recherche de logement prend du temps et tu trouves souvent des apparts trop chers pour toi, jette un oeil aux logement Crous : <a href="https://www.messervices.etudiant.gouv.fr/centrale_prod?idEtudiantPVE=7240098Où" target="blank" className="text-blue-500">Mes services étudiant</a> trouver des annonces vérifiées : <a href="https://www.lokaviz.fr/" target="blank" className="text-blue-500">Lokaviz</a>
                                        </div>
                                    </div>
                                    <div id="R3" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Demande aide logement
                                        <div className="text-xl font-normal px-6">
                                            Les APL peuvent te permettre de payer un loyer avec de faibles revenus, elle dépend uniquement de ta situation et non celle de tes parents, alors profites-en : <a href="https://www.service-public.fr/particuliers/vosdroits/F12006" target="blank" className="text-blue-500">Service public</a>
                                        </div>
                                    </div>
                                    <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Colocs
                                        <div className="text-xl font-normal px-6">
                                            Envie de vivre avec des potes ou de diviser le montant de ton loyer, pense à la coloc ! : <a href="https://www.appartager.com/https://www.lacartedescolocs.fr/" target="blank" className="text-blue-500">La carte des colocs</a>
 
                                        </div>
                                    </div>
                                    <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Garant
                                        <div className="text-xl font-normal px-6">
                                            Pour louer un logement on exige que tu es un garant, afin que le loyer soit payé même si tu n’as pas l’argent. Tu peux faire appel à une personne extérieure qui pourra payer à ta place en cas de difficultés, les renseignements ici : <a href="https://www.visale.fr/" target="blank" className="text-blue-500">Visale</a>
                                        </div>
                                    </div>
                                    <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                        Louer une chambre
                                        <div className="text-xl font-normal px-6">
                                            Une petite pièce pour vivre ne te déranges pas ou tu n’as pas les moyens pour un appart, il te restes les chambres à louer chez l’habitant : <a href="https://www.cohebergement.com/" className="text-blue-500">Cohebergement</a>
 
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
 
export default Logement;