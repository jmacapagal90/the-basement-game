import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar({ user, setUser, clearCache }) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className='header'>
      <div>
        {user ? (
          <div>
            <Link to='/' className="link" onClick={()=>clearCache()}>Home</Link>
            <Link to="/" className="link" onClick={handleLogoutClick}>Logout</Link>
            <Link to="/scoreboard" className="link"onClick={()=>clearCache()}>Scoreboard</Link>
            <Link to="/account" className="link"onClick={()=>clearCache()}>My Account</Link>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
