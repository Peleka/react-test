
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Nav/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = ()=> {

  return (
    <div className={s.wrapper}>
      <Header />
      <Navbar 
        // state={props.state.sideBar}
      />
      <div className={s.wrapperContent}>
        <Route 
          path='/profile' 
          render={() => <Profile />} 
        />
        <Route 
          path='/dialogs' 
          render={() => <DialogsContainer />}
        />
        <Route 
          path='/users' 
          render={() => <UsersContainer />}
        />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings/>} />
      </div>
    </div>
  );
}

export default App;
