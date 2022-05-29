function Child(props) {
  return (
    <div>
      <input
        type="button"
        onClick={() => props.handleClick(1)}
        value="click me"
      />
    </div>
  );
}

export default Child;
