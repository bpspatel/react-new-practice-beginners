import logoImg from "../../image/logo.jpg";
import { useState } from 'react';


const Title = () => (
    <a href="/">
      <img className="logo" alt="logo" src={logoImg} />
    </a>
  );
  
  const Header = () => {
    const [isLogIn,setIsLogIn] = useState(true);
    return (
      <div className="headerContainer">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Cart</li>
          </ul>
        </div>
        {
           (isLogIn === true) ? <button onClick={()=>setIsLogIn(false)}>Logout</button> :
            <button onClick={()=>setIsLogIn(true)}>Login</button>
        }
      </div>
    );
  };

  export default Header;