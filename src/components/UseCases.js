function UseCases() {
  return (
    <>
      <section className="why-choose">
        <div className="section-header">
          <h2>Why Choose SellSharp?</h2>
          <p style={{color: 'var(--text-muted)'}}>We go beyond standard CRM tools to provide active, intelligent guidance that actually moves the needle on your revenue targets.</p>
        </div>
        <div className="benefit-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3>Increase Win Rates</h3>
            <p>Our users report an average 25% increase in deal closures within the first 3 months.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
            </div>
            <h3>Faster Onboarding</h3>
            <p>Reduce new hire ramp-up time by 40% with guided selling experiences.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3>Complete Compliance</h3>
            <p>Ensure every pitch stays on-brand and fully compliant with automated guardrails.</p>
          </div>
        </div>
      </section>

      <section className="proven-impact">
        <div className="section-header">
          <h2>Proven Impact</h2>
          <p style={{color: 'var(--text-muted)'}}>See how industry leaders are leveraging SellSharp to redefine their sales excellence.</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=50&h=50&crop=face" alt="Sarah Jenkins" className="testimonial-avatar" />
              <div>
                <h4>TechFlow Systems</h4>
                <p className="testimonial-stat">30% Revenue Growth</p>
              </div>
            </div>
            <p className="testimonial-quote">"SellSharp transformed how our B2B team handles complex objections. It's a game changer."</p>
            <p className="testimonial-author">— Sarah Jenkins, VP of Sales</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=50&h=50&crop=face" alt="Michael Chen" className="testimonial-avatar" />
              <div>
                <h4>Global Logistics Co</h4>
                <p className="testimonial-stat">50% Faster Training</p>
              </div>
            </div>
            <p className="testimonial-quote">"The AI playbooks allowed us to scale our team globally without sacrificing pitch quality."</p>
            <p className="testimonial-author">— Michael Chen, Head of Enablement</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=50&h=50&crop=face" alt="Emma Rodriguez" className="testimonial-avatar" />
              <div>
                <h4>InnovaTech Solutions</h4>
                <p className="testimonial-stat">40% Higher Close Rates</p>
              </div>
            </div>
            <p className="testimonial-quote">"Our sales cycle shortened dramatically with SellSharp's real-time battle cards and compliance features."</p>
            <p className="testimonial-author">— Emma Rodriguez, Sales Director</p>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>35%</h3>
            <p>Increase in win rates</p>
          </div>
          <div className="stat-card">
            <h3>2x</h3>
            <p>Faster onboarding</p>
          </div>
          <div className="stat-card">
            <h3>10k+</h3>
            <p>Playbooks created</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>AI Assistant Support</p>
          </div>
        </div>
      </section>

      <section className="ai-platform">
        <div className="ai-content">
          <h2>AI-Powered Sales Intelligence</h2>
          <p>Our advanced AI analyzes every sales interaction in real-time, providing instant insights, objection handling, and competitive intelligence to help your team close more deals.</p>
          <div className="ai-features">
            <div className="ai-feature">
              <div className="ai-icon">🤖</div>
              <h4>Real-time Analysis</h4>
              <p>Voice analysis during calls to surface relevant content</p>
            </div>
            <div className="ai-feature">
              <div className="ai-icon">📊</div>
              <h4>Smart Insights</h4>
              <p>Data-driven recommendations for better outcomes</p>
            </div>
            <div className="ai-feature">
              <div className="ai-icon">⚡</div>
              <h4>Instant Responses</h4>
              <p>Automated suggestions to handle objections effectively</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UseCases;
