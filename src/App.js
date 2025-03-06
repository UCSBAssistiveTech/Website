import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchedTeamMembers = [
        { id: 1, name: 'n1', role: 'r1', imageUrl: 'img.jpg' },
        { id: 2, name: 'n2', role: 'r2', imageUrl: 'img.jpg' },
      ];
      setTeamMembers(fetchedTeamMembers);
      setLoading(false);
      setPageLoaded(true); 
    }, 1000);
  }, []);

  return (
    <div className={`container ${pageLoaded ? 'page-loaded' : ''}`}>
      <head>
        <title>UCSB Assistive Technology</title>
      </head>
      
      <header className="header">
        <h1 className="header-title">UCSB Assistive Technology</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            About us
          </p>
          <p>
            What we are doing
          </p>
          {/* Add more about content here */}
        </section>

        <section id="team" className="section">
          <h2>Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="logo.svg" alt="Team Member 1" className="team-member-image" />
              <h3>Name</h3>
              <p>Role:</p>
            </div>
            <div className="team-member">
              <img src="logo.svg" alt="Team Member 2" className="team-member-image" />
              <h3>Name</h3>
              <p>Role:</p>
            </div>
            {/* Add more team members here */}
          </div>
        </section>

        <section id="join" className="section">
          <h2>Join Us</h2>
          <p>
            Interested in making a difference? Join our team!
          </p>
          <p>
            We welcome all majors and skill levels.
          </p>
          <button className="join-button">Apply Now</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UCSB Assistive Technology</p>
      </footer>
    </div>
  );
}

export default App;
