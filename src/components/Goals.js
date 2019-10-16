import React, { useContext, useState } from "react";
import { GoalsContext } from "../contexts/GoalsContext";

const Goals = () => {
  const { goals, addGoal, removeGoal } = useContext(GoalsContext);
  const [goalName, setGoalName] = useState("");

  const submitGoal = goalName => {
    if (goalName.length > 3) {
      addGoal(goalName);
      setGoalName("");
    }
  };

  return (
    <div>
      Goals
      {goals.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
          <span>
            <button onClick={() => removeGoal(id)}>Remove Goal</button>
          </span>
        </div>
      ))}
      <input
        type="text"
        placeholder="enter your goal"
        value={goalName}
        onChange={e => setGoalName(e.target.value)}
      />
      <button onClick={() => submitGoal(goalName)}> Add goal</button>
    </div>
  );
};

export default Goals;
