import './DictionaryPage.css'
import RedDictionaryCard from "./DictionaryCard/RedDictionaryCard/RedDictionaryCard";
import WhiteDictionaryCard from "./DictionaryCard/WhiteDictionaryCard/WhiteDictionaryCard";

const DictionaryPage = () => {
    return (

        <section className="dictionary-section">

            <div className="dictionary-wrapper">
                <div className="books-image-wrapper">
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px" alt="book" />
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993156/React%20Project/red_dict_a37bhx.png"
                         width="100px" height="70px" alt="bigger book" />
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px" alt="book"/>
                </div>

                <div className="dictionary-header">Винен речник</div>

                <div className="dictionary-cards-container">

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189944/React%20Project/sun_1_blpbuy.png"
                        title="Тероар"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/about"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189587/React%20Project/vineyard_g4wywg.png"
                        title="Лозя"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/vineyard"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616190045/React%20Project/grapes_1_maw6m2.png"
                        title="Грозде"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/grape"
                    />
                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189507/React%20Project/barrel_uejthz.png"
                        title="Бъчви"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/barrel"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616190130/React%20Project/glass-with-wine_xhztse.png"
                        title="Вино"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/wine"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189587/React%20Project/wine-bottle_sz1qth.png"
                        title="Бутилки"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/bottle"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616190266/React%20Project/clean_e94emx.png"
                        title="Ферментация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/fermentation"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189586/React%20Project/cork_ivm0qp.png"
                        title="Корк"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/cork"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616190420/React%20Project/flask_2_qikwzy.png"
                        title="Купаж"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/blending"
                    />
                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189586/React%20Project/press_j9pmxh.png"
                        title="Шира"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/must"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616190493/React%20Project/wine-tasting_1_dilykf.png"
                        title="Дегустация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/tasting"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189587/React%20Project/yeast_nlmatu.png"
                        title="Дрожди"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/yeast"
                    />

                </div>
            </div>
        </section>
    );
};

export default DictionaryPage;
