import React from "react";
import "./App.css";
import { useEffect } from "react";

// Hook to animate fade-up elements on scroll
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);
}


const teams = [
  {
    name: "Bio Team",
    className: "bio-team",
    description:
      "Focuses on biological and medical aspects, including biomarker research and healthcare integration.",
  },
  {
    name: "Business Team",
    className: "business-team",
    description:
      "Handles outreach, funding, partnerships, and ensures sustainable project development.",
  },
  {
    name: "Hardware Team",
    className: "hardware-team",
    description:
      "Develops physical components including custom mounts, VR integration, and hardware prototyping.",
  },
  {
    name: "Software Team",
    className: "software-team",
    description:
      "Builds the software stack—AI modeling, real-time eye-tracking algorithms, and system interfaces.",
  },
];

export default function Home() {
  useScrollAnimation(); // ✅ Hook call BEFORE return!
  return (
    <main className="main-container">
      <section className="intro-section fade=up">
        <h1>Welcome to UCSB Assistive Technology Club</h1>
        <p>
          We believe technology should empower, not limit. Our mission: to redefine assistive
          technology through precision, intelligence, and design.
        </p>

        <h2>What We’re Building</h2>
        <p>
          A VR-based eye-tracking system, powered by machine learning, to detect early-stage
          Alzheimer’s—faster, more affordable, and more accessible than ever before.
        </p>

        <h2>Why It Matters</h2>
        <ul>
          <li>
            <strong>🔬 Early detection. Life-changing intervention.</strong> Identifying Alzheimer’s
            before symptoms appear enables timely treatment.
          </li>
          <li>
            <strong>⚡ Infrared eye-tracking + AI.</strong> Subtle biomarkers, detected with clinical
            precision.
          </li>
          <li>
            <strong>💡 Under $25 per test.</strong> A scalable, seamless solution designed for real-world
            impact.
          </li>
        </ul>

        <h2>Designed for Simplicity. Engineered for Impact.</h2>
        <p>
          We integrate cutting-edge hardware, software, and research, leveraging Apple Vision Pro’s
          high-fidelity IR tracking to bring medical-grade accuracy to everyday diagnostics.
        </p>
      </section>

      {teams.map((team, index) => (
        <section key={team.name} className={`team-section ${team.className} fade-up`}
        style={{ animationDelay: `${0.2 * (index + 1)}s` }}
        >
          <h3>{team.name}</h3>
          <p>{team.description}</p>
        </section>
      ))}

      <section className="join-section fade-up" style={{ animationDelay: `${0.2 * (teams.length + 1)}s` }}>
        <h2>Join Us</h2>
        <ul>
          <li>🧠 Explore possibilities → #brainstorm, #workshop</li>
          <li>🔍 Turn ideas into solutions → #problem, #market, #spec</li>
          <li>🎯 Shape the future → Attend weekly meetings.</li>
        </ul>

        <p>The next generation of assistive technology starts here. Let’s build it together.</p>
      </section>
    </main>
  );
}
