import { string } from "prop-types";

const Nav = ({ className }) => {
  return (
    <div className={className}>
      Nav
    </div>
  );
}

Nav.propTypes = {
  className: string
}

export default Nav;
