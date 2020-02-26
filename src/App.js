import React from "react";
import axios from "axios";
import SongsList from "./SongsList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      faves: [],
      newSong: "",
      artistName: "",
      deletelist: [],
      url: "",
      title: "",
      artist: "",
      elementPostion: ""
      //songs:songsDB.tracks.data
    };
  }

  componentDidMount() {
    const url = "https://api.deezer.com/playlist/908622995";
    axios({
      method: "get",
      url
    })
      .then(response => {
        console.log(response);

        this.setState({
          songs: response.data.tracks.data
        });

        console.log(this.state.songs);

        // this.setState({
        //     songs:this.state.songs.shift()
        //     })

        //     console.log(this.state.songs);
      })

      .catch(err => {
        console.log("ERROR: ", err);
      });
  }

  handleFaveToggle = e => {
    console.log(e);
    const faves = Array.prototype.slice.call(this.state.faves);
    console.log(faves);
    const songIndex = faves.indexOf(e);
    console.log(songIndex);

    if (songIndex === -1) {
      faves.push(e);
      console.log(faves);
    } else {
      faves.splice(songIndex, 1);
      console.log(faves);
    }

    this.setState({
      faves: faves
    });
  };

  onSongBoxchange = e => {
    console.log("On Text Change", e.target.value);

    this.setState({
      newSong: e.target.value
    });
  };

  onArtistBoxchange = e => {
    console.log("On Text Change", e.target.value);

    this.setState({
      artistName: e.target.value
    });
  };

  addFaveItem = e => {
    e.preventDefault();

    const faves = this.state.faves;
    const newSongArtist = {
      title: this.state.newSong,
      artist: { name: this.state.artistName },
      album: {
        cover_medium:
          "https://www.moonlighting.com/app/assets/images/empty_profile_180.jpg"
      }
    };
    if (newSongArtist.title === "" || newSongArtist.artist.name === "") {
      console.log("Cann't add empty ");
    } else {
      faves.push(newSongArtist);

      this.setState({
        faves: faves,
        newSong: "",
        artistName: ""
      });
    }
  };
  selectDeleteItem = e => {
    console.log(e);
    const deletelist = Array.prototype.slice.call(this.state.deletelist);
    console.log(deletelist);
    const songIndex = deletelist.indexOf(e);
    console.log(songIndex);

    if (songIndex === -1) {
      deletelist.push(e);
      console.log(deletelist);
    } else {
      deletelist.splice(songIndex, 1);
      console.log(deletelist);
    }

    this.setState({
      deletelist: deletelist
    });
  };

  deleteAllFave = e => {
    e.preventDefault();
    console.log(e);
    const deletelist = this.state.deletelist;
    console.log(deletelist);

    if (deletelist.length === 0) {
      this.setState({
        faves: []
      });
    } else {
      const faves = Array.prototype.slice.call(this.state.faves);
      console.log(faves);
      deletelist.forEach(element => {
        const songIndex = faves.indexOf(element);
        console.log(songIndex);
        return faves.splice(songIndex, 1);
      });

      this.setState({
        faves: faves,
        deletelist: []
      });
    }
  };

  editItemSelect = e => {
    const url = e.album.cover_medium;
    const title = e.title;
    const artist = e.artist.name;

    const elementPostion = this.state.faves.indexOf(e);

    console.log("you select ");
    console.log(title);

    this.setState({
      url: url,
      title: title,
      artist: artist,
      elementPostion: elementPostion
    });
  };

  onUrlBoxchange = e => {
    console.log("On Text Change", e.target.value);

    this.setState({
      url: e.target.value
    });
  };
  onSongBoxchange = e => {
    console.log("On Text Change", e.target.value);

    this.setState({
      title: e.target.value
    });
  };

  onArtistBoxchange = e => {
    console.log("On Text Change", e.target.value);

    this.setState({
      artist: e.target.value
    });
  };


  editItemClicked = (e) => {
    console.log(e);

    // const faves = this.state.faves;
    // const editSongArtist = {
    //   title: this.state.title,
    //   artist: { name: this.state.artist },
    //   album: { cover_medium: this.state.url }
    // };
    // faves.splice(this.state.elementPostion, 1, editSongArtist);

    // console.log(faves);

    // this.setState({
    //   faves: faves,
    //   url: "",
    //   title: "",
    //   artist: "",
    //   elementPostion: ""
    // });
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-log-4 col-md-4 col-sm-6 col-xs-12">
            <div className="sideone">
              <h1>Music App</h1>
              <h4>Welcom</h4>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* form start */}
              <div class="form-group">
                <label for="exampleInputEmail1">Song Title</label>
                <input
                  type="text"
                  placeholder="Enter Song Title"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Song Title"
                  value={this.state.newSong}
                  onChange={this.onSongBoxchange}
                />
                <label for="exampleInputPassword1">Artist Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter artist Name"
                  value={this.state.artistName}
                  onChange={this.onArtistBoxchange}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.addFaveItem}
              >
                Add To Favorite
              </button>

              {/* form END */}
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="col-log-8 col-md-8 col-sm-12 col-xs-12">
            <SongsList
              songs={this.state.songs}
              faves={this.state.faves}
              onfave={this.handleFaveToggle}
              ondelete={this.deleteAllFave}
              onselectdelete={this.selectDeleteItem}
              deletelist={this.state.deletelist}
              oneditItemSelect={this.editItemSelect}
              url={this.state.url}
              title={this.state.title}
              artist={this.state.artist}
              elementPostion={this.state.elementPostion}
              editItemClicked={(element)=>this.editItemClicked(element)}
              onUrlBoxchange={this.onUrlBoxchange}
              onSongBoxchange={this.onSongBoxchange}
              onArtistBoxchange={this.onArtistBoxchange}

            />
          </div>
        </div>
      </div>
    );
  }
}
