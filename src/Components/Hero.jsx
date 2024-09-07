const Hero = () => {
  return (
    <main className="hero">
      <section className="mission">
        <h2>
          <span>our mission</span> is to help you achieve your dreams
        </h2>
        <h4 className="entry-text">
          Working collaboratively to ensure every student achieves Academically,
          Socially and Emotionally
        </h4>
        <div className="hero-btns">
          <button className="signup start-btn">get started</button>
          <button className="know-more">know more</button>
        </div>
        <div className="call-us">
          <span className="round-spans">a</span>
          <span className="round-spans">B</span>
          <span className="round-spans">C</span>
          <span className="round-spans">D</span>
          <h4>
            <span>call us:</span> +91 783 653 1053
          </h4>
        </div>
      </section>

      <section className="students">
        <img
          src="https://img.freepik.com/premium-photo/group-happy-indian-school-students-smiling-camera-white-background_979520-48814.jpg"
          alt=""
        />
      </section>
    </main>
  );
};

export default Hero;
