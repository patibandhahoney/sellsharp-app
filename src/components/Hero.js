function Hero({ navigate }) {
  return (
    <section className="hero">
      
      <h1>Empower Your Sales Team <span>with SellSharp</span></h1>
      <h2 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)', fontWeight: '700'}}>Everything you need to close</h2>
      <p style={{color: '#ffffffff', fontWeight: '500'}}>The all-in-one sales enablement platform. Create playbooks, handle objections in real-time, and close deals faster.</p>
      <div className="hero-btns">
        <button className="btn btn-primary btn-large" onClick={() => navigate('signup')}>Start Free Trial</button>
        <button className="btn btn-login btn-large" style={{border: '1px solid var(--border-color)'}}>Watch Demo</button>
      </div>
      
      <div className="trusted-companies">
        <p style={{color: '#ffffffff', fontWeight: '500'}}>Trusted by forward-thinking sales teams at</p>
        <div className="company-logos">
          <span>ACME Corp</span>
          <span>Globex</span>
          <span>Soylent</span>
          <span>Initech</span>
          <span>Umbrella</span>
        </div>
      </div>

      <div className="hero-mockup">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000&h=600" 
          alt="SellSharp Dashboard" 
          className="mockup-img"
        />
      </div>
    </section>
  );
}

export default Hero;