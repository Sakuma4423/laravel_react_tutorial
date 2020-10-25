import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import axios from 'axios';

// React Functional Component型のエントリーポイント
const App: React.FC = () => {
  const [inputState, setInputState] = useState('');
  const [selectState, setSelectState] = useState('');
  const [radioState, setRadioState] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const response = await axios.post('/api/test', {
      test: inputState,
    });
    console.log(response);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await axios.post('/api/test', {
      test: inputState,
    });
    console.log(response);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  return (
    <AppContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={inputState} onChange={handleInputChange}></input>
          <input type="text" value={inputState} onChange={handleInputChange}></input>
          <input type="text" value={inputState} onChange={handleInputChange}></input>
        </div>
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </AppContainer>
  );
};

// 描画部分;
if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
