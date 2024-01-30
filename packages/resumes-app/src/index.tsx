// @ts-nocheck
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

reportWebVitals();


let root : ReactDOM.Root | null;
function render (props: { container: Element }) {
    const { container } = props;
    root = root || ReactDOM.createRoot(container ? container.querySelector("#root") : document.getElementById("root") );
    root.render(<App />);
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}