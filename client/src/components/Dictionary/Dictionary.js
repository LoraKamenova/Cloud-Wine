import './Dictionary.css'
import RedDictionaryCard from "./DictionaryCard/RedDictionaryCard/RedDictionaryCard";
import WhiteDictionaryCard from "./DictionaryCard/WhiteDictionaryCard/WhiteDictionaryCard";

const Dictionary = () => {
    return (

        <section className="dictionary-section">

            <div className="dictionary-wrapper">
                <div className="books-image-wrapper">
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px"/>
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993156/React%20Project/red_dict_a37bhx.png"
                         width="100px" height="70px"/>
                    <img className="book-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615993155/React%20Project/brown_dict_k2ybth.png"
                         width="70px" height="50px"/>
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
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616001738/React%20Project/bottle_xgawvr.png"
                        title="Бутилки"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/bottle"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189848/React%20Project/cork_1_pfeuo2.png"
                        title="Ферментация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/fermentation"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189848/React%20Project/cork_1_pfeuo2.png"
                        title="Корк"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/cork"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616189586/React%20Project/flask_edlnyc.png"
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
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016922/React%20Project/pen-2_xwtkif.png"
                        title="Дегустация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/tasting"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016561/React%20Project/yeast_pda8ib.png"
                        title="Дрожди"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/dictionary/yeast"
                    />

                </div>
            </div>
        </section>
    );
};

export default Dictionary;
