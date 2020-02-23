import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<div style={{
  border:`solid 1px black`,
  maxwidth:100

}}>

<h1 className="title red">My title</h1>


<img src={"/imageInSrc.jpg"}></img>
<br/>


<img src={"/imageInPublic.jpg"}></img>

</div>
    </div>
  );
}

export default App;



