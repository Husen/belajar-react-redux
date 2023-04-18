import './App.css';
import ChangeColor from './componenets/ChangeColor';
import Login from './componenets/Login';
import Profile from './componenets/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />   
      <ChangeColor />   
    </div>
  );
}

export default App;
