function Destinations() {
  const places = [
    {
      name: "Mussoorie",
      description: "Queen of the Hills with beautiful mountain views."
    },
    {
      name: "Manali",
      description: "Snow-covered peaks and peaceful valleys."
    },
    {
      name: "Leh",
      description: "High-altitude desert beauty in Ladakh."
    },
    {
      name: "Ladakh",
      description: "Land of high passes and ultimate biker paradise."
    }
  ];

  return (
    <div className="section">
      <h1>Perfect Places for Bikers</h1>
      <div className="card-container">
        {places.map((place, index) => (
          <div key={index} className="card">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;