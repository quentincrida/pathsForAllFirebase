import React from 'react';

const AddExerciseEntryForm = () => {

  return (
    <form>
    <h4>Add Exercise Entry</h4>
      <div>
        <label>Exercise</label>
        <input type="text"/>
      </div>

      <div>
        <label>Time</label>
        <input type="number"/>
      </div>
      <button>Add Exercise Entry</button>
    </form>
  )
}

export default AddExerciseEntryForm;
