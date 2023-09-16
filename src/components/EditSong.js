import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditSong() {
  const navigate = useNavigate();
  const { id } = useParams();
  const songs = JSON.parse(localStorage.getItem("songs")) || [];
  const oldSong = songs.find((song) => song.id === Number(id));
  const [songData, setSongData] = useState(oldSong);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSongData({ ...songData, [name]: value });
  };

  const updateState = (event) => {
    event.preventDefault();

    const { songName, singer } = songData;

    if (songName === "" || undefined === songName) {
      alert("Must enter a song name!");
      return;
    } else if (singer === "" || undefined === singer) {
      alert("Must enter a singer name!");
      return;
    }

    const modifiedSongs = songs.map((song) => {
      if (song.id === Number(id)) {
        song.songName = songName;
        song.singer = singer;
      }

      return song;
    });

    localStorage.setItem("songs", JSON.stringify(modifiedSongs));
    navigate("/song");
  };

  return (
    <form className="d-flex justify-content-center" onSubmit={updateState}>
      <div className="card" style={{ width: "30%" }}>
        <div className="card-header">
          <h3 className="text-success">Edit Song</h3>
        </div>
        <div className="card-body">
          <input type="number" value={songData.id} hidden readOnly />
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

export default EditSong;
