function PropsExample(props) {
  return (
    <div>
      <h2>Welcome, {props.name}!</h2>
      <p>Your favorite color is {props.color}</p>
    </div>
  );
}

export default PropsExample;
