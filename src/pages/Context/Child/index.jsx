/*
 * @Author: 吴灏
 * @Date: 2020-08-10 10:01:57
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-08-19 14:40:08
 * @Description: file content
 */
import React, {
  useContext
} from 'react';
import {
  ct
} from '../Father/index';

function ChildComponent() {

  const ctContext = useContext(ct);

  return (
    <>
      <div> 父组件的传值是： {ctContext}
      </div>
      <div> 这里是子组件 </div> </ >
  );
}

export default React.memo(ChildComponent);