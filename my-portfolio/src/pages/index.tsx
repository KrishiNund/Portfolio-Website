import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const Home = () => {
  return(
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  )
}

export default Home;