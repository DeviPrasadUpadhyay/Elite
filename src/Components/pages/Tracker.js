import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CircularProgress from './Circular_progress';
import './ProgressRow.css';
import { Typography, Card, CardContent } from "@mui/material";

const NavbarContainer = styled(animated.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2937;
  padding: 10px;
`;

const NavButton = styled(animated.button)`
  padding: 10px 20px;
  border: 2px solid transparent;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;

const TrackButton = styled(NavButton)`
  color: #ffffff;
  background-color: #256d5c;
  border-color: #256d5c;
`;

const LoginButton = styled(NavButton)`
  color: #ffffff;
  background-color: #ca3e47;
  border-color: #ca3e47;
`;

const ProgressRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AddButton = styled.button`
  padding: 10px;
  font-size: 24px;
  background-color: #1f2937;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
`;

const CardContainer = styled(Card)`
  padding: 0;
  margin: 0;
  width: 22rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`;

const TrackerContainer = styled.div`
  /* Add any additional styles for the Tracker container */
`;

const Tracker = () => {
  const buttonAnimationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const containerAnimationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const INIT_DATA = [
    { id: "1", currentTime: "03:00:34", totalTime: "120:00:00", habitName: "GYM" },
    { id: "2", currentTime: "10:00:34", totalTime: "120:00:00", habitName: "Coding" },
    { id: "3", currentTime: "00:00:03", totalTime: "00:00:07", habitName: "Tracker" },
    { id: "4", currentTime: "00:01:00", totalTime: "02:00:00", habitName: "Power" }
  ];

  const [data, setData] = useState(INIT_DATA);

  const ProgressRow = ({ progressData, componentsPerRow }) => {
    const numRows = Math.ceil(progressData.length / componentsPerRow);

    const getComponentsForRow = (rowIndex) => {
      const startIndex = rowIndex * componentsPerRow;
      const endIndex = Math.min(startIndex + componentsPerRow, progressData.length);

      return progressData.slice(startIndex, endIndex).map((item) => (
        <CircularProgress
          key={item.id}
          currentTime={item.currentTime}
          totalTime={item.totalTime}
          habitName={item.habitName}
        />
      ));
    };

    return (
      <ProgressRowContainer>
        {[...Array(numRows)].map((_, rowIndex) => (
          <div className="progress-row" key={rowIndex}>
            {getComponentsForRow(rowIndex)}
          </div>
        ))}
      </ProgressRowContainer>
    );
  };

  const [showForm, setShowForm] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [totalTime, setTotalTime] = useState("");

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleHabitNameChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleCurrentTimeChange = (e) => {
    setCurrentTime(e.target.value);
  };

  const handleTotalTimeChange = (e) => {
    setTotalTime(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: String(data.length + 1),
      habitName,
      currentTime,
      totalTime,
    };

    setData((prevData) => [...prevData, newItem]);

    setHabitName("");
    setCurrentTime("");
    setTotalTime("");
    setShowForm(false);
  };

  return (
    <TrackerContainer>
      <NavbarContainer style={containerAnimationProps}>
        <div>
          <TrackButton style={buttonAnimationProps}>Track</TrackButton>
          <NavButton style={buttonAnimationProps}>Visualize</NavButton>
        </div>
        <LoginButton style={buttonAnimationProps}>Login</LoginButton>
      </NavbarContainer>

      <ProgressRow progressData={data} componentsPerRow={3} />

      {showForm ? (
        <CardContainer>
          <CardContent>
            <FormContainer onSubmit={handleFormSubmit}>
              <Input
                type="text"
                placeholder="Habit Name"
                value={habitName}
                onChange={handleHabitNameChange}
              />
              <Input
                type="text"
                placeholder="Current Time"
                value={currentTime}
                onChange={handleCurrentTimeChange}
              />
              <Input
                type="text"
                placeholder="Total Time"
                value={totalTime}
                onChange={handleTotalTimeChange}
              />
              <button type="submit">Add</button>
            </FormContainer>
          </CardContent>
        </CardContainer>
      ) : (
        <AddButton onClick={toggleForm}>+</AddButton>
      )}
    </TrackerContainer>
  );
};

export default Tracker;
