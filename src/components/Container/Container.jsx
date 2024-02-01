import { BrowserRouter as Router } from "react-router-dom";

const Container = ({ children }) => {
  return (
    <Router>
      <main className=" max-w-[1440px] mx-auto px-4">{children}</main>
    </Router>
  );
};

export default Container;
