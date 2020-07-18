import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Example = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const fetchhoge = async () => {
      try {
        const response = await axios.get('/api/test');
        setstate(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchhoge();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            {state.map((a: String) => {
              return <div className="card-header">{a}</div>;
              console.log(a);
            })}
            <div className="card-body">I'm an example component!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

if (document.getElementById('root')) {
  ReactDOM.render(<Example />, document.getElementById('root'));
}
