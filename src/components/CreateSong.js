import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateSong() {
  const navigate = useNavigate();
  const initialSong = { songName: "", singer: "" };
  const [songData, setSongData] = useState({ initialSong });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSongData({ ...songData, [name]: value });
    console.info(songData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { songName, singer } = songData;

    if (songName === "" || undefined === songName) {
      alert("Must enter a song name!");
      return;
    } else if (singer === "" || undefined === singer) {
      alert("Must enter a singer name!");
      return;
    }

    let nextId = 0;

    const songs = JSON.parse(localStorage.getItem("songs")) || [];
    nextId =
      songs.length > 0
        ? songs.length + 1
        : Math.floor(Math.random() * 10000 + 1);
    const newSong = {
      id: nextId,
      songName: songName,
      singer: singer,
    };

    localStorage.setItem("newSong", JSON.stringify(newSong));

    songs.push(newSong);

    localStorage.setItem("songs", JSON.stringify(songs));

    navigate("/song");
  };

  return (
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className="card" style={{ width: "30%" }}>
        <div className="card-header">
          <h3 className="text-success">Create New Song</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="songNameInput" className="d-flex align-items-start">
              Song name:
            </label>
            <input
              type="text"
              className="form-control"
              id="songNameInput"
              name="songName"
              value={songData.songName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="singerName" className="d-flex align-items-start">
              Singers name:
            </label>
            <input
              type="text"
              className="form-control"
              id="singerName"
              name="singer"
              value={songData.singer || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary col-md-3 mt-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateSong;
