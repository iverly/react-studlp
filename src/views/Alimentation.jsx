import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../components/Header';
import Footer from '../components/Footer';
 
class Alimentation extends React.Component {
 
    render() {
        return (
            <>
                <Header transparent={false}/>
                <div className="h-full">
                    <ScrollAnimation animateIn='fadeIn'animateOut='fadeOut'>
                    <div className="h-64 overflow-hidden relative">
                            <img className="w-full bg-fixed absolute" src="https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/aliments_sains_vegetaux.jpg?itok=ifXVQ5_r" alt="" />
                        <h2 className="absolute text-white text-3xl text-center w-full sm:text-6xl font-bold" style={{ top: '25%' }}>Aides à l'alimentation</h2>
                   </div>
                   </ScrollAnimation>
                   <div>
                       <div className="w-5/6 m-auto my-16 sm:w-3/4">
                           <h3 className="text-5xl pl-6 font-bold text-white bg-blue-500 rounded-t">
                               Alimentation
                           </h3>
                           <div className="h-1 w-full bg-blue-500">
                           </div>
                           <div className="">
                               <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                                   <div id="R2" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                       Restaurants universitaire/FoodTruck/Cafet
                                       <div className="text-xl font-normal px-6">
                                           Les restos U te permettes de manger un repas complet pour 3,30€, ou tu dois manger rapidement pour étudier le Crous propose plusieurs solutions pour te restaurer : <a href="https://www.etudiant.gouv.fr/cid97554/ensemble-des-lieux-de-restauration-des-crous.html" target="blank" className="text-blue-500">Restos du crous</a>
                                       </div>
                                   </div>
                                   <div id="R3" className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                       paiement Izly
                                       <div className="text-xl font-normal px-6">
                                           Il est fortement conseillé de te créer un compte Izly afin de payer tes repas rapidement et est parfois le seul moyen de paiement accepté par les restos U, alors créer-le au plus vite : <a href="http://www.izly.fr/" target="blank" className="text-blue-500">Izly</a>
                                       </div>
                                   </div>
                                   <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                       Paniers repas
                                       <div className="text-xl font-normal px-6">
                                           Ne pas savoir quoi faire à manger ça arrive souvent, une solution : récupère un panier repas dans des magasins autours de toi, tu fais des économies et réduis le gaspillage : <a href="https://toogoodtogo.fr/fr" target="blank" className="text-blue-500">toogoodtogo</a>
                                       </div>
                                   </div>
                                   <div className="p-2 my-6 bg-gray-100 font-bold text-3xl px-12 py-3">
                                       Resto du coeur
                                       <div className="text-xl font-normal px-6">
                                           Penses aussi aux restos du coeur, présent dans les grandes qui te permettront d’avoir des repas gratuits, tu peux aussi apporter ton aide en tant que volontaire : <a href="https://www.restosducoeur.org/?prehome=off" target="blank" className="text-blue-500">Restos du coeur</a>
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
 
export default Alimentation;