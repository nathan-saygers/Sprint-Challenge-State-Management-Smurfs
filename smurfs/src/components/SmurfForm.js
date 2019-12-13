import React, { useState } from 'react';

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({})

  console.log(newSmurf);

  const onSubmit = event => {
    event.preventDefault();
    props.makeSmurf(newSmurf);
  }

  const handleChanges = event => {
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Smurf Name</label>
      <input type="text" name='name' onChange={handleChanges} value={newSmurf.name}/>
      <label htmlFor="height">Smurf Height</label>
      <input type="text" name='height' onChange={handleChanges} value={newSmurf.height}/>
      <label htmlFor="age">Smurf Age</label>
      <input type="text" name='age' onChange={handleChanges} value={newSmurf.age}/>
      <button type="submit">Make new smurf!</button>
    </form>
  )
}

export default SmurfForm;