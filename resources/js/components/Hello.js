import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // ←追記

ReactDOM.render(
    <AppContainer>
        <div>
            <p>fuck. you</p>
        </div>
    </AppContainer>
    , document.getElementById("content")
)

// ↓追記
if (module.hot) {
    module.hot.accept();
}
