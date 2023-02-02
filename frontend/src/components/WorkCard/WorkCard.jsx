import propTypes from "prop-types";
import Style from "./style";

export default function WorkCard({ title, picture, description, url }) {
  return (
    <Style>
      <div className="container">
        <h2>{title}</h2>
        <img src={picture} alt="myshoot" />
        <p className="description">Description : {description}</p>
        <p className="lien">{url}</p>
      </div>
    </Style>
  );
}

WorkCard.propTypes = {
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
