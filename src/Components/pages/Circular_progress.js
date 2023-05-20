import React, { useState, useEffect } from "react";
import "./Circular_progress.css";
import { Typography, Card, CardContent } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { timeset } from "../../Slice/AuthorizationSlice";

const getSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(":");
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
};

const StartButton = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, blue, aqua);
  color: white;
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircularProgressContainer = styled(Card)`
  padding: "";
  margin: "";
  width: 22rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`;

const HabitName = styled(Typography)`
  margin-bottom: 2rem;
  font-weight: 600;
  font-style: Roboto;
  font-size: 3rem;
`;

const TimerCircle = styled.div`
  /* Add any additional styles for the Timer Circle */
`;

const Sector = styled.div`
  /* Add any additional styles for the sector */
`;

const Label = styled.div`
  /* Add any additional styles for the label */
`;

const TimeDisplay = styled(Typography)`
  font-weight: 800;
  font-family: Roboto;
  font-size: 4rem;
  margin: 2rem;
`;

const DoneText = styled(Typography)`
  font-family: Roboto;
  font-weight: 600;
  margin-left: 2rem;
`;

const CircularProgress = ({ currentTime, totalTime, habitName }) => {
  currentTime = useSelector((state) => state.auth.currentTime);
  console.log("upon rerendering, it should change currentTime so should update currentSeconds too ...", currentTime);
  console.log("cur : ", currentTime);

  const dispatch = useDispatch();
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(getSeconds(currentTime));

  useEffect(() => {
    let interval = null;

    if (timerRunning) {
      interval = setInterval(() => {
        setCurrentSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    if (currentSeconds >= getSeconds(totalTime)) {
      setTimerRunning(false);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerRunning, currentSeconds, totalTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, "0");
  };

  const progressAngle = (currentSeconds / getSeconds(totalTime)) * 360;

  const updateTimer = () => {
    setTimerRunning((prevTimerRunning) => !prevTimerRunning);
    setCurrentSeconds(currentSeconds);

    if (!timerRunning) {
      dispatch(timeset(formatTime(currentSeconds)));
    }
  };

  const c1 = currentSeconds;
  const c2 = getSeconds(totalTime);
  const showStartButton = c1 < c2;

  return (
    <CircularProgressContainer className="card">
      <CardContent>
        <HabitName variant="h4">{habitName}</HabitName>
        <TimerCircle className="circle">
          <Sector
            className="sector"
            style={{
              background: `conic-gradient(from ${progressAngle + 90}deg, green 0%, green ${progressAngle}deg, white ${progressAngle}deg, white 100%)`,
            }}
          ></Sector>
          <Label className="label">{formatTime(currentSeconds)}</Label>

          {showStartButton && (
            <StartButton style={{ margin: "5rem 0rem" }} onClick={updateTimer}>
              {timerRunning ? "Stop" : "Start"}
            </StartButton>
          )}
        </TimerCircle>
        <TimeDisplay variant="h5">{totalTime}</TimeDisplay>
        {c1 === c2 && <DoneText variant="h2">Done !!</DoneText>}
      </CardContent>
    </CircularProgressContainer>
  );
};

export default CircularProgress;
