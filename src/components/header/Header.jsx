import "../../scss/_reset.scss";
import "./header.scss";
import "../../scss/_mixins.scss";
import "../../scss/_variables.scss";

function Header() {
  return (
    <>
      <header className="head">
        <img
          className="head-image"
          src="../../../src/assets/img/menu.png"
          alt="menu"
        />
      </header>
    </>
  );
}

export default Header;
