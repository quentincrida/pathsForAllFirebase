import React, { useState, useEffect } from 'react';

import firebase from '../firebase';

function useExercises() {
   const [exercises, setExercises] = useState([])

   useEffect(() => {
     firebase
     .firestore()
     .collection('exercises')
     .onSnapshot((snapshot) => {
       const newExercises = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data()

     }))

     setExercises(newExercises)
     })

   }, [])

     return exercises;
}

const ExercisesList = () => {
  const exercises = useExercises();

  return (
    <div>
      <h2>Exercises List</h2>
      <div>
        <label>Sort By: </label>
          <select>
            <option>Exercise (shortest first)</option>
            <option>Exercise (Longest first)</option>
            <option>Disabled ---</option>
            <option>Title(a-z)</option>
            <option>Title(z-a)</option>

          </select>
      </div>
            <ol>
              {exercises.map((exercise) =>
                <li key={exercise.id}>
                  <div className="exercise-entry">
                  {exercise.title}
                    <code className="duration">{exercise.duration} minutes</code>
                  </div>
                  </li>
              )}
            </ol>

  </div>
  )
}


export default ExercisesList;
