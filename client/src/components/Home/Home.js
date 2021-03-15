import './Home.css'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import FooterBottom from "../FooterBottom/FooterBottom";

const Home = () => {
    return (
        <main className="home-page">
            <div className="home-main-container">
                <Header/>
                <Navigation/>
            </div>
            <FooterBottom/>
        </main>
    );
};

export default Home;
