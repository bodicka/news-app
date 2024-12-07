import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDark } = useTheme();
  return (
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
  );
};

export default App;
