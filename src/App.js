import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import { Routes, Route } from 'react-router-dom';

import Root from './components/Root';
import Home from './components/Home';
import MyName from './components/MyName';
import FileA from './components/FileA';
import FileB from './components/FileB';
import Projects from './components/Projects';
import MySuperSecretProject from './components/MySuperSecretProject';
import MySuperSecretFile from './components/MySuperSecretFile';

const App = () => {
  return (
    <div>
      <Breadcrumbs />
      <Routes>
        <Route exact path='/' element={<Root />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/myname' element={<MyName />} />
        <Route exact path='myname/filea' element={<FileA />} />
        <Route exact path='myname/fileb' element={<FileB />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/projects/mysupersecretproject' element={<MySuperSecretProject />} />
        <Route exact path='/projects/mysupersecretfile' element={<MySuperSecretFile />} />
      </Routes>
    </div>
  );
};

export default App;


