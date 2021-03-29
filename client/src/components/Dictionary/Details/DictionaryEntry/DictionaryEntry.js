import './DictionaryEntry.css'

const DictionaryEntry = (props) => {
    return (
        <article className="dictionary-article">
            <div className="dictionary-article-header" style={{backgroundImage: `url(${props.imageUrl})`}}>
                <span className="dictionary-article-heading">{props.title}</span>
            </div>
            <p className="dictionary-article-paragraph">{props.fullText}</p>
        </article>
    );
};

export default DictionaryEntry;
