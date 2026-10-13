import React from "react";
import { codingProfilesData } from "../../data/portfolioData";
import {
  ExternalLink,
  Code2,
  Award,
  Terminal,
  CheckCircle,
  Zap,
} from "lucide-react";
import "./CodingProfiles.css";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section coding-profiles-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Algorithmic Mastery</p>
          <h2 className="section-title">Coding Profiles &amp; Problem Solving</h2>
          <p className="section-sub">
            Demonstrating deep data structure fundamentals, time complexity optimization, and day-in day-out consistency.
          </p>
        </div>

        {/* Profiles Grid: LeetCode & CodeChef */}
        <div className="coding-profiles-grid">
          {codingProfilesData.map((profile) => (
            <div
              key={profile.id}
              className={`coding-profile-card card ${profile.id === "leetcode" ? "card-leetcode" : "card-codechef"}`}
            >
              <div className="profile-card-top">
                <div className="platform-brand-row">
                  <div className="platform-icon-box">
                    {profile.id === "leetcode" ? (
                      <Code2 size={24} className="platform-icon-lc" />
                    ) : (
                      <Terminal size={24} className="platform-icon-cc" />
                    )}
                  </div>
                  <div>
                    <h3 className="platform-name">{profile.platform}</h3>
                    <span className="platform-handle">@{profile.username}</span>
                  </div>
                </div>

                <div className="profile-badge-pill">
                  <Zap size={13} />
                  <span>Verified Competitor</span>
                </div>
              </div>

              <p className="profile-description">{profile.description}</p>

              {/* Metrics Showcase */}
              <div className="profile-metrics-list">
                {profile.metrics.map((metric, i) => (
                  <div key={i} className="profile-metric-box">
                    <div className="metric-indicator">
                      {i === 0 ? (
                        <CheckCircle size={18} className="metric-icon-val" />
                      ) : (
                        <Award size={18} className="metric-icon-badge" />
                      )}
                    </div>
                    <div className="metric-text-group">
                      <span className="metric-number">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="profile-action-wrapper">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-visit-profile"
                >
                  <span>Visit {profile.platform} Profile</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
