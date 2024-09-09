import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './view/app/App';
import Navs from './component/navbar/nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Hey = window.location.pathname ;
if (Hey === '/'){
  root.render(<>
  
  <div>
 <h1>Hello World</h1>
    </div>
  </>
);
}

// else if (Hey === '/app') {
//     root.render(
//       <App />
//     );
// }

// else {
//   root.render(
//     <h1>404</h1>
//   );
// }
