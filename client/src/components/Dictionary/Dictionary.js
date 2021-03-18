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
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616001401/React%20Project/sun_qn96yt.png"
                        title="Тероар"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/about"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615998984/React%20Project/361700-200_eewlut.png"
                        title="Лозя"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/vineyard"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615999640/React%20Project/grape_br7bbj.png"
                        title="Грозде"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/grape"
                    />
                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616010588/React%20Project/barrel_datjas.png"
                        title="Бъчви"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/barrel"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616000069/React%20Project/wine-glass_h04ilm.png"
                        title="Вино"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/wine"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616001738/React%20Project/bottle_xgawvr.png"
                        title="Бутилки"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/bottle"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016154/React%20Project/bubbles_yupxpo.png"
                        title="Ферментация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/fermentation"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016154/React%20Project/wine_16-512_h7gxzj.png"
                        title="Корк"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/cork"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016122/React%20Project/flask_teogko.png"
                        title="Купаж"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/blending"
                    />
                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016285/React%20Project/press-machine-2662195-2213044_xaunb7.png"
                        title="Шира"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/must"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016922/React%20Project/pen-2_xwtkif.png"
                        title="Дегустация"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/tasting"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616016561/React%20Project/yeast_pda8ib.png"
                        title="Дрожди"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/yeast"
                    />

                </div>
            </div>
        </section>
    );
};

export default Dictionary;
