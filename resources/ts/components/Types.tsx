import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// 各taskに使用する型(interfaceでも良いのでは?)
// TODO typeとinterfaceの違いを調査
type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default Task;
