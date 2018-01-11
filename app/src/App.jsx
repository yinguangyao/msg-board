import React from 'react'
import ReactDOM from 'react-dom'
import Message from './container/Message'

ReactDOM.render(
    <Message />, 
    document.getElementById('app')
);
if (module.hot) {
    module.hot.accept();
}