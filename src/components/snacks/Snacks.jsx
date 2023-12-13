import "./snacks.scss";
import "../../scss/_reset.scss";

function Snacks(props) {
  const { components } = props;
  return (
    <>
      <div className="snackcard">
        <div className="snackcard-container">
          <h2 className="snackcard-container_content">{components.title}</h2>
          <h3 className="snackcard-container_price">{components.price} azn</h3>
          <p className="snackcard-container_description">
            {components.content}
          </p>
        </div>
        <img
          className="snackcard-container_image"
          src={components.img}
          alt="sandwich image"
        />
      </div>
    </>
  );
}

export default Snacks;
