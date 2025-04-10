import HabitItem from './HabitItem';

function HabitList({ habits, toggleHabit, deleteHabit, editHabit }) {
  return (
    <div style={styles.container}>
      {habits.length === 0 ? (
        <p style={styles.empty}>🚀 Start by adding a habit to track</p>
      ) : (
        habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            toggleHabit={toggleHabit}
            deleteHabit={deleteHabit}
            editHabit={editHabit}
          />
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '4rem',
    animation: 'fadeIn 0.5s',
  },
  empty: {
    textAlign: 'center',
    color: '#aaa',
    fontStyle: 'italic',
    marginTop: '2rem',
  },
};

export default HabitList;
