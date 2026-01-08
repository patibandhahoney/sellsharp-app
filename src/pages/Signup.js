function Signup({ navigate }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo" style={{justifyContent: 'center', marginBottom: '1rem'}} onClick={() => navigate('landing')}>SellSharp</div>
          <h2>Get started today</h2>
          <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Join 5,000+ teams selling with SellSharp</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Work Email</label>
            <input type="email" placeholder="john@company.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>
          <button className="btn btn-primary btn-full">Start Free Trial</button>
        </form>
        <div className="auth-switch">
          Already have an account? <span onClick={() => navigate('login')}>Log In</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
