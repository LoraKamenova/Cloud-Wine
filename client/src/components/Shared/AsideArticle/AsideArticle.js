import './AsideArticle.css'

const AsideArticle = (props) => {
    return (
        <article className="article">
            <div className="article-heading-wrapper">
                <span className="article-heading">{props.title}</span>
            </div>
            <p className="article-paragraph">{props.paragraph}</p>
        </article>
    );
};

export default AsideArticle;
