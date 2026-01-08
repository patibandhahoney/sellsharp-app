function Navbar({ navigate }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('landing')}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        SellSharp
      </div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#solutions">Solutions</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="nav-auth">
        <button className="btn btn-login" onClick={() => navigate('login')}>Log in</button>
        <button className="btn btn-primary" onClick={() => navigate('signup')}>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;