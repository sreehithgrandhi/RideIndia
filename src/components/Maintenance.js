import FadeInSection from "./FadeInSection";

function Maintenance() {
  return (
    <div className="section maintenance-page">

      <h1>Rider’s Pro Maintenance Manual</h1>
      <p className="subtitle">
        A well-maintained machine is the difference between a smooth ride and a stranded journey.
      </p>

      {/* PRE RIDE CHECK */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>🔍 Pre-Ride Inspection (Before Every Ride)</h2>
          <ul>
            <li><strong>Tyre Pressure:</strong> Check PSI according to manufacturer specs.</li>
            <li><strong>Brake Function:</strong> Test front and rear brakes before moving.</li>
            <li><strong>Lights & Indicators:</strong> Ensure visibility and signaling work.</li>
            <li><strong>Chain Slack:</strong> Should not be too tight or too loose.</li>
            <li><strong>Fuel Level:</strong> Avoid unexpected reserve situations.</li>
          </ul>
        </div>
      </FadeInSection>

      {/* WEEKLY CHECK */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>🛠 Weekly / 500 km Check</h2>
          <ul>
            <li><strong>Engine Oil Level:</strong> Maintain proper lubrication.</li>
            <li><strong>Brake Pads:</strong> Replace if worn below safe thickness.</li>
            <li><strong>Battery Terminals:</strong> Check for corrosion.</li>
            <li><strong>Coolant Level:</strong> Especially for liquid-cooled engines.</li>
            <li><strong>Clutch Cable Free Play:</strong> Adjust for smooth shifting.</li>
          </ul>
        </div>
      </FadeInSection>

      {/* LONG RIDE PREP */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>🏔 Long Ride Preparation</h2>
          <ul>
            <li><strong>Full Service Before 1000+ km Trip</strong></li>
            <li><strong>Carry Spare Fuses & Bulbs</strong></li>
            <li><strong>Chain Lubrication Before Departure</strong></li>
            <li><strong>Check Wheel Alignment</strong></li>
            <li><strong>Inspect Suspension</strong> for leaks or noise</li>
          </ul>
        </div>
      </FadeInSection>

      {/* CHAIN CARE */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>⛓ Chain Care Guide</h2>
          <ul>
            <li>Clean chain every 500–700 km.</li>
            <li>Use proper chain cleaner (avoid petrol).</li>
            <li>Lubricate after every wash.</li>
            <li>Adjust slack to manufacturer recommendation.</li>
            <li>Replace chain + sprocket as a set.</li>
          </ul>
        </div>
      </FadeInSection>

      {/* TYRE & BRAKE CARE */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>🛞 Tyre & Brake Deep Care</h2>
          <ul>
            <li>Replace tyres when tread depth is low.</li>
            <li>Avoid hard braking on wet surfaces.</li>
            <li>Inspect disc rotors for uneven wear.</li>
            <li>Balance wheels if vibration occurs.</li>
          </ul>
        </div>
      </FadeInSection>

      {/* EMERGENCY KIT */}
      <FadeInSection>
        <div className="maintenance-card">
          <h2>🚨 Essential Touring Kit</h2>
          <ul>
            <li>Mini air pump</li>
            <li>Puncture repair kit</li>
            <li>Multi-tool & Allen keys</li>
            <li>Spare clutch cable</li>
            <li>First-aid kit</li>
          </ul>
        </div>
      </FadeInSection>

      {/* PRO TIPS */}
      <FadeInSection>
        <div className="maintenance-card highlight-card">
          <h2>🏍 Pro Riding Habits That Extend Bike Life</h2>
          <ul>
            <li>Warm engine for 1–2 minutes before aggressive riding.</li>
            <li>Avoid constant redline RPM.</li>
            <li>Shift smoothly — don’t force gears.</li>
            <li>Wash regularly but avoid direct pressure on bearings.</li>
            <li>Use quality fuel from trusted stations.</li>
          </ul>
        </div>
      </FadeInSection>

    </div>
  );
}

export default Maintenance;