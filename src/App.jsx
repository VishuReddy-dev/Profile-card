import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import mypic from "../public/IMG_20230407_215040_753.jpg";
const App = () => {
  return (
    <div className="contain">
      <ProfileCard
        name="Sadu Vishwanath Reddy"
        description="Web and Mobile Developer and a Tech Enthusiast"
        github="https://github.com/VishuReddy-dev/"
        linkedin="https://www.linkedin.com/in/vishwanath-reddy-780947256/"
        Image={mypic}
      />
    </div>
  );
};
export default App;
