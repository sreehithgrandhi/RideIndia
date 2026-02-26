import FadeInSection from "./FadeInSection";

function About() {
  const teamMembers = [
    {
      name: "G.G.D. Sreehith",
      role: "Team Lead",
      image:
        "https://res.cloudinary.com/dqdbw0aab/image/upload/v1730618365/IMG-20241103-WA0005_gr22cx.jpg"
    },
    {
      name: "V. Chethan Kumar",
      role: "Content Creator",
      image:
        "https://res.cloudinary.com/dqdbw0aab/image/upload/v1730615745/861eec4c-5db9-466e-8c98-a4611ba89e61_1_kszy7r.jpg"
    },
    {
      name: "Nukala Pranav Gupta",
      role: "Developer",
      image:
        "https://res.cloudinary.com/dqdbw0aab/image/upload/v1730618338/IMG-20241103-WA0004_phwguo.jpg"
    }
  ];

  return (
    <div className="section about-container">
      <h1>About RideIndia</h1>

      <p className="about-text">
        Built by passionate riders who believe that the road is freedom.
        RideIndia is more than a guide — it's a movement for adventure lovers.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <FadeInSection key={index}>
            <div className="team-card-clean">
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default About;