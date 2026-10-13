import React, { useState } from "react";
import { certificatesData } from "../../data/portfolioData";
import {
  Award,
  Eye,
  CheckCircle,
  FileCheck,
  X,
  Sparkles,
} from "lucide-react";
import "./Certificates.css";

export default function Certificates() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Credentials &amp; Training</p>
          <h2 className="section-title">Certificates &amp; Technical Accreditations</h2>
          <p className="section-sub">
            Verified course completions and certifications reinforcing programming concepts, cloud storage, web technologies, and AI foundations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="certificates-gallery-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-gallery-card card">
              {cert.hasImage && cert.image ? (
                <div
                  className="cert-thumbnail-container"
                  onClick={() => setActiveLightbox(cert)}
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-thumbnail-img"
                  />
                  <div className="cert-thumbnail-overlay">
                    <span className="view-cert-badge">
                      <Eye size={15} />
                      <span>View Full Certificate</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="cert-placeholder-container">
                  <div className="cert-placeholder-icon">
                    <FileCheck size={32} className="text-crimson" />
                  </div>
                  <span className="cert-placeholder-text">
                    Verified Course Curriculum
                  </span>
                </div>
              )}

              <div className="cert-card-body">
                <div className="cert-issuer-badge">
                  <Award size={13} />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>

                <p className="cert-card-scope">
                  <strong>Scope:</strong> {cert.credentialScope}
                </p>

                <div className="cert-card-footer">
                  <div className="cert-status-tag">
                    <CheckCircle size={13} className="text-success" />
                    <span>Certified Competency</span>
                  </div>

                  {cert.hasImage && (
                    <button
                      className="cert-lightbox-trigger"
                      onClick={() => setActiveLightbox(cert)}
                    >
                      <Eye size={14} />
                      <span>Preview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="cert-lightbox-backdrop"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-lightbox-header">
              <div className="lightbox-title-group">
                <Sparkles size={16} className="text-crimson" />
                <h4>{activeLightbox.title}</h4>
              </div>
              <button
                className="cert-lightbox-close"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close certificate lightbox"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-lightbox-image-wrap">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="cert-lightbox-img"
              />
            </div>

            <div className="cert-lightbox-footer">
              <span className="lightbox-issuer">
                Issuer: {activeLightbox.issuer}
              </span>
              <span className="lightbox-scope">
                {activeLightbox.credentialScope}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
