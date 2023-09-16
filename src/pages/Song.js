import playlist from "../songs.js";
import Download from "../Download";
import { useState } from "react";

const Song = () => {
  const songs = JSON.parse(localStorage.getItem("songs")) || playlist;

  const [songArr, setSongArr] = useState(songs);

  const removeSong = (id) => {
    setSongArr((current) =>
      current.filter((song) => {
        return song.id !== id;
      })
    );
    console.info("Song Page: " + [...songArr]);

    localStorage.setItem("songs", JSON.stringify(songArr));
  };

  return (
    <div>
      <div
        className="d-flex justify-content-end"
        style={{ paddingRight: "16%" }}
      >
        <a href="song/create" className="btn btn-success mt-2">
          Add
        </a>
        {/* <Download data={[...songArr]} /> */}
      </div>
      <div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Song</th>
              <th scope="col">Singer</th>
            </tr>
          </thead>
          <tbody>
            {songArr &&
              songArr.map((item) => (
                <tr key={item.id}>
                  <td>
                    <a
                      href={`song/edit/${item.id}`}
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => removeSong(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>{item.songName}</td>
                  <td>{item.singer}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Song;
