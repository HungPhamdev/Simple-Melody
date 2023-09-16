import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Song from "./pages/Song";
import CreateSong from "./components/CreateSong";
import EditSong from "./components/EditSong";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="song" element={<Song />} />
            <Route path="song/create" element={<CreateSong />} />
            <Route path="song/edit/:id" element={<EditSong />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
