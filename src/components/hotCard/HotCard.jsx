import "./hotCard.scss";
import "../../scss/_reset.scss";

function HotCard(props) {
  const { components } = props;
  return (
    <>
      <div className="hotcard">
        <div className="hotcard-container">
          <h2 className="hotcard-container_content">{components.title}</h2>
          <h3 className="hotcard-container_price">{components.price} azn</h3>
          <p className="hotcard-container_description">{components.content}</p>
        </div>
        <img
          className="hotcard-container_image"
          src={components.img}
          alt="hot drinks image"
        />
      </div>
    </>
  );
}

export default HotCard;
