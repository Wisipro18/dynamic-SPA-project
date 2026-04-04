const Home = () => {

  useEffect(() => {
    document.title = "dynamic SPA"; // dynamic page title
  }, []);

  return (
  <div className="page">

    <div className="content-card">
      <h1>Welcome to My Creative SPA 🚀</h1>

      <p>
        Hi! I'm Wisdom, a passionate developer who enjoys building
        interactive web applications using modern technologies like React.
      </p>
    </div>

    <div className="content-card">
      <h2>Who Am I?</h2>

      <p>
        I'm a tech enthusiast who enjoys creating modern web experiences,
        experimenting with UI animations, and building interactive
        applications that feel smooth and dynamic.
      </p>
    </div>

    <div className="content-card">
      <h2>Skills I'm Working With</h2>

      <ul>
        <li>⚛️ React & SPA Development</li>
        <li>🎨 Responsive UI Design</li>
        <li>🧠 JavaScript Logic</li>
        <li>🌐 HTML & CSS</li>
      </ul>
    </div>

  </div>
);
};

export default Home;
