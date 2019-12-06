import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends React.Component {

    render() {
        return (
            <div className="flex flex-col py-6">
                <div className="bg-blue-500 py-2 mb-4">
                    <div className="container text-3xl text-white font-bold px-2 md:px-0">Nos services</div>
                </div>
                <div className="container pl-4 flex flex-col sm:flex-row">
                    <Card url="https://www.studyrama.com/IMG/arton5673.jpg" animation="bounceInUp" title="Finance" description="Vous trouverez différentes aides financières. Que ce soit des aides pour simuler les bourses auxquelles vous pourriez avoir accès, des aides pour créer votre dossiers, des infos pour pouvoir avoir accès à des prêt banquaires avantageux pour étudiants." />
                    <Card url="https://www.annecy.fr/uploads/Image/ef/IMF_ACCROCHE/GAB_ANNECY/62_571_accroche-logement-social.jpg" animation="bounceInDown" title="Logement" description="Le logement est un des problèmes les plus importants à régler pour les étudiants en début d'année. Ici on regroupe différents liens vers des sites avec des avantages ou informations avantageuses pour étudiants." />
                    <Card url="https://www.actu-environnement.com/images/illustrations/news/22798_une.jpg" animation="bounceInUp" title="Santé" description="La santé devient un soucis important pour les étudiants qui vivent maintenant seules. Quelles solutions leurs sont apportées pour qu'ils puissent garder une bonne santé à moindre coût tout en gardant un bon niveau de soin." />
                    <Card url="http://www.cite-sciences.fr/fileadmin/fileadmin_CSI/fichiers/au-programme/evenements/Alimentation_2018/Bandeau-Festival-alimentation.png" animation="bounceInDown" title="Alimentation" description="Plusieurs solutions existent pour permettre de manger à bas coût lorsque l'on est étudiant mais malheureusement peu de personne les connaissent. Ici on vous propose d'y accéder facilement." />
                </div>
            </div>
                
        )
    }

}

const Card = (props) => {
    return (
        <div class="lg:w-1/4 rounded overflow-hidden shadow-lg mx-2 mb-2 md:mb-0">
            <ScrollAnimation animateIn={props.animation} animateOnce={true}>
                <img class="w-full" src={props.url} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.title}</div>
                    <p class="text-gray-700 text-base">{props.description}</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Services;