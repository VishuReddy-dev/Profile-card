import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
const App = () => {
  return (
    <div className="contain">
      <ProfileCard
        name="Sadu Vishwanath Reddy"
        description="Web and Mobile Developer and a Tech Enthusiast"
        github="https://github.com/VishuReddy-dev/"
        linkedin="https://www.linkedin.com/in/vishwanath-reddy-780947256/"
        Image="src\assets\IMG_20230407_215040_753.jpg"
      />
    </div>
  );
};
export default App;
