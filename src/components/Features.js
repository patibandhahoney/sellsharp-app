function Features() {
  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2>Everything you need to close</h2>
        <p style={{color: 'var(--text-muted)'}}>Stop searching for content. Start selling. Our platform puts the right information at your fingertips instantly.</p>
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          </div>
          <h3>Real-time Battlecards</h3>
          <p>AI instantly surfaces competitive intel during your calls based on voice analysis.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3>Compliance Guard</h3>
          <p>Ensure every pitch is compliant. Automated risk detection for regulated industries.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          <h3>Performance Analytics</h3>
          <p>Track what works. Deep insights into which content drives revenue and wins deals.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
