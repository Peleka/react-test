
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
