import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fa");

  const isEnglish = language === "en";

  useEffect(() => {
    const savedTheme = localStorage.getItem("mmdmehdi-theme");
    const savedLanguage = localStorage.getItem("mmdmehdi-language");

    if (savedTheme === "light") {
      setDarkMode(false);
    }

    if (savedLanguage === "en") {
      setLanguage("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("mmdmehdi-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    localStorage.setItem("mmdmehdi-language", language);
  }, [language, isEnglish]);

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "fa" : "en");
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label={
              isEnglish
                ? "Back to the top of the website"
                : "بازگشت به ابتدای سایت"
            }
          >
            MmdMehdi<span>.</span>
          </button>

          <nav
            id="main-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label={isEnglish ? "Main navigation" : "منوی اصلی"}
          >
            <button onClick={() => scrollToSection("about")}>
              {isEnglish ? "About" : "درباره من"}
            </button>

            <button onClick={() => scrollToSection("skills")}>
              {isEnglish ? "Skills" : "مهارت‌ها"}
            </button>

            <button onClick={() => scrollToSection("projects")}>
              {isEnglish ? "Projects" : "پروژه‌ها"}
            </button>

            <button onClick={() => scrollToSection("contact")}>
              {isEnglish ? "Contact" : "ارتباط"}
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-button language-button"
              onClick={toggleLanguage}
              aria-label={
                isEnglish ? "Switch to Persian" : "تغییر زبان به انگلیسی"
              }
              title={isEnglish ? "Switch to Persian" : "تغییر زبان"}
            >
              {isEnglish ? "FA" : "EN"}
            </button>

            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={isEnglish ? "Change theme" : "تغییر تم"}
              aria-pressed={!darkMode}
              title={
                isEnglish
                  ? "Toggle light and dark mode"
                  : "تغییر حالت روشن و تاریک"
              }
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? isEnglish
                    ? "Close menu"
                    : "بستن منو"
                  : isEnglish
                    ? "Open menu"
                    : "باز کردن منو"
              }
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              title={
                menuOpen
                  ? isEnglish
                    ? "Close menu"
                    : "بستن منو"
                  : isEnglish
                    ? "Open menu"
                    : "باز کردن منو"
              }
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <div className="status">
                <span></span>
                {isEnglish ? "Learning and building" : "در حال یادگیری و ساختن"}
              </div>

              <p className="hero-label">
                COMPUTER ENGINEERING STUDENT
              </p>

              <h1>
                {isEnglish ? (
                  <>
                    Hi, I'm <span>Mohammad Mahdi</span>.
                  </>
                ) : (
                  <>
                    سلام، من <span>محمد مهدی</span> هستم.
                  </>
                )}
              </h1>

              <p className="hero-subtitle">
                {isEnglish
                  ? "Computer Engineering student; on the path of learning and building real things."
                  : "دانشجوی مهندسی کامپیوتر؛ در مسیر یادگیری و ساختن چیزهای واقعی."}
              </p>

              <p className="hero-description">
                {isEnglish
                  ? "I'm interested in technology, programming, and building new things. I'm still at the beginning of my journey, but I enjoy learning, experimenting, and gradually turning my ideas into real projects."
                  : "به تکنولوژی، برنامه‌نویسی و ساختن چیزهای جدید علاقه دارم. هنوز اول مسیرم، اما دوست دارم یاد بگیرم، تجربه کنم و ایده‌هام رو کم‌کم به پروژه‌های واقعی تبدیل کنم."}
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  {isEnglish ? "View projects" : "دیدن پروژه‌ها"}{" "}
                  <span>↙</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("about")}
                >
                  {isEnglish ? "More about me" : "بیشتر درباره من"}
                </button>
              </div>
            </div>

            <div className="profile-card">
              <div className="card-top">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>about_me.txt</span>
              </div>

              <div className="profile-content">
                <p>
                  <span>name:</span> Mohammad Mahdi
                </p>

                <p>
                  <span>brand:</span> MmdMehdi
                </p>

                <p>
                  <span>status:</span> Learning
                </p>

                <p>
                  <span>focus:</span> Technology
                </p>

                <p>
                  <span>next:</span> Build something real
                </p>
              </div>

              <div className="card-bottom">
                KEEP LEARNING. KEEP BUILDING.
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span>01</span>
              <h2>{isEnglish ? "About me" : "درباره من"}</h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  {isEnglish
                    ? "Hi 👋 I'm Mohammad Mahdi Motamedi; a Computer Engineering student interested in technology, programming, and building new things 🙂."
                    : "سلام 👋 من محمد مهدی معتمدی هستم؛ دانشجوی مهندسی کامپیوتر و به تکنولوژی، برنامه‌نویسی و ساختن چیزهای جدید علاقه دارم 🙂."}
                </p>
              </div>

              <div className="about-side">
                <p>
                  {isEnglish
                    ? "I'm still at the beginning of my journey, but I enjoy learning, experimenting, and gradually turning my ideas into real projects."
                    : "هنوز اول مسیرم، اما دوست دارم یاد بگیرم، تجربه کنم و ایده‌هام رو کم‌کم به پروژه‌های واقعی تبدیل کنم."}
                </p>

                <p>
                  {isEnglish
                    ? "This website is also part of my journey; a place that will grow alongside my learning and new projects."
                    : "این سایت هم بخشی از مسیر منه؛ جایی که قراره همراه با یادگیری‌ها و پروژه‌های جدیدم رشد کنه."}
                </p>

                <p className="signature">
                  {isEnglish
                    ? "Best regards, Mohammad Mahdi Motamedi ❤️"
                    : "دوستدار شما، محمد مهدی معتمدی ❤️"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-header">
              <span>02</span>
              <h2>{isEnglish ? "Skills & Interests" : "مهارت‌ها و علایق"}</h2>
            </div>

            <p className="section-description">
              {isEnglish
                ? "Things I have worked with or am currently learning and improving."
                : "چیزهایی که با آن‌ها کار کرده‌ام یا در مسیر یادگیری و پیشرفتشان هستم."}
            </p>

            <div className="skills-list">
              <div className="skill-item">
                <span>01</span>
                <p>Python</p>
                <small>
                  {isEnglish
                    ? "Currently learning and experimenting"
                    : "در حال یادگیری و تجربه"}
                </small>
              </div>

              <div className="skill-item">
                <span>02</span>
                <p>AI & Automation</p>
                <small>
                  {isEnglish
                    ? "Interested and experimenting"
                    : "علاقه‌مند و در حال تجربه"}
                </small>
              </div>

              <div className="skill-item">
                <span>03</span>
                <p>Photoshop & Poster Design</p>
                <small>
                  {isEnglish
                    ? "Above-average proficiency"
                    : "سطح متوسط رو به بالا"}
                </small>
              </div>

              <div className="skill-item">
                <span>04</span>
                <p>Git & GitHub</p>
                <small>
                  {isEnglish ? "Currently learning" : "در حال یادگیری"}
                </small>
              </div>

              <div className="skill-item">
                <span>05</span>
                <p>English</p>
                <small>
                  {isEnglish
                    ? "Good understanding & comprehension"
                    : "آشنایی و درک خوب"}
                </small>
              </div>

              <div className="skill-item">
                <span>06</span>
                <p>Arabic</p>
                <small>
                  {isEnglish
                    ? "Good understanding & comprehension"
                    : "آشنایی و درک خوب"}
                </small>
              </div>

              <div className="skill-item">
                <span>07</span>
                <p>ICDL & Digital Tools</p>
                <small>
                  {isEnglish
                    ? "Practical computer skills"
                    : "مهارت‌های کاربردی کامپیوتری"}
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <span>03</span>
              <h2>{isEnglish ? "Projects" : "پروژه‌ها"}</h2>
            </div>

            <p className="section-description">
              {isEnglish
                ? "My real projects will gradually be added here."
                : "پروژه‌های واقعی من به مرور اینجا اضافه می‌شن."}
            </p>

            <div className="projects">
              <div className="project">
                <div className="project-number">01</div>

                <div>
                  <p className="project-label">PERSONAL WEBSITE</p>

                  <h3>MmdMehdi</h3>

                  <p>
                    {isEnglish
                      ? "My personal website; a project that will grow alongside my learning and progress."
                      : "سایت شخصی من؛ پروژه‌ای که قرار است همراه با مسیر یادگیری و پیشرفتم رشد کند."}
                  </p>
                </div>

                <span className="project-status">
                  IN PROGRESS
                </span>
              </div>

              <div className="project">
                <div className="project-number">02</div>

                <div>
                  <p className="project-label">NEXT PROJECT</p>

                  <h3>Coming Soon</h3>

                  <p>
                    {isEnglish
                      ? "My next project will be here."
                      : "جای پروژه بعدی من اینجاست."}
                  </p>
                </div>

                <span className="project-status muted">
                  FUTURE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-content">
              <span>04 / CONTACT</span>

              <h2>
                {isEnglish ? "Let's stay in touch." : "در ارتباط باشیم."}
              </h2>

              <p>
                {isEnglish
                  ? "For contact, suggestions, or conversations about projects and technology, you can reach me through the following channels."
                  : "برای ارتباط، پیشنهاد یا صحبت درباره پروژه‌ها و تکنولوژی می‌تونی از راه‌های زیر با من در تماس باشی."}
              </p>

              <div className="contact-links">
                <a href="mailto:m6664683@gmail.com">
                  Email ↗
                </a>

                <a
                  href="https://github.com/mmd66646"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://t.me/AK477C4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <span>MmdMehdi.</span>

          <p>Keep learning. Keep building.</p>

          <small>© 2026 Mohammad Mahdi Motamedi</small>
        </div>
      </footer>
    </div>
  );
}

export default App;