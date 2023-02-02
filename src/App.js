import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Description from "./components/description";

const apiKey = 'https://api.nasa.gov/planetary/apod?api_key=bNm5ZAl7Q89hNWYOXijcax74LFQ2DE9IcYzKGKyc'

function App() {

  const [img, setImg] = useState('WIP')
  const [copyright, setCopyright] = useState('wip')
  const [date, setDate] = useState('wip')
  const [exp, setExp] = useState('wip') 
  const [title, setTitle] = useState('wip')

  
  const cleanDate = new Date(date)
  
  useEffect(() => {
    axios.get(apiKey)
      .then(res => {
        // console.log(res);
        setImg(res.data.url);
        setTitle(res.data.title);
        setExp(res.data.explanation)
        setDate(res.data.date)
        setCopyright(res.data.copyright)
      }).catch(err => console.log('something is broken'))
  }, [])

  return (
    <div className="App">
      <h1>NASA Pic of the Day!  🪐 🧑‍🚀 🔭</h1>
      <p>Image for {cleanDate.toLocaleDateString()}</p>
      <img className='image' src={img}/>
      <Description title={title} copyright={copyright} exp={exp} />
    </div>
  );
}

export default App;
