import React, { useState, useEffect, useRef } from 'react';

const ChooseYourPlatformToggle = () => {
  const [activePlatform, setActivePlatform] = useState('marking');
  const sliderRef = useRef(null);
  const buttonsRef = useRef([]);

  const platforms = [
    { name: 'Tutoring', value: 'tutoring' },
    { name: 'Learning', value: 'learning' },
    { name: 'Assesium Marking', value: 'marking' },
    { name: 'Philanthropy', value: 'philanthropy', badge: 'NEW' },
  ];

  useEffect(() => {
    const activeIndex = platforms.findIndex(p => p.value === activePlatform);
    const activeButton = buttonsRef.current[activeIndex];
    const slider = sliderRef.current;

    if (activeButton && slider) {
      slider.style.width = `${activeButton.offsetWidth}px`;
      slider.style.left = `${activeButton.offsetLeft}px`;
    }
  }, [activePlatform]);

  return (
    <div style={styles.platformSelection}>
      <div style={styles.platformToggle}>
        <div ref={sliderRef} style={styles.toggleSlider}></div>
        {platforms.map((platform, index) => (
          <button
            key={platform.value}
            ref={(el) => buttonsRef.current[index] = el}
            style={{
              ...styles.toggleOption,
              ...(activePlatform === platform.value ? styles.toggleOptionActive : {})
            }}
            onClick={() => setActivePlatform(platform.value)}
          >
            {platform.name}
            {platform.badge && <span style={styles.saveBadge}>{platform.badge}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  platformSelection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '3rem auto',
    padding: '0 2rem',
    position: 'relative',
  },
  platformToggle: {
    // background: 'linear-gradient(145deg, #e5e5e5ff 0%, #f8f8f8 100%)',
    background: 'white',
    borderRadius: '50px',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    // boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
    // border: '1px solid rgba(255, 140, 0, 0.1)',
    border: '1px solid black',
  },
  toggleOption: {
    padding: '12px 20px',
    borderRadius: '50px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#666',
    background: 'transparent',
    border: 'none',
    position: 'relative',
    zIndex: 2,
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  toggleOptionActive: {
    color: 'white',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  },
  toggleSlider: {
    position: 'absolute',
    background: 'linear-gradient(15deg, #2c5aa0 0%, #ff8c00 100%)',
    // background: 'linear-gradient(15deg, #f5c506ff 0%, #ff8c00 100%)',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    height: 'calc(100% - 12px)',
    top: '6px',
    zIndex: 1,
    boxShadow: '0 2px 8px rgba(255, 140, 0, 0.3)',
    width: 0,
    left: 0,
  },
  saveBadge: {
    background: '#ff8c00',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 700,
    marginLeft: '8px',
  },
};

export default ChooseYourPlatformToggle;
