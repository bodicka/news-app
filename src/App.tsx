import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
};

export default App;
