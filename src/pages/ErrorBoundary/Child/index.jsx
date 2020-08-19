/*
 * @Author: 吴灏
 * @Date: 2020-08-10 10:01:57
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-08-19 15:22:54
 * @Description: file content
 */
import React from 'react';

function ErrorBoundaryTest() {
  // throw new Error('测试错误边界');

//   setTimeout(() => {
//   throw new Error('测试错误边界');
// }, 5000)
  
  return (
      <div onClick={() =>{
      // throw new Error('测试错误边界');
      }}>这里是子组件 </div> 
  );
}

export default ErrorBoundaryTest;

