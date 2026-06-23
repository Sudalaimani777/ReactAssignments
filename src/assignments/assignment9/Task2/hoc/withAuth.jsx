const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    if (!props.isLogin) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;