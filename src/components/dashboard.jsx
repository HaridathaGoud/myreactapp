import React, { useCallback } from "react";
import "../styles.css"; // optional helper CSS (below)
import { gitUrl, clientNameOrPrefix } from "./services";
import ARTHA_IMAGE from "../assets/images/arthaimage.svg";
import WARNING_ICON from "../assets/images/warning.svg";
import ADDRESS_IMAGE from "../assets/images/address-img.svg";
import { useNavigate } from "react-router-dom";


const AssetBlock = ({ src, alt, name, description, to }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    if (to) {
      navigate(to);
    }
  }, [to, navigate]);
  return (
    <article className={`asset-card ${to ? "cursor-pointer" : ""}`} onClick={handleClick}>
      <div className="asset-media">
        <img
          src={src}
          alt={alt}
          onError={(e) => (e.currentTarget.style.opacity = 0.6)}
        />
      </div>
      <div className="asset-body">
        <h4 className="asset-title">{name}</h4>
        <p className="asset-desc">{description}</p>
      </div>
    </article>
  );
}

const Dashboard = () => {
  const openR2 = () => {
    window.open("https://dash.cloudflare.com/", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="min-screen page-bg font-sans">


      <main className="container main-grid">
        <section className="hero">
          <div className="hero-text">
            <h2 className="hero-title">Cloudflare R2 Asset Integration Test</h2>
            <p className="hero-copy">
              Live test fetching client-specific assets directly from an R2 bucket.
              Styles and icons are loaded dynamically from the configured prefix.
            </p>
            <div className="warning-row">
              <img src={WARNING_ICON} alt="warning" className="warning-icon" />
              <span className="warning-text">TEST WARNING — Live R2 Fetch Confirmed</span>
            </div>

            <div className="header-actions mt-4">
              <button className="btn-primary" onClick={openR2}>
                Open Cloudflare R2
              </button>
            </div>
          </div>
          <div className="hero-media">
            <img src={ARTHA_IMAGE} alt="Artha visual" className="hero-image" />
          </div>
        </section>

        <h3 className="section-title">Asset Gallery: Client-Specific Uploads</h3>

        <section className="assets-grid" aria-label="Client assets">
          <AssetBlock
            src={ARTHA_IMAGE}
            alt="Artha"
            name="Artha Image"
            description="Main brand visual"
            to="/artha"
          />
          <AssetBlock
            src={WARNING_ICON}
            alt="Warning"
            name="Warning Icon"
            description="Alert system asset"
            to="/warning"
          />
          <AssetBlock
            src={ADDRESS_IMAGE}
            alt="Address"
            name="Address Image"
            description="Contact / location asset"
            to="/address"
          />
        </section>
      </main>



      <footer className="container footer">
        <small>
          GitHub:&nbsp;
          <code className="code-inline">{gitUrl}</code>
          &nbsp;prefix:
          <code className="code-inline">{clientNameOrPrefix}</code>
        </small>
      </footer>
    </div>
  );
}
export default Dashboard;