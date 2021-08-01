import {useState} from 'react';

//Import Components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import {projects} from '../json/projects.json';

//Project data constant
const projectData = projects;

const App = () => {
  //Set state
  const [skill, setSkill] = useState('All');
  const [data, setData] = useState(projectData);

  //Filter data by skill and update data state
  const filterBySkill = (skill) => {
    if (skill !== 'All' && skill !== '' && skill !== 'none') {
      const newData = projectData.filter(d => d.skills.includes(skill));
      setData(newData);
    } else {
      setData(projectData);
    }
  }

  //Function that handle change to skill that is selected
  const handleSkillChange = (skill) => {
    setSkill(skill);
    filterBySkill(skill);
  }
 
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects projects={data} handleSkillChange={handleSkillChange} skill={skill}/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
