import IndexTemplate from "./template/IndexTemplate";
import { Route, Routes } from 'react-router-dom';
import Login from "./Login"
import Register from './Register';

import HomeIndex from './Components/Home/Index';
import DocumentProvider from "./Components/Provider/DocumentProvider";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <DocumentProvider>
            <IndexTemplate />
          </DocumentProvider>
        } />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
