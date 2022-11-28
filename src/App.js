import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/search/:searchTerm"
          element={
            <>
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
