import React from 'react';
import './App.css';

// import firebase from './firebase';
import ExercisesList from './components/exercises-list';
import AddExerciseEntryForm from './components/add-exercise-entry-form.jsx';

// firebase.firestore().collection('exercises').add({
//   title: 'Toe lifts',
//   duration: 45
// })

function App() {
  return (
    <div className="App">
      <h1>Paths For All</h1>
      <ExercisesList/>
      <AddExerciseEntryForm/>
    </div>
  );
}

export default App;
