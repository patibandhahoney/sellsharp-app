function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo" style={{marginBottom: '1rem'}}>SellSharp</div>
          <p>The AI-powered sales enablement platform for modern teams.</p>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 SellSharp Inc. All rights reserved. <span style={{marginLeft: '1rem'}}>Made with SellSharp Team</span></p>
      </div>
    </footer>
  );
}

export default Footer;