const withBackgroundColor = (WrappedComponent, color) => {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBackgroundColor;