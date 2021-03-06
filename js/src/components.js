var Box  = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
          {this.props.children}
      </div>
    );
  }
});
var Container = React.createClass({
  render: function () {
    return (
      <Box>
        <article id="left-container" style={{width: 100 + '%'}}>
        </article>
        <aside style={{width: 200 + 'px'}}>Right</aside>
      </Box>
    );
  }
});

var Header = React.createClass({
  render: function () {
    return (
      <Box className="nav-menu">
        <span className="nav-item-1">Logo?</span>
        <span className="nav-item-1">Now Playing</span>
        <span className="nav-item-1">Library</span>
        <span className="nav-item-1">Settings</span>
        <span className="nav-item-8"></span>
        <div className="nav-item-8 search-box">
          <input type="text" name="search-box" />
        </div>
      </Box>
    );
  }
});

var Footer = React.createClass({
  render: function(){
    return (
      <Box className="player">
        <div className="player-left in-flex">
          <img className="img-small player-album" src="https://duckduckgo.com/i/860ecea4.jpg"/>
          <div className="track-title scroll-left">
            <p>Foo Fightres - This is the last song</p>
          </div>
        </div>

        <div className="player-controls in-flex">
          <div className="player-btn prv-button"></div>
          <div className="player-btn play-button large-button"></div>
          <div className="player-btn nxt-button"></div>
        </div>
        <div className="player-right in-flex">
          <span className="timer">02:15/05:14</span>
          <input type="range" className="volume"/>
        </div>
      </Box>
    );
  }
});

var Album = React.createClass({
  render: function(){
    return (
      <Box className="float album">
        <div className="overlay">
          <div className="player-btn play-button"></div>
        </div>
        <img className="img-large" src={this.props.data.imgUrl}/>
        <div className="name link">{this.props.data.albumName}</div>
        <div className="band link">{this.props.data.bandName}</div>
      </Box>
    );
  }
});

var Albums = React.createClass({
  render: function(){
    var albums = this.props.data.map(function(album) {
      return (
          <Album data={album} />
        );
      });
    return (
      <Box className="clearfix" >
        {albums}
      </Box>
    );
  }
});

var albumsModel = [
  {id: 1, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 2, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 3, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 4, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 5, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 6, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 7, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"},
  {id: 8, bandName: "Band Name", albumName: "Album Name", imgUrl: "https://duckduckgo.com/i/860ecea4.jpg"}
];

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
ReactDOM.render(
  <Albums data={albumsModel}/>,
  document.getElementById('left-container')
);
