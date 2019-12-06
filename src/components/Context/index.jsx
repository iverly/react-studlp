import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Context extends React.Component {

    render() {
        return (
            <div className="flex flex-col py-6">
                <div className="bg-blue-500 py-2 mb-4">
                    <div className="container text-3xl text-white font-bold px-2 md:px-0">Pourquoi Stud'LP ?</div>
                </div>
                <div className="container pl-4">
                    <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                        <div className="mb-2"> Près de <span className="font-bold">10%</span> des étudiant·e·s sont confronté·e·s à des situations aigües de <span className="font-bold">précarité</span> qui augmentent leurs risques de décrochage et compromettent leurs chances de réussite dans l’enseignement supérieur. Beaucoup abandonnent leurs études, ou subissent des redoublements et réorientations multiples.</div>
                        <div className="mb-2">Précarité économique, mauvaises conditions de logement, problèmes administratifs, ruptures familiales, problèmes de santé...</div>
                        <div>... sont autant de facteurs qui fragilisent ces étudiant·e·s dans leur parcours, et les exposent à différents risques et phénomènes de cercles vicieux : un isolement social et un épuisement moral en particulier, mais aussi des carences alimentaires, un renoncement aux soins, des addictions, toutes formes de prédations sexuelles, exploitations dans le cadre du travail et abus multiples...</div>
                        <div className="mt-6">C'est donc pour cela que nous avons décidé de créer ce site internet pour permettre aux étudiants de trouver des solutions adaptées à leurs besoins en fonction de leur age, location, besoin...
                            Principalement dédié aux étudiants qui ont besoin d'aide, car nous regroupons différents liens vers des aides financières, des aides de logements, des aides pour s'alimenter à moindre coût, cela s'adresse aussi aux étudiants qui recherchent seulement des bon plans.</div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }

}

export default Context;