import { stats } from "../../data/portfolioData";
import useCounter from "../../hooks/useCounter";
import Reveal from "../Reveal";
import "./Stats.css";

function StatItem({ label, value, suffix }) {
  const [ref, current] = useCounter(value);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-value">
        {current}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <Reveal className="stats-grid">
          {stats.map((s) => (
            <StatItem key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
