import Button from "./Button";
const Buttons = (props) => {
  return (
    <div className="buttons">
      <Button link={props.github} text="Github" />
      <Button link={props.linkedin} text="Linkedin" />
    </div>
  );
};
export default Buttons;
