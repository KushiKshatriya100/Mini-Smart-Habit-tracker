import { useState } from 'react';

function HabitForm({ addHabit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addHabit(input.trim());
      setInput('');
    } else {
      alert('Please enter a valid habit!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="✨ Add a new habit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>➕</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    margin: '2rem auto',
    maxWidth: '600px',
    animation: 'fadeIn 0.5s',
  },
  input: {
    flex: 1,
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  button: {
    backgroundColor: '#5c6bc0',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease',
  },
};

export default HabitForm;
