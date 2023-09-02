import Header from "../componentes/Header/header";
import AboutBody from "../componentes/Body/About/about";
import Footer from "../componentes/Footer/footer";

export default function About(){
    return (
        <div className="App">
            <Header text='Sobre'/>
            <AboutBody/>
            <Footer/>
        </div>
    )

}