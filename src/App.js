// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Project from "./pages/Project";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
