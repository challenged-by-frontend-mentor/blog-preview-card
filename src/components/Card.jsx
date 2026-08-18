import cardImage from "../assets/illustration-article.svg";
import profileAvatar from "../assets/image-avatar.webp";

const Card = () => {
  return (
    <article className="card">
      <img src={cardImage} alt="" aria-hidden="true" className="card__image" />
      <div className="card__body">
        <p className="card__badge">Learning</p>
        <p className="card__published-date">
          Published <time dateTime="2023-12-21">21 Dec 2023</time>
        </p>
        <h2 className="card__title">
          <a href="#" className="card__title-link">
            HTML & CSS foundations
          </a>
        </h2>
        <p className="card__description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <footer className="card__footer">
        <img src={profileAvatar} alt="Greg Hooper" className="card__avatar" />
        <span className="card__author-name">Greg Hooper</span>
      </footer>
    </article>
  );
};

export default Card;
