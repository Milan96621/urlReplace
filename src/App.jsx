import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicFormPage from '../Component/DynamicFormPage';
import { Route, Routes } from 'react-router';

const BACKEND_URL = 'http://localhost:5000/api/check';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<DynamicFormPage />}/>
      </Routes>
    </>
  );
}

export default App; 

