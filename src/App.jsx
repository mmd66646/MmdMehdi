import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("mmdmehdi-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("mmdmehdi-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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
            aria-label="بازگشت به ابتدای سایت"
          >
            MmdMehdi<span>.</span>
          </button>

          <nav
            id="main-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label="منوی اصلی"
          >
            <button onClick={() => scrollToSection("about")}>
              درباره من
            </button>

            <button onClick={() => scrollToSection("skills")}>
              مهارت‌ها
            </button>

            <button onClick={() => scrollToSection("projects")}>
              پروژه‌ها
            </button>

            <button onClick={() => scrollToSection("contact")}>
              ارتباط
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="تغییر تم"
              aria-pressed={!darkMode}
              title="تغییر حالت روشن و تاریک"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              title={menuOpen ? "بستن منو" : "باز کردن منو"}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <div className="status">
                <span></span>
                در حال یادگیری و ساختن
              </div>

              <p className="hero-label">
                COMPUTER ENGINEERING STUDENT
              </p>

              <h1>
                سلام، من
                <span>محمد مهدی</span>
                هستم.
              </h1>

              <p className="hero-subtitle">
                دانشجوی مهندسی کامپیوتر؛
                در مسیر یادگیری و ساختن چیزهای واقعی.
              </p>

              <p className="hero-description">
                به تکنولوژی، برنامه‌نویسی و ساختن چیزهای جدید علاقه دارم.
                هنوز اول مسیرم، اما دوست دارم یاد بگیرم، تجربه کنم و
                ایده‌هام رو کم‌کم به پروژه‌های واقعی تبدیل کنم.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  دیدن پروژه‌ها <span>↙</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("about")}
                >
                  بیشتر درباره من
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

        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span>01</span>
              <h2>درباره من</h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  سلام 👋 من محمد مهدی معتمدی هستم؛ دانشجوی مهندسی
                  کامپیوتر و به تکنولوژی، برنامه‌نویسی و ساختن چیزهای
                  جدید علاقه دارم 🙂.
                </p>
              </div>

              <div className="about-side">
                <p>
                  هنوز اول مسیرم، اما دوست دارم یاد بگیرم، تجربه کنم و
                  ایده‌هام رو کم‌کم به پروژه‌های واقعی تبدیل کنم.
                </p>

                <p>
                  این سایت هم بخشی از مسیر منه؛ جایی که قراره همراه با
                  یادگیری‌ها و پروژه‌های جدیدم رشد کنه.
                </p>

                <p className="signature">
                  دوستدار شما، محمد مهدی معتمدی ❤️
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-header">
              <span>02</span>
              <h2>مهارت‌ها و علایق</h2>
            </div>

            <p className="section-description">
              چیزهایی که با آن‌ها کار کرده‌ام یا در مسیر یادگیری و
              پیشرفتشان هستم.
            </p>

            <div className="skills-list">
              <div className="skill-item">
                <span>01</span>
                <p>Python</p>
                <small>در حال یادگیری و تجربه</small>
              </div>

              <div className="skill-item">
                <span>02</span>
                <p>AI & Automation</p>
                <small>علاقه‌مند و در حال تجربه</small>
              </div>

              <div className="skill-item">
                <span>03</span>
                <p>Photoshop & Poster Design</p>
                <small>سطح متوسط</small>
              </div>

              <div className="skill-item">
                <span>04</span>
                <p>Git & GitHub</p>
                <small>در حال یادگیری</small>
              </div>

              <div className="skill-item">
                <span>05</span>
                <p>English</p>
                <small>در مسیر یادگیری و استفاده</small>
              </div>

              <div className="skill-item">
                <span>06</span>
                <p>Arabic</p>
                <small>آشنایی و درک خوب</small>
              </div>

              <div className="skill-item">
                <span>07</span>
                <p>ICDL & Digital Tools</p>
                <small>مهارت‌های کاربردی کامپیوتری</small>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <span>03</span>
              <h2>پروژه‌ها</h2>
            </div>

            <p className="section-description">
              پروژه‌های واقعی من به مرور اینجا اضافه می‌شن.
            </p>

            <div className="projects">
              <div className="project">
                <div className="project-number">01</div>

                <div>
                  <p className="project-label">PERSONAL WEBSITE</p>

                  <h3>MmdMehdi</h3>

                  <p>
                    سایت شخصی من؛ پروژه‌ای که قرار است همراه با مسیر
                    یادگیری و پیشرفتم رشد کند.
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
                    جای پروژه بعدی من اینجاست.
                  </p>
                </div>

                <span className="project-status muted">
                  FUTURE
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-content">
              <span>04 / CONTACT</span>

              <h2>
                در ارتباط باشیم.
              </h2>

              <p>
                برای ارتباط، پیشنهاد یا صحبت درباره پروژه‌ها و
                تکنولوژی می‌تونی از راه‌های زیر با من در تماس باشی.
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