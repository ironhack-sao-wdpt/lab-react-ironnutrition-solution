import { useState } from 'react';

function AddFoodForm(props) {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
  });

  function handleChange(event) {
    const clone = { ...newFood };
    clone[event.target.name] = event.target.value;
    setNewFood(clone);
  }

  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input
            name="calories"
            className="input"
            type="text"
            placeholder="Calories"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            name="image"
            className="input"
            type="text"
            placeholder="Image url"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={() => props.onSubmitNewFood(newFood)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddFoodForm;
