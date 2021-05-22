import React,{useEffect,useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from './images/Logo.png';

const App = () =>{

  const [data,setData] = useState([]);

  const getCovidData = async()=>{
    try{
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      setData(actualData.statewise[0]);
    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getCovidData();
  },[]);



  return (
    <div className="Container">
   
      <Navbar expand="lg" className="Navbar">
  <Container>
   <img src={Logo} style={{width:"80px"}}/> <Navbar.Brand href="#">Kasturiya CovidTrackerApp</Navbar.Brand>
  </Container>
</Navbar>

      
<main>
<section className="heading">
<p id="blink">&#128308; <span style={{color:"white"}}>Live</span></p>
  <h2>Covid 19 Tracker</h2>
</section>
<div className="parents">

<div className="child">

<h4>Country</h4>
<p>India</p>
</div>
<div className="child">
<h4>Recovered</h4>
<p>{data.recovered}</p>
</div>
<div className="child">
<h4>Confirmed</h4>
<p>{data.confirmed}</p>
</div>
<div className="child">
<h4>Deaths</h4>
<p>   {data.deaths}</p>
</div>
<div className="child">
<h4>Active</h4>
<p>  {data.active}</p>
</div>
<div className="child">
<h4>Last Updated</h4>
<p> {data.lastupdatedtime}</p>
</div>

</div>


</main>
     
     
    <footer className="footer">
   
         <p>&#169; 2021 aakashkasturiya@gmail.com</p>

    </footer>
    
    </div>
  );
}

export default App;
