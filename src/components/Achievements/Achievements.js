import React, { useState } from "react";
import {
  achievementsData,
  achievementsStats,
} from "../../data/portfolioData";
import {
  Trophy,
  Medal,
  ExternalLink,
  Award,
  Sparkles,
  Users,
  User,
  Filter,
} from "lucide-react";
import "./Achievements.css";

export default function Achievements() {
  const [filter, setFilter] = useState("all"); // all | 1st | 2nd

  const filteredAchievements =
    filter === "all"
      ? achievementsData
      : achievementsData.filter((a) => a.placeType === filter);

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow">Honors &amp; Awards</p>
          <h2 className="section-title">Inter-College Hackathons &amp; Coding Battles</h2>
          <p className="section-sub">
            Demonstrating speed, algorithmic rigor, and team collaboration under competitive pressure across premier engineering institutes.
          </p>
        </div>

        {/* Animated Statistics Banner */}
        <div className="achieve-stats-row">
          <div className="achieve-stat-card card-gold">
            <div className="stat-icon-wrapper gold-glow">
              <Trophy size={26} className="trophy-gold" />
            </div>
            <div className="stat-content">
              <span className="stat-big-number">{achievementsStats.firstPlaceWins}</span>
              <span className="stat-title">1st Place Finishes</span>
              <span className="stat-desc">Champions across technical events</span>
            </div>
          </div>

          <div className="achieve-stat-card card-silver">
            <div className="stat-icon-wrapper silver-glow">
              <Medal size={26} className="medal-silver" />
            </div>
            <div className="stat-content">
              <span className="stat-big-number">{achievementsStats.secondPlaceWins}</span>
              <span className="stat-title">2nd Place Runners-Up</span>
              <span className="stat-desc">Hackathon &amp; coding challenge finalists</span>
            </div>
          </div>

          <div className="achieve-stat-card card-total">
            <div className="stat-icon-wrapper crimson-glow">
              <Award size={26} className="award-crimson" />
            </div>
            <div className="stat-content">
              <span className="stat-big-number">{achievementsStats.totalWins}</span>
              <span className="stat-title">Total Inter-College Honors</span>
              <span className="stat-desc">Recognized competitive record</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="achieve-filter-bar">
          <button
            className={`achieve-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            <Filter size={14} />
            <span>All Honors ({achievementsData.length})</span>
          </button>
          <button
            className={`achieve-filter-btn ${filter === "1st" ? "active" : ""}`}
            onClick={() => setFilter("1st")}
          >
            <Trophy size={14} className="trophy-gold" />
            <span>1st Place Winners ({achievementsStats.firstPlaceWins})</span>
          </button>
          <button
            className={`achieve-filter-btn ${filter === "2nd" ? "active" : ""}`}
            onClick={() => setFilter("2nd")}
          >
            <Medal size={14} className="medal-silver" />
            <span>2nd Place Runners-Up ({achievementsStats.secondPlaceWins})</span>
          </button>
        </div>

        {/* Achievements Cards Grid */}
        <div className="achievements-grid">
          {filteredAchievements.map((item, idx) => {
            const isFirst = item.placeType === "1st";
            return (
              <div
                key={idx}
                className={`achievement-card card ${isFirst ? "achieve-gold-card" : "achieve-silver-card"}`}
              >
                <div className="achieve-header">
                  <div className={`place-badge ${isFirst ? "place-gold" : "place-silver"}`}>
                    {isFirst ? (
                      <Trophy size={16} className="icon-place" />
                    ) : (
                      <Medal size={16} className="icon-place" />
                    )}
                    <span>{item.place}</span>
                  </div>

                  <div className="team-badge">
                    {item.team === "Solo" ? (
                      <User size={13} />
                    ) : (
                      <Users size={13} />
                    )}
                    <span>{item.team} Format</span>
                  </div>
                </div>

                <div className="achieve-body">
                  <h3 className="achieve-event-title">{item.event}</h3>
                  <p className="achieve-college">{item.college}</p>
                </div>

                <div className="achieve-footer">
                  <div className="achieve-award-tag">
                    <Sparkles size={13} />
                    <span>{item.awardBadge}</span>
                  </div>

                  {item.verifiedUrl ? (
                    <a
                      href={item.verifiedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achieve-verify-link"
                      title="View Verified Post"
                    >
                      <span>Verification</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="achieve-verified-offline">
                      <span>Awarded On-Campus</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
