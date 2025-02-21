import Buttons from "./Buttons";
const Content = (props) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <Buttons github={props.github} linkedin={props.linkedin} />
    </div>
  );
};
export default Content;
