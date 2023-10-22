import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="aya.png" alt="Ayana Basha" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Ayana Basha</h1>
      <p>
        I am a Software Engineering Student at Haramaya Unversity, am passionate
        about Web development and Web design.
      </p>
    </div>
  );
}

function SkillList() {
  const ski = [skills];
  // const numskil = ski.length;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
      {/* <Skill skill="react Js" emoji=" 👌" color="blue" />
      <Skill skill="Node JS" emoji=" 😊" color="green" />
      <Skill skill="Flutter" emoji=" 💪" color="violet" />
      <Skill skill="WordPress" emoji=" ✌️" color="orange" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      {" "}
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "💪"}
        {skillObj.level === "intermidate" && "🤏"}
        {skillObj.level === "advanced" && "✌️"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
