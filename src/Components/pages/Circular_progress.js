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

const CircularProgress = ({ currentTime, totalTime, habitName }) => {
  currentTime = useSelector(state => state.auth.currentTime);
  console.log("upon rerendering, it should change currentTime so should update currentSeconds too ...", currentTime);
  console.log("cur : ", currentTime);
  const calculateGradient = (angle) => {
    const sectorColor = "green"; // Color for the sector
    const remainingColor = "white"; // Color for the remaining circle
    const gradientAngle = angle + 90;
    return `conic-gradient(from ${gradientAngle}deg, ${sectorColor} 0%, ${sectorColor} ${angle}deg, ${remainingColor} ${angle}deg, ${remainingColor} 100%)`;
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

  // useEffect(() => {
  //   setCurrentSeconds(getSeconds(currentTime));

  // }, [currentTime]);

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
    <Card className="card" style={{ padding: "5rem 5rem", margin: "5rem 5rem", width: '30rem', boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)" }}>
      <CardContent>
        <Typography variant="h5" className="habit-name" style={{ marginBottom: "5rem", fontWeight: "600", fontStyle: "Roboto", fontSize: "5rem" }}>
          {habitName}
        </Typography>
        <div className="circle">
          <div
            className="sector"
            style={{
              background: calculateGradient(progressAngle),
            }}
          ></div>
          <div className="label">{formatTime(currentSeconds)}</div>

          {showStartButton && <StartButton style={{ margin: "5rem 0rem" }} onClick={updateTimer}>{timerRunning ? "Stop" : "Start"}</StartButton>}
        </div>
        <Typography variant="h5" style={{ fontWeight: 800, fontFamily: "Roboto", fontSize: "4rem", margin: "5rem 5rem 5rem 5rem" }} >
          {totalTime}
        </Typography>
        {c1 === c2 && <Typography variant="h2" style={{ fontFamily: "Roboto", fontWeight: 600, marginLeft: "5rem" }}> Done !! </Typography>}
      </CardContent>
    </Card >
  );
};

export default CircularProgress;
