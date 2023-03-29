import { useState } from 'react';
import './App.css'
import DisplayMeal from './components/DisplayMeal/DisplayMeal';
import Header from './components/Header/Header';

function App() {
  const [text, setText] = useState("");
  const getSearchText = (text) =>{
    const value = text.currentTarget.value;
    setText(value);
  }
  return (
    <div>
      <Header getSearchText={getSearchText}></Header>
      <DisplayMeal text={text}></DisplayMeal>
    </div>
  )
}

export default App;

