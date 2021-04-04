import './Journal.css'
import AsideArticle from "../../Shared/AsideArticle/AsideArticle";

import { Link } from "react-router-dom";

const Journal = () => {
    return (
        <section className="journal-section">
            <div className="journal-content-container">
                <div className="journal-article-wrapper">
                    <AsideArticle
                        title="ПЪТЕПИСИ"
                        paragraph="Тук е мястото, където ще събираме вашите пътеписи. Разкажете ни вашите положителни или отрицателни впечатления от посетената дестинация. Препоръчайте или не вината, които сте опитали. Покажените снимките, които сте заснели. Прочетете преживяванията на другите любители на виното."
                    />
                    <div className="info-button-wrapper">
                        <Link to="/journal/all"><span className="button info-button">Виж пътеписите<i className="fas fa-angle-double-right"></i></span></Link>
                    </div>
                </div>
                <div className="journal-image-container">
                    <div className="journal-image-wrapper"></div>
                </div>
            </div>
        </section>
    );
};

export default Journal;
