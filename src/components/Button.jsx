const Button = (props) => {
  return (
    <a href={props.link} target="_blank" className="btn btn-primary">
      {props.text}
    </a>
  );
};
export default Button;
