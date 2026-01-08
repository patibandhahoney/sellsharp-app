function Login({ navigate }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo" style={{justifyContent: 'center', marginBottom: '1rem'}} onClick={() => navigate('landing')}>SellSharp</div>
          <h2>Welcome back</h2>
          <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Log in to your account to continue</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button className="btn btn-primary btn-full">Sign In</button>
        </form>
        <div className="auth-switch">
          Don't have an account? <span onClick={() => navigate('signup')}>Create one</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
