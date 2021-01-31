import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="nav-link-active" to="/quiz-app/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-link-active" to="/quiz-app/create-quiz">
            Create Quiz
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-link-active" to="/quiz-app/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
