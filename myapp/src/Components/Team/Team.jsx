import React from 'react';
import './Team.css';

export default function Team() {
  return (
    <div className="team-section">
      <p className="team-heading">OUR TEAM</p>
      <p className="team-subtext">
        Morbi in sebd viverra aenean amet. A Commondo nunc mauris, in accumsan facilisi montes, neque venenatis.
      </p>

      <div className="team-members">
        <div className="team-card">
          <img src="team_member_1.png" alt="Johnathan Tyler" />
          <h3>JOHNATHAN TYLER</h3>
          <p>Founder & Head Chef</p>
        </div>

        <div className="team-card">
          <img src="team_member_2.png" alt="Wade Warren" />
          <h3>WADE WARREN</h3>
          <p>Sous Chef</p>
        </div>

        <div className="team-card">
          <img src="team_member_3.png" alt="Jhon Doe" />
          <h3>JHON DOE</h3>
          <p>Fast Food Chef</p>
        </div>

        <div className="team-card">
          <img src="team_member_4.png" alt="Jhon Doe" />
          <h3>JHON DOE</h3>
          <p>Fast Food Chef</p>
        </div>
      </div>
    </div>
  );
}
