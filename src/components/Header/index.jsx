import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isTransparant: true, isMenuOpen: false }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        if (window.scrollY > 20 && this.state.isTransparant) this.setState({ isTransparant: false })
        if (window.scrollY <= 20 && !this.state.isTransparant) this.setState({ isTransparant: true })
    }

    render() {
        return (
            <>
                <nav className={this.state.isTransparant & !this.state.isMenuOpen & this.props.transparent ? "fixed w-full p-6 z-50 bg-transparent transition-all" : "fixed w-full p-6 z-50 bg-blue-500 transition-all"}>
                    <div className="container flex items-center justify-between flex-wrap">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                            <span className="font-semibold text-2xl tracking-tight">Stud'LP</span>
                        </div>
                        <div className="block lg:hidden">
                            <button className="flex items-center px-3 py-2 border rounded text-white border-white" onClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })}>
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                        <div className={this.state.isMenuOpen ? "w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto transition-all" : "w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto hidden transition-all"}>
                            <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-gray-300 p-2 mr-2">Accueil</Link>
                            <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-gray-300 p-2 mr-2">Finance</Link>
                            <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-gray-300 p-2 mr-2">Logement</Link>
                            <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-gray-300 p-2 mr-2">Santé</Link>
                            <Link to="/responsive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-gray-300 p-2 mr-2">Alimentation</Link>
                            <Link to="/login" className="block lg:inline-block px-4 py-2 leading-none border rounded text-lg text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 transition-all">Connexion</Link>
                        </div>
                    </div>
                </nav>
                <div className="pt-24"></div>
            </>
        )
    }

}

export default Header;