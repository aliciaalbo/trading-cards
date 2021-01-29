"use strict";

function Homepage() {
  return (
    <div>
      <p>Welcome, user!</p>
      <p><a href="/cards">See Our Cards</a></p>
      <img src = "/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
