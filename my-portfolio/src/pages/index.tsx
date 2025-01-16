import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
const Home = () => {
  return(
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default Home;