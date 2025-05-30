// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BACKEND_URL = 'https://6a785d9a-fa58-4020-8976-fa8ba6aac527-00-13yhiqal6rs6t.sisko.replit.dev/api/forms';

// const DynamicFormPage = () => {
//   const [forms, setForms] = useState([]);

//   useEffect(() => {
//     const fetchForms = async () => {
//       try {
//         const res = await axios.get(BACKEND_URL);
//         setForms(res.data);
//       } catch (err) {
//         console.error('Failed to fetch forms:', err);
//       }
//     };
//     fetchForms();
//   }, []);

//   const handleChange = (index, field, value) => {
//     const updatedForms = [...forms];
//     updatedForms[index][field] = value;
//     setForms(updatedForms);
//   };

//   const handleAddForm = () => {
//     setForms([...forms, { appName: '', packageName: '', url: '', status: false }]);
//   };

//   const handleDeleteForm = async (index) => {
//     const form = forms[index];
//     if (form._id) {
//       try {
//         await axios.delete(`${BACKEND_URL}/${form._id}`);
//       } catch (err) {
//         console.error('Error deleting form:', err);
//       }
//     }
//     setForms(forms.filter((_, i) => i !== index));
//   };

//   const handleClearForm = async (index) => {
//     const clearedForm = { appName: '', packageName: '', url: '', status: false };
//     const updatedForms = [...forms];
//     updatedForms[index] = { ...updatedForms[index], ...clearedForm };
//     setForms(updatedForms);

//     if (updatedForms[index]._id) {
//       try {
//         await axios.put(`${BACKEND_URL}/${updatedForms[index]._id}`, clearedForm);
//       } catch (err) {
//         console.error('Failed to clear form in DB:', err);
//       }
//     }
//   };

//   const handleSubmit = async (index) => {
//     const form = forms[index];

//     if (!form.appName.trim() || !form.packageName.trim() || !form.url.trim()) {
//       alert('⚠️ All fields (App Name, Package Name, App URL) are required!');
//       return;
//     }

//     try {
//       if (form._id) {
//         await axios.put(`${BACKEND_URL}/${form._id}`, form);
//       } else {
//         const res = await axios.post(BACKEND_URL, form);
//         const updatedForms = [...forms];
//         updatedForms[index] = res.data;
//         setForms(updatedForms);
//       }
//       alert('✅ Form saved!');
//     } catch (err) {
//       console.error(err);
//       alert('❌ Submission failed.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
//       <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
//         Dynamic App Info Forms
//       </h2>

//       {forms.map((form, index) => (
//         <div
//           key={form._id || index}
//           style={{
//             background: '#f9f9f9',
//             padding: '20px',
//             marginBottom: '16px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//           }}
//         >
//           <input
//             type="text"
//             placeholder="App Name"
//             value={form.appName}
//             onChange={(e) => handleChange(index, 'appName', e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
//           />
//           <input
//             type="text"
//             placeholder="Package Name"
//             value={form.packageName}
//             onChange={(e) => handleChange(index, 'packageName', e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
//           />
//           <input
//             type="url"
//             placeholder="App URL"
//             value={form.url}
//             onChange={(e) => handleChange(index, 'url', e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
//           />
//           <label style={{ display: 'block', marginBottom: '8px' }}>
//             <input
//               type="checkbox"
//               checked={form.status}
//               onChange={(e) => handleChange(index, 'status', e.target.checked)}
//             />{' '}
//             Status (On/Off)
//           </label>
//           <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//             <button onClick={() => handleSubmit(index)}>💾 Submit</button>
//             <button onClick={() => handleClearForm(index)}>🧹 Clear</button>
//             <button onClick={() => handleDeleteForm(index)}>🗑️ Delete</button>
//           </div>
//         </div>
//       ))}

//       <button onClick={handleAddForm} style={{ marginTop: '20px' }}>
//         ➕ Add New Form
//       </button>
//     </div>
//   );
// };

// export default DynamicFormPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = 'https://6a785d9a-fa58-4020-8976-fa8ba6aac527-00-13yhiqal6rs6t.sisko.replit.dev/api/forms'; // <-- replace with your real backend

const DynamicFormPage = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        setForms(res.data);
      } catch (err) {
        console.error('Failed to fetch forms:', err);
      }
    };
    fetchForms();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  const handleAddForm = () => {
    setForms([...forms, { appName: '', packageName: '', url: '', status: false }]);
  };

  const handleDeleteForm = async (index) => {
    const form = forms[index];
    if (form._id) {
      try {
        await axios.delete(`${BACKEND_URL}/${form._id}`);
      } catch (err) {
        console.error('Error deleting form:', err);
      }
    }
    setForms(forms.filter((_, i) => i !== index));
  };

  const handleClearForm = async (index) => {
    const clearedForm = { appName: '', packageName: '', url: '', status: false };
    const updatedForms = [...forms];
    updatedForms[index] = { ...updatedForms[index], ...clearedForm };
    setForms(updatedForms);

    if (updatedForms[index]._id) {
      try {
        await axios.put(`${BACKEND_URL}/${updatedForms[index]._id}`, clearedForm);
      } catch (err) {
        console.error('Failed to clear form in DB:', err);
      }
    }
  };

  const handleSubmit = async (index) => {
    const form = forms[index];

    if (!form.appName.trim() || !form.packageName.trim() || !form.url.trim()) {
      alert('⚠️ All fields (App Name, Package Name, App URL) are required!');
      return;
    }

    try {
      if (form._id) {
        await axios.put(`${BACKEND_URL}/${form._id}`, form);
      } else {
        const res = await axios.post(BACKEND_URL, form);
        const updatedForms = [...forms];
        updatedForms[index] = res.data;
        setForms(updatedForms);
      }
      alert('✅ Form saved!');
    } catch (err) {
      console.error(err);
      alert('❌ Submission failed.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Dynamic App Info Forms
      </h2>

      {forms.map((form, index) => (
        <div
          key={form._id || index}
          style={{
            background: '#f9f9f9',
            padding: '20px',
            marginBottom: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <input
            type="text"
            placeholder="App Name"
            value={form.appName}
            onChange={(e) => handleChange(index, 'appName', e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
          />
          <input
            type="text"
            placeholder="Package Name"
            value={form.packageName}
            onChange={(e) => handleChange(index, 'packageName', e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
          />
          <input
            type="url"
            placeholder="App URL"
            value={form.url}
            onChange={(e) => handleChange(index, 'url', e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '8px' }}
          />
          <label style={{ display: 'block', marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={form.status}
              onChange={(e) => handleChange(index, 'status', e.target.checked)}
            />{' '}
            Status (On/Off)
          </label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={() => handleSubmit(index)}>💾 Submit</button>
            <button onClick={() => handleClearForm(index)}>🧹 Clear</button>
            <button onClick={() => handleDeleteForm(index)}>🗑️ Delete</button>
          </div>
        </div>
      ))}

      <button onClick={handleAddForm} style={{ marginTop: '20px' }}>
        ➕ Add New Form
      </button>
    </div>
  );
};

export default DynamicFormPage;
