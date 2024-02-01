import { Container } from "./components";
import { Series, Details } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Series />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Container>
  );
};

export default App;
