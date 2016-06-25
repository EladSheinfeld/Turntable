var Container = React.createClass({
  render: function () {
    return (
      <div>
        <article id="left-container" style={{width: 100 + '%'}}>
        </article>
        <aside style={{width: 200 + 'px'}}>Right</aside>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function () {
    return (
      <div className="nav-menu">
        <span className="nav-item-1">Logo?</span>
        <span className="nav-item-1">Now Playing</span>
        <span className="nav-item-1">Library</span>
        <span className="nav-item-1">Settings</span>
        <span className="nav-item-8"></span>
        <div className="nav-item-8 search-box">
          <input type="text" name="search-box" />
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        play button and stuff
      </div>
    );
  }
});

var Album = React.createClass({
  render: function(){
    return (
      <div className="float album">
        <div className="overlay">
          <div className="play-button"></div>
        </div>
        <img src="https://duckduckgo.com/i/860ecea4.jpg"/>
        <div className="name">ALbum Name</div>
        <div className="band">Band Name</div>
      </div>
    );
  }
});

var Albums = React.createClass({
  render: function(){
    return (
      <div className="clearfix" >
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    );
  }
});

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
  <Albums />,
  document.getElementById('left-container')
);
