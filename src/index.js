import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './router';
import {Provider} from 'mobx-react'
import rootStore from './mobx'
import registerServiceWorker from './registerServiceWorker';
const App=()=>{
    return(
        <Provider rootStore={new rootStore()}>
            <Main/>
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
