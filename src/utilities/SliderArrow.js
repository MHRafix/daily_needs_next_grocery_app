export default function SliderArrow() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "linear-gradient(135deg, #0cc5b7 0%,#2bd891 100%)",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 22,
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
          background: "linear-gradient(135deg, #0cc5b7 0%,#2bd891 100%)",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 22,
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
