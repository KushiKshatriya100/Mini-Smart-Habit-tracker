import { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

const defaultHabits = [
  { id: 1, title: 'Drink Water 💧', doneToday: false, streak: 0 },
  { id: 2, title: 'Exercise 🏋️‍♂️', doneToday: false, streak: 0 },
  { id: 3, title: 'Read a Book 📚', doneToday: false, streak: 0 },
  { id: 4, title: 'Meditate 🧘', doneToday: false, streak: 0 },
  { id: 5, title: 'Sleep Early 💤', doneToday: false, streak: 0 },
];

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('habits');
    return stored ? JSON.parse(stored) : defaultHabits;
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addHabit = (title) => {
    const newHabit = { id: Date.now(), title, doneToday: false, streak: 0 };
    setHabits([newHabit, ...habits]);
  };

  const toggleHabit = (id) => {
    const updated = habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            doneToday: !habit.doneToday,
            streak: habit.doneToday ? habit.streak - 1 : habit.streak + 1,
          }
        : habit
    );
    setHabits(updated);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const editHabit = (id, newTitle) => {
    const updated = habits.map((habit) =>
      habit.id === id ? { ...habit, title: newTitle } : habit
    );
    setHabits(updated);
  };

  return (
    <div>
      <h1>🌟 Mini Smart Habit Tracker</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={styles.toggleButton}
      >
        {darkMode ? '🌙' : '🌞'} Toggle Dark Mode
      </button>
      <HabitForm addHabit={addHabit} />
      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        editHabit={editHabit}
      />
    </div>
  );
}

const styles = {
  toggleButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default App;
