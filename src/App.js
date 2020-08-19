/*
 * @Author: 吴灏
 * @Date: 2020-08-10 09:55:40
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-08-19 14:43:04
 * @Description: file content
 */
import React from 'react';
import ErrorBoundary from './component/ErrorBoundary/index'
import ErrorBoundaryTest from './pages/ErrorBoundary/Child/index'

function App() {
  return (
    <ErrorBoundary>
      <ErrorBoundaryTest />
    </ErrorBoundary>
    
  );
}

export default App;
