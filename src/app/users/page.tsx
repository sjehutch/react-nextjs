"use client";

import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import MyComponent from "../components/myComponent";
import userProgress from "../hooks/userProgress";
import LoadingBar from "react-top-loading-bar";

const UsersPage = () => {
  const [progress, setProgress] = useState(0);

  userProgress(setProgress);

  const [guid, setGuid] = useState("");

  useEffect(() => {
    setGuid(uuidv4());
  }, []);

  const handleLoaderFinished = () => {
    setProgress(0);
  };

  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-black">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={handleLoaderFinished}
        height={3}
        shadow={true}
      />
      <Typography variant="h3" component="h2" gutterBottom>
        Users Page - {guid}
      </Typography>
      <MyComponent />

      <label>Count: {count}</label>
      <br />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UsersPage;
