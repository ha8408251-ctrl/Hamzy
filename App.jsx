import React, { useState } from "react";

const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    color: "#6C63FF",
    description: "Algebra, geometry, statistics and problem solving.",
    topics: ["Algebra", "Geometry", "Statistics", "Trigonometry"],
  },
  {
    name: "English",
    icon: "📚",
    color: "#FF6584",
    description: "Grammar, comprehension, writing and literature.",
    topics: ["Grammar", "Comprehension", "Writing", "Literature"],
  },
  {
    name: "Kiswahili",
    icon: "📝",
    color: "#00B894",
    description: "Sarufi, fasihi, ufahamu na uandishi.",
    topics: ["Sarufi", "Fasihi", "Ufahamu", "Uandishi"],
  },
  {
    name: "Biology",
    icon: "🧬",
    color: "#20BF6B",
    description: "Cells, genetics, ecology and human biology.",
    topics: ["Cells", "Genetics", "Ecology", "Human Biology"],
  },
  {
    name: "Chemistry",
    icon: "⚗️",
    color: "#F39C12",
    description: "Atoms, reactions, organic chemistry and calculations.",
    topics: ["Atoms", "Reactions", "Organic Chemistry", "Calculations"],
  },
  {
    name: "Physics",
    icon: "⚡",
    color: "#3498DB",
    description: "Forces, energy, electricity and waves.",
    topics: ["Mechanics", "Electricity", "Waves", "Energy"],
  },
  {
    name: "Geography",
    icon: "🌍",
    color: "#9B59B6",
    description: "Physical and human geography of Kenya and the world.",
    topics: ["Physical Geography", "Human Geography", "Map Work", "Environment"],
  },
  {
    name: "History & Government",
    icon: "🏛️",
    color: "#E67E22",
    description: "Kenyan history, government and world history.",
    topics: ["Kenya", "Government", "World History", "Citizenship"],
  },
  {
    name: "Computer Studies",
    icon: "💻",
    color: "#2D98DA",
    description: "Computer systems, programming and information technology.",
    topics: ["Hardware", "Software", "Programming", "Networks"],
  },
];

const questions = [
  {
    subject: "Mathematics",
    question: "If 3x + 5 = 20, what is the value of x?",
    answer: "5",
  },
  {
    subject: "Biology",
    question: "What is the basic structural and functional unit of life?",
    answer: "The cell",
  },
  {
    subject: "Physics",
    question: "What is the SI unit of force?",
    answer: "Newton",
  },
  {
    subject: "Chemistry",
    question: "What is the chemical symbol for sodium?",
    answer: "Na",
  },
  {
    subject: "Geography",
    question: "What is the process by which water changes from liquid to gas?",
    answer: "Evaporation",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [search, setSearch] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openSubject = (subject) => {
    setSelectedSubject(subject);
    setPage("subject");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkAnswer = () => {
    setShowAnswer(true);

    if (
      answer.trim().toLowerCase() ===
      questions[questionIndex].answer.toLowerCase()
    ) {
      setCompleted((current) => current + 1);
    }
  };

  const nextQuestion = () => {
    setQuestionIndex((current) => (current + 1) % questions.length);
    setAnswer("");
    setShowAnswer(false);
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <button className="logo-button" onClick={() => goTo("home")}>
          <span className="logo-icon">H</span>
          <span>Hamzy</span>
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("subjects")}>Subjects</button>
          <button onClick={() => goTo("practice")}>Practice</button>
          <button onClick={() => goTo("progress")}>Progress</button>
        </nav>
      </header>

      <main>
        {page === "home" && (
          <section className="home-page">
            <div className="hero">
              <div className="hero-text">
                <div className="welcome-pill">
                  🇰🇪 Made for KCSE students
                </div>

                <h1>
                  Study smarter.
                  <br />
                  <span>Go further.</span>
                </h1>

                <p>
                  Hamzy is your simple KCSE study companion. Explore subjects,
                  practise questions and keep track of your learning.
                </p>

                <div className="hero-buttons">
                <button
  className="secondary-button"
  onClick={() => window.open("https://chatgpt.com/", "_blank")}
>
  🤖 Ask ChatGPT
</button>
                    
                    
                  
                  
                  

                  <button
                    className="secondary-button"
                    onClick={() => goTo("practice")}
                  >
                    Start Practising
                  </button>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-top">
                  <span>📖</span>
                  <span>KCSE STUDY</span>
                </div>

                <div className="hero-score">
                  <strong>Learn.</strong>
                  <strong>Practice.</strong>
                  <strong>Improve.</strong>
                </div>

                <div className="mini-progress">
                  <div></div>
                </div>

                <p>Your journey starts here.</p>
              </div>
            </div>

            <div className="section-heading">
              <p className="small-title">WHAT CAN YOU DO?</p>
              <h2>Everything in one place.</h2>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon purple">📚</div>
                <h3>Study Subjects</h3>
                <p>Quickly find your KCSE subjects and topics.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon blue">🎯</div>
                <h3>Practise</h3>
                <p>Test yourself with practice questions.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon green">📈</div>
                <h3>Track Progress</h3>
                <p>Keep track of questions you have completed.</p>
              </div>
            </div>

            <div className="daily-tip">
              <div className="tip-icon">💡</div>
              <div>
                <p className="small-title">TODAY'S STUDY TIP</p>
                <h3>Small progress every day adds up.</h3>
                <p>Choose one topic, focus, then test yourself.</p>
              </div>
            </div>
          </section>
        )}

        {page === "subjects" && (
          <section className="page-section">
            <div className="page-heading">
              <p className="small-title">KCSE CURRICULUM</p>
              <h1>Choose a subject</h1>
              <p>Select a subject to see its topics.</p>
            </div>

            <div className="search-box">
              <span>🔎</span>
              <input
                type="text"
                placeholder="Search subjects..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="subjects-grid">
              {filteredSubjects.map((subject) => (
                <button
                  className="subject-card"
                  key={subject.name}
                  onClick={() => openSubject(subject)}
                >
                  <div
                    className="subject-icon"
                    style={{ backgroundColor: subject.color }}
                  >
                    {subject.icon}
                  </div>

                  <div className="subject-info">
                    <h3>{subject.name}</h3>
                    <p>{subject.description}</p>
                    <span>View topics →</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {page === "subject" && selectedSubject && (
          <section className="page-section">
            <button className="back-button" onClick={() => goTo("subjects")}>
              ← Back to subjects
            </button>

            <div
              className="subject-banner"
              style={{ borderTopColor: selectedSubject.color }}
            >
              <div
                className="large-subject-icon"
                style={{ backgroundColor: selectedSubject.color }}
              >
                {selectedSubject.icon}
              </div>

              <div>
                <p className="small-title">KCSE SUBJECT</p>
                <h1>{selectedSubject.name}</h1>
                <p>{selectedSubject.description}</p>
              </div>
            </div>

            <h2 className="topics-title">Topics</h2>

            <div className="topics-grid">
              {selectedSubject.topics.map((topic, index) => (
                <button
                  className="topic-card"
                  key={topic}
                  onClick={() => goTo("practice")}
                >
                  <span className="topic-number">{index + 1}</span>

                  <div>
                    <h3>{topic}</h3>
                    <p>Start practising →</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {page === "practice" && (
          <section className="page-section">
            <div className="page-heading">
              <p className="small-title">PRACTICE MODE</p>
              <h1>Test yourself 🎯</h1>
              <p>Answer the question and check your result.</p>
            </div>

            <div className="practice-card">
              <div className="question-header">
                <span>
                  Question {questionIndex + 1} of {questions.length}
                </span>

                <span className="question-subject">
                  {questions[questionIndex].subject}
                </span>
              </div>

              <h2>{questions[questionIndex].question}</h2>

              <input
                className="answer-input"
                type="text"
                placeholder="Type your answer..."
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
              />

              {!showAnswer ? (
                <button
                  className="primary-button full-button"
                  onClick={checkAnswer}
                >
                  Check Answer
                </button>
              ) : (
                <div className="answer-result">
                  {answer.trim().toLowerCase() ===
                  questions[questionIndex].answer.toLowerCase() ? (
                    <>
                      <strong>✅ Correct!</strong>
                      <p>Great work. Keep going.</p>
                    </>
                  ) : (
                    <>
                      <strong>📘 Keep learning!</strong>
                      <p>
                        Expected answer:{" "}
                        <b>{questions[questionIndex].answer}</b>
                      </p>
                    </>
                  )}
                </div>
              )}

              <button className="next-button" onClick={nextQuestion}>
                Next Question →
              </button>
            </div>
          </section>
        )}

        {page === "progress" && (
          <section className="page-section">
            <div className="page-heading">
              <p className="small-title">YOUR JOURNEY</p>
              <h1>Your Progress 📈</h1>
              <p>Keep learning and watch your progress grow.</p>
            </div>

            <div className="progress-main-card">
              <div className="progress-circle">
                <strong>{completed}</strong>
                <span>questions</span>
              </div>

              <div>
                <h2>Questions completed</h2>
                <p>
                  Every question you complete is another step forward.
                </p>

                <button
                  className="primary-button"
                  onClick={() => goTo("practice")}
                >
                  Practise More →
                </button>
              </div>
            </div>

            <div className="progress-stats">
              <div>
                <span>📚</span>
                <strong>{subjects.length}</strong>
                <p>Subjects</p>
              </div>

              <div>
                <span>🎯</span>
                <strong>{questions.length}</strong>
                <p>Practice questions</p>
              </div>

              <div>
                <span>🔥</span>
                <strong>{completed > 0 ? "Active" : "Start"}</strong>
                <p>Study streak</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="footer-brand">
          <span className="logo-icon">H</span>
          <strong>Hamzy</strong>
        </div>

        <p>Study smarter. Go further. 🇰🇪</p>

        <div className="footer-links">
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("subjects")}>Subjects</button>
          <button onClick={() => goTo("practice")}>Practice</button>
          <button onClick={() => goTo("progress")}>Progress</button>
        </div>
      </footer>
    </div>
  );
}

export default App;