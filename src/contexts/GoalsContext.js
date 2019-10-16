import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const GoalsContext = createContext();

const GoalsContextProvider = ({ children }) => {
  const [goals, setGoals] = useState([
    { name: "Meditate", frequency: "everyday" }
  ]);

  const addGoal = name => {
    setGoals([...goals, { name, id: uuid() }]);
  };

  const removeGoal = id => {
    setGoals(goals.filter(goals => goals.id !== id));
  };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, removeGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

export default GoalsContextProvider;
