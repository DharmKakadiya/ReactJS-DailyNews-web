
import './App.css';

import React, { Component } from 'react'
import Navbar from './conponents/Navbar';
import News from './conponents/News';
import {BrowserRouter,Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<News country="in" category="general"/>}/> 
            <Route exact path="/business" element={<News country="in" category="business"/>}/> 
            <Route exact path="/entertainment" element={<News country="in" category="entertainment"/>}/> 
            <Route exact path="/general" element={<News country="in" category="general"/>}/> 
            <Route exact path="/health" element={<News country="in" category="health"/>}/> 
            <Route exact path="/science" element={<News country="in" category="science"/>}/> 
            <Route exact path="/sports" element={<News country="in" category="sports"/>}/> 
            <Route exact path="/technology" element={<News country="in" category="technology"/>}/> 
        </Routes>
        </BrowserRouter> 
        {/* </Navbar> */}
      </div>
    )
  }
}
