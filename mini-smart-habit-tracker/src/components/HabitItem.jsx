import { useState } from 'react';  // Import useState from React

function HabitItem({ habit, toggleHabit, deleteHabit, editHabit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(habit.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      editHabit(habit.id, newTitle.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.title}>📝 {isEditing ? <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} /> : habit.title}</h3>
        <span style={styles.streak}>🔥 {habit.streak} day streak</span>
      </div>
      <div style={styles.buttons}>
        <button
          onClick={() => toggleHabit(habit.id)}
          style={{
            ...styles.toggleBtn,
            backgroundColor: habit.doneToday ? '#2ecc71' : '#e74c3c',
          }}
        >
          {habit.doneToday ? '✅' : '⭕'}
        </button>
        <button onClick={() => deleteHabit(habit.id)} style={styles.deleteBtn}>
          🗑️
        </button>
        <button onClick={handleEdit} style={styles.editBtn}>
          ✏️
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  title: {
    margin: 0,
    fontWeight: '500',
    color: '#333',
  },
  streak: {
    fontSize: '0.85rem',
    color: '#888',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  toggleBtn: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    minWidth: '70px',
    fontWeight: 'bold',
  },
  deleteBtn: {
    padding: '0.5rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  editBtn: {
    padding: '0.5rem',
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default HabitItem;
