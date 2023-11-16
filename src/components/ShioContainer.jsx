function ShioContainer({ text }) {
  const bgcolor = text === "robert" ? "red" : "yellow";
  const style = {
    backgroundColor: bgcolor,
    color: "green",
    fontSize: "24px",
  };
  return (
    <div
      className="shio-container"
      style={style}
    >
      {text}
    </div>
  );
}

export default ShioContainer;
