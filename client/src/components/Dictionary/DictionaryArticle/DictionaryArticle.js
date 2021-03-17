import './DictionaryArticle.css'

const DictionaryArticle = (props) => {
    return (
        <article className="dictionary-article">
            <div className="dictionary-article-header">
                <span className="dictionary-article-heading">{props.title}</span>
            </div>
            <p className="dictionary-article-paragraph">{props.paragraph}</p>
        </article>
    );
};

export default DictionaryArticle;
