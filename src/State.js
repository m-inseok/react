import React, { useState } from "react";
import styled from "styled-components";

const WebContainer = styled.div`
  width: 100.0625rem;
  height: 8.0625rem;
  flex-shrink: 0;
  background: #DD7575;
`;

const WebText = styled.h1`
  color: #010101;
  font-family: Inter;
  font-size: 6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
`;

function InputTodo ({ onAdd }) {
  const [plan, setPlan] = useState('');

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  const handleAdd = () => {
    onAdd(plan);
    setPlan('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="오늘의 할일을 입력하세요"
        value={plan}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>등록하기</button>
    </div>
  );
}

function ListView({ plans }) {
  return (
    <ul>
      {plans.map((plan, index) => (
        <li key={index}>{plan}</li>
      ))}
    </ul>
  );
}

function TodoList() {
  const [plans, setPlans] = useState([]);

  const handleAddPlan = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  return (
    <WebContainer>
      <WebText>TodoList {new Date().toLocaleDateString()}</WebText>
      <InputTodo onAdd={handleAddPlan} />
      <ListView plans={plans} />
    </WebContainer>
  );
}

export default TodoList;
