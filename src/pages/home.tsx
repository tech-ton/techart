import Header from "../componentes/Header/header";
import HomeBody from "../componentes/Body/Home/body";
import Footer from "../componentes/Footer/footer";

export default function Home(){
    return (
        <div className="App">
            <Header text='Pagina Inicial'/>
            <HomeBody/>
            <Footer/>
        </div>
    )

}