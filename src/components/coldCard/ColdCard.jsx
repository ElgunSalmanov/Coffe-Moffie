import "./coldcard.scss";
import "../../scss/_reset.scss";

function ColdCard(props) {
  const { components } = props;
  return (
    <>
      <div className="coldcard">
        <div className="coldcard-container">
          <h2 className="coldcard-container_content">{components.title}</h2>
          <h3 className="coldcard-container_price">{components.price} azn</h3>
          <p className="coldcard-container_description">{components.content}</p>
        </div>
        <img
          className="coldcard-container_image"
          src={components.img}
          alt="cold drinks image"
        />
      </div>
    </>
  );
}

export default ColdCard;
