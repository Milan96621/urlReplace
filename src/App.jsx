import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicFormPage from '../Component/DynamicFormPage';
import { Route, Routes } from 'react-router';

const BACKEND_URL = 'https://6a785d9a-fa58-4020-8976-fa8ba6aac527-00-13yhiqal6rs6t.sisko.replit.dev/api/url';

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
