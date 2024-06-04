import RouteApp from "./routes";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <RouteApp/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
