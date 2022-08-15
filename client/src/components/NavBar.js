import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar({ user, setUser }) {
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
            <Link to='/' className="link">Home</Link>
            <Link to="/" className="link" onClick={handleLogoutClick}>Logout</Link>
            <Link to="/scores" className="link">Scores</Link>
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
