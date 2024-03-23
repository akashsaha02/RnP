const Watermark = ({ pageNumber }) => {
  const watermarkStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "48px",
    fontWeight: "bold",
    pointerEvents: "none",
  };

  return (
    <div style={watermarkStyle}>
      {/* You can customize the watermark text here */}
      Watermark - Page {pageNumber}
    </div>
  );
};

export default Watermark;
