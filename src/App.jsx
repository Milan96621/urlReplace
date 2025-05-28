import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = 'https://6a785d9a-fa58-4020-8976-fa8ba6aac527-00-13yhiqal6rs6t.sisko.replit.dev/api/url';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const res = await axios.get(BACKEND_URL);
      const fetched = res.data;
      setUrls(fetched);
      if (fetched.length > 0) {
        setOriginalUrl(fetched[fetched.length - 1].originalUrl); // Set latest URL
      } else {
        setOriginalUrl('https://239.mark.qureka.com/intro/question');
      }
    } catch (error) {
      console.error('Failed to fetch URLs:', error);
    }
  };

  const addUrl = async () => {
    if (!originalUrl.trim()) return;
    try {
      await axios.post(BACKEND_URL, { originalUrl });
      fetchUrls();
    } catch (error) {
      console.error('Failed to add URL:', error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">URL Replacer CRUD App</h1>

        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter original URL"
          style={{
            width: '100%',
            height: '40px',
            fontSize: '16px',
            padding: '8px',
            marginBottom: '12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <button
          onClick={addUrl}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Replace & Save URL
        </button>
      </div>
    </div>
  );
}

export default App;
