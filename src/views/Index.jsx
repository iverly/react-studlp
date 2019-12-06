import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Context from '../components/Context';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Index extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header transparent={true} />
                <Banner />
                <Context />
                <Services />
                <Contact />
                <Footer />
            </>
        )
    }

}

export default Index;