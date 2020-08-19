import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    // throw new Error('测试错误边界');
    if (this.state.hasError) {
      return <h1>页面开了会儿小差...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
