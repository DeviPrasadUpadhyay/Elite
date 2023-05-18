import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CircularProgress from './Circular_progress';

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


  const hours = 120;
  const totalHours = 360;
  const angle = 20;// Math.PI * 2 * 0.1;
  const color = 'green';

  return (
    <>
      <NavbarContainer style={containerAnimationProps}>
        <div>
          <TrackButton style={buttonAnimationProps}>Track</TrackButton>
          <NavButton style={buttonAnimationProps}>Visualize</NavButton>
        </div>
        <LoginButton style={buttonAnimationProps}>Login</LoginButton>
      </NavbarContainer>

      {/* <CircularProgress hours={2} totalHours={7} />
      <CircularProgress hours={2} totalHours={8} />
      <CircularProgress hours={hours} totalHours={totalHours} /> */}
      {/* <CircularProgress progress={angle} /> */}

      <CircularProgress currentTime={"30:00:34"} totalTime={"120:00:00"} habitName={"GYM"} />
      <CircularProgress currentTime={"10:00:34"} totalTime={"120:00:00"} habitName={"Coding"} />
      <CircularProgress currentTime={"00:00:02"} totalTime={"00:00:15"} habitName={"Tracker"} />
      <CircularProgress currentTime={"00:00:02"} totalTime={"00:00:05"} habitName={"Tracker"} />
      {/* TODO Add a plus button to create habit with currentTime, totalTime, HabitName */}
      {/* TODO: Enable Start, Stop */}
      {/* TODO enable flex to put these in container in row first  */}
    </>
  );
};

export default Tracker;



