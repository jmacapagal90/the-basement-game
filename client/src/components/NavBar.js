import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";


function NavBar({ user, setUser, clearCache, navbarOpen,setNavbarOpen }) {

  function handleClick(){
    clearCache()
    setNavbarOpen(false)
  }

  function handleLogout(){
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    setNavbarOpen(false)
  }

  return (
    <nav className='navBar'>
      <button onClick={()=>setNavbarOpen(!navbarOpen)} >{navbarOpen ? (
          <IconContext.Provider value={{ className: 'react-icons' }}><AiOutlineClose/></IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: 'react-icons' }}><FiMenu/></IconContext.Provider>
        )}
      </button>
        {user ? (
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <NavLink to='/' className="nav-link" onClick={()=>handleClick()}>Home</NavLink>
            <NavLink to="/account" className="nav-link"onClick={()=>handleClick()}>My Account</NavLink>
            <NavLink to="/scoreboard" className="nav-link"onClick={()=>handleClick()}>Scoreboard</NavLink>
            <NavLink to="/" className="nav-link" onClick={()=>handleLogout()}>Logout</NavLink>
          </ul>
        ) : (
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <NavLink to='/' className="nav-link" onClick={()=>handleClick()}>Home</NavLink>
            <NavLink to="/scoreboard" className="nav-link"onClick={()=>handleClick()}>Scoreboard</NavLink>
        </ul>
        )}
      
    </nav>
  );
}

export default NavBar;
