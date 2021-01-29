"use strict";

function About() {
  return (
    <div>
      <p>Learn about our cards</p>
      <p><a href="/cards">About our cards</a></p>
      <img src = "/static/img/seedpy.jpg"></img>
    </div>
  );
}

ReactDOM.render(<About />, document.getElementById('my_choosing'));