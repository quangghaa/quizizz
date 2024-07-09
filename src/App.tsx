import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { EnterCode } from "./pages/EnterCode";
import { Join } from "./pages/Join";
import { NoMatch } from "./pages/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EnterCode />} />
          <Route path="/join/:code?" element={<Join />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
