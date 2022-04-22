import { useState } from 'react';
import List from './List';
import Alert from './Alert';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(true);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msgn: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello from the console');
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. Eggs'
            value={name}
            onChange={() => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>Clear Items</button>
      </div>
    </section>
  );
}

export default App;
