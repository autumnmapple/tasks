import React, { useState } from "react";
import "./ParentComponent.css";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleShowCustomCard = () => {
    if (name !== "" && description !== "" && date !== "") {
      const newInput = {
        name: name,
        description: description,
        date: new Date(date).toLocaleDateString(),
      };

      setInputs([...inputs, newInput]);
      setName("");
      setDescription("");
      setDate("");
    }
  };
  
  return (
    <div className="new-element" onMouseDown={() => disableMapDragging(props.map)} onMouseUp={() => enableMapDragging(props.map)}>
      <div className="new-element__controls">
        <div className="new-element__control">
          <label>название</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="new-element__control">
          <label>описание</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="new-element__control">
          <label>дата</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-12-31"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="new-element__actions">
          <button onClick={handleShowCustomCard}>Добавить</button>
        </div>
        {inputs.map((input, index) => (
          <ChildComponent
            key={index}
            name={input.name}
            description={input.description}
            date={input.date}
          />
        ))}
      </div>
    </div>
  );
}
export default ParentComponent;
