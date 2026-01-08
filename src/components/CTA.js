function CTA({ navigate }) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 style={{color: 'var(--white)'}}>Ready to sharpen your sales?</h2>
        <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>Join thousands of sales professionals closing more deals with SellSharp.</p>
        <button className="btn btn-login btn-large" style={{border: '2px solid var(--white)', color: 'var(--white)', background: 'transparent'}} onClick={() => navigate('signup')}>Get Started for Free</button>
        <p className="cta-note" style={{color: 'rgba(255, 255, 255, 0.7)'}}>No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  );
}

export default CTA;
