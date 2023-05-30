import Header from "./components/Header/Header";
import UserCards from "./components/UserCards/UserCards";

import "./global.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <UserCards />
    </div>
  );
};

export default App;
