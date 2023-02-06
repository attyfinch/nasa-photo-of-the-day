import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Description from "./components/description";
import styled from 'styled-components';


const apiKey = 'https://api.nasa.gov/planetary/apod?api_key=bNm5ZAl7Q89hNWYOXijcax74LFQ2DE9IcYzKGKyc'

function App() {

  const [img, setImg] = useState('WIP')
  const [copyright, setCopyright] = useState('wip')
  const [date, setDate] = useState('wip')
  const [exp, setExp] = useState('wip') 
  const [title, setTitle] = useState('wip')
  
  const cleanDate = new Date(date)

  const StyledNasa = styled.div`
    display: Flex;
    padding: 2.5%;

  `
  
  useEffect(() => {
    axios.get(apiKey)
      .then(res => {
        console.log(res.data);
        setImg(res.data.url);
        setTitle(res.data.title);
        setExp(res.data.explanation)
        setDate(res.data.date)
        setCopyright(res.data.copyright)
      }).catch(err => console.log('something is broken'))
  }, [])

  return (
    <div>
    <h1>NASA Pic of the Day for {cleanDate.toLocaleDateString()} 🪐 🧑‍🚀 🔭</h1>
      <StyledNasa className="App">
        <img className='image' src={img}/>
        <Description title={title} copyright={copyright} exp={exp} />
      </StyledNasa>
    </div>
  );
}

export default App;
