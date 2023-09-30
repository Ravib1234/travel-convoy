import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <ul>
          <li>
            <h1>Home</h1>
          </li>
          <li>
            <h1>Destinations</h1>
          </li>
          <li>
            <h1>Bookings </h1>
          </li>
          <li>
            <h1>Contact US</h1>
          </li>
          <li>
            <h1>Blog</h1>
          </li>
        </ul>
      </div>

      <div className="First-Sec">
        <h1>A One Stop Travel Destination for all of your travel need</h1>
      </div>

      <div className="Second-Sec">
        <h1>Destinations</h1>
        <div className="Third-Sec">
          <h1>Contact US</h1>
          Username : <input type="text" />
          <br />
          Lastame : &nbsp;&nbsp; <input type="text" />
          <br />
          Enter Email : <input type="text" /> <br />
          <br />
          <button className="submitbtn">Submit</button>
        </div>
      </div>
      <div className="Third-Sec">
        <h1>Contact US</h1>
        Username : <input type="text" />
        <br />
        Lastame : &nbsp;&nbsp; <input type="text" />
        <br />
        Enter Email : <input type="text" /> <br />
        <br />
        <button className="submitbtn">Submit</button>
      </div>

      <div className="footer">
        <ul>
          <li>
            <h2>Home</h2>
          </li>
          <li>
            <h2>Destinations</h2>
          </li>
          <li>
            <h2>Contact US</h2>
          </li>
          <li>
            <h2>Blog</h2>
          </li>
        </ul>
        <div>
          <h2>Contact Number</h2>
          <h3>9848473840 </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
