import React , { useEffect, useState } from "react";
import "./styles.css";

// LeetCode Stats Component
const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/anish_lakhkar"
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p>Loading LeetCode stats...</p>;
  }

  return (
    <div className="leetcode-stats">
      <h2>📚 LeetCode Stats</h2>
      <p>Total Problems Solved: {stats.totalSolved}</p>
      <p>Acceptance Rate: {stats.acceptanceRate}%</p>
      <p>Ranking: {stats.ranking}</p>
      {/* Add more stats as needed */}
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>👋 Hi, I'm <span>Anish Lakhkar</span></h1>
        <p>🎓 B.Tech in Artificial Intelligence and Data Science | Vishwakarma Institute of Technology, Pune</p>
        <p>🌟 Aspiring Data Scientist | AI Enthusiast | ML Engineer</p>
      </header>

      {/* Tech Stack */}
      <section className="tech-stack">
        <h2>🛠️ Tech Stack</h2>
        <div className="icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" title="TensorFlow" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" title="PyTorch" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" width="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" title="Linux" width="50" />
          <img src="https://newrelic.com/sites/default/files/styles/medium/public/quickstarts/images/icons/langchain-vectordb--logo.png?itok=3wd-XHaL" alt="Langchain" title="Langchain" width="50" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s" alt="AWS" title="AWS" width="50" />
          <img src="https://media.licdn.com/dms/image/v2/C5612AQGbh-2GzkdqAQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1590327785584?e=2147483647&v=beta&t=J_94telHC675IkwkENNV8mSvEwHtozclDrw2Lq2lIAI" alt="MLops" title="MLops" width="50" />
        </div>
      </section>

      {/* Highlighted Projects */}
      <section className="projects">
        <h2>🚀 Highlighted Projects</h2>
        <ul>
          <li>
            <strong><a href="https://github.com/anishlakhkar/AyurVedaAI">AyurVedaAI</a></strong>
            <p>The project integrates Ayurveda with AI by creating a conversational chatbot that provides personalized health advice through Prakruti analysis and retrieval-augmented generation using large language models.</p>
          </li>
          <li>
            <strong><a href="https://github.com/anishlakhkar/Graphical_Authentication_System">Graphical Authentication System</a></strong>
            <p>A web-based graphical password authentication system made using Flask. Different approaches were explored to improve system security.</p>
          </li>
          <li>
            <strong><a href="https://github.com/rohanlokhande2002/VisionVault">Image Retrieval with AWS</a></strong>
            <p>A Flask-based app leveraging AWS S3 and Rekognition to automate image sorting, improving efficiency by 80%.</p>
          </li>
          <li>
            <strong><a href="https://github.com/anishlakhkar/Multi-model-AI-Conversational-Chatbot">Multi-model AI Conversational Chatbot</a></strong>
            <p>A Visual Question Answering (VQA) system combining deep learning models to interpret images and answer user queries in natural language.</p>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>🏆 Experience</h2>
        <h3>Publications</h3>
        <ul>
          <li>Paper published at the International Conference on Data Science, Computation, and Security (IDSCS 2023).</li>
          <li>Paper accepted at the International Conference on Data Science and Artificial Intelligence (ICDSAI) 2024.</li>
        </ul>
        <h3>Extracurricular</h3>
        <ul>
          <li>Volunteer at Aatmabodh: Organized an initiative to teach elderly persons about new technologies, improving their digital literacy.</li>
        </ul>
      </section>

      {/* Connect With Me */}
      <section className="connect">
        <h2>📫 Connect With Me</h2>
        <div className="social-links">
          <a href="https://github.com/anishlakhkar" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" title="GitHub" width="40" />
          </a>
          <a href="https://www.linkedin.com/in/anish-lakhkar-93210b22b/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" title="LinkedIn" width="40" />
          </a>
          <a href="mailto:anishlakhkar66@gmail.com">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" title="Email" width="40" />
          </a>
          <a href="https://www.instagram.com/anish_lakhkar/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" title="Instagram" width="40" />
          </a>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts">
        <h2>✨ Fun Facts</h2>
        <ul>
          <li>🏎️ Passionate about Football, Cricket, and F1</li>
          <li>💡 Always learning and building impactful solutions!</li>
        </ul>
      </section>

      {/* GitHub Stats */}
      <section className="github-stats">
      <h2>📊 GitHub Stats</h2>
      <div className="stats">
       <a href="https://github.com/anishlakhkar">
      <img src="https://github-readme-stats.vercel.app/api?username=anishlakhkar&show_icons=true&theme=tokyonight" alt="GitHub Stats" />
       </a>
       <a href="https://github.com/anishlakhkar">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anishlakhkar&layout=compact&theme=dark" alt="Top Languages" />
    </a>
    <a href="https://github.com/anishlakhkar">
      <img src="https://streak-stats.demolab.com/?user=anishlakhkar&theme=merko" alt="GitHub Streak" />
    </a>
  </div>
      </section>

       {/* LeetCode Stats */}
       <section className="leetcode-stats">
        <LeetCodeStats />
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Anish Lakhkar</p>
      </footer>
    </div>
  );
};
//ansih

export default App;
