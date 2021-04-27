import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import content from "./content.json";

function App() {
  return (
    <div className="container">
      <Header headerStyle="header" />
      <Section
        sectionStyle="section"
        media={content.map((elem, index) => {
          return (
            <div className="subSection">
              <h1>{elem.category}</h1>
              <div className="imageBox">
                {elem.images.map((link, index) => {
                  return <img className="image" src={link} alt="" />;
                })}
              </div>
            </div>
          );
        })}
      />
    </div>
  );
}

export default App;
