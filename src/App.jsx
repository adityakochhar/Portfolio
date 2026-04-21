import PortfolioLayout from "./components/layout/PortfolioLayout";
import {
  achievements,
  contactLinks,
  projects,
  skills,
} from "./data/portfolioData";

function App() {
  return (
    <PortfolioLayout
      skills={skills}
      projects={projects}
      achievements={achievements}
      contactLinks={contactLinks}
    />
  );
}

export default App;
