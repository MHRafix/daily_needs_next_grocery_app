export default function SliderArrow() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#2bd891",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 1222,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#0cc5b7",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 1222,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  return { SampleNextArrow, SamplePrevArrow };
}
