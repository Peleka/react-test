
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <BrowserRouter>
    <div className={s.wrapper}>
      <Header />
      <Navbar />
      <div className={s.wrapperContent}>
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
