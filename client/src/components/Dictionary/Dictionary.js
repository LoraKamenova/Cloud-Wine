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
                        link="/about"
                    />
                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616001940/React%20Project/barrel-_kkgip1.jpg"
                        title="Бъчви"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/about"
                    />

                    <RedDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616000069/React%20Project/wine-glass_h04ilm.png"
                        title="Вино"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/about"
                    />

                    <WhiteDictionaryCard
                        url="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616001738/React%20Project/bottle_xgawvr.png"
                        title="Бутилки"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ..."
                        link="/vineyard"
                    />


                </div>
            </div>
        </section>
    );
};

export default Dictionary;
