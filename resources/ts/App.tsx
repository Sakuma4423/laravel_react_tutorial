import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// React Functional Component型のエントリーポイント
const App: React.FC = () => {
  return (
    <AppContainer>
      <div>
        <p>Hello hogehgoe</p>
      </div>
    </AppContainer>
  );
};

// 描画部分;
if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
