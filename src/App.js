import logo from './logo.svg';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className='app_header'>
        <Header></Header>
      </div>
      <div className='app_content'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
