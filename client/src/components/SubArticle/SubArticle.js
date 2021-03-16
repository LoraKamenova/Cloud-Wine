import './SubArticle.css'

const SubArticle = (props) => {
    return (
        <article className="sub=article">
            <p className="sub-article-paragraph">{props.paragraph}</p>
        </article>
    );
};

export default SubArticle;
