function StatusStyle({ status }) {
  let backgroundColor;

  if (status === "success") {
    backgroundColor = "green";
  } else if (status === "error") {
    backgroundColor = "red";
  } else if (status === "warning") {
    backgroundColor = "orange";
  } else {
    backgroundColor = "gray";
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: "white",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      Status: {status}
    </div>
  );
}

export default StatusStyle;