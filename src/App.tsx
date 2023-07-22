import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default App;
