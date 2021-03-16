import './Start.css'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import FooterBottom from "../FooterBottom/FooterBottom";

const Start = () => {
    return (
        <main className="start-page">
            <div className="start-main-container">
                <Header/>
                <Navigation/>
            </div>
            <FooterBottom/>
        </main>
    );
};

export default Start;
