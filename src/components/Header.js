import classes from './Header.module.css';
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = ({isAuthenticated}) => {

  const dispatch = useDispatch();

  function handleLogoutButton(){
    dispatch(authActions.logout());
  }
  
 
  return (
    < header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogoutButton}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
