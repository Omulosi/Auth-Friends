import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import FriendList from './components/FriendList';
import AddFriend  from './components/AddFriend';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/auth';

const App = () => {

  return (
    <div className="">
      <Header />
      <section className="main-content container">
        <Switch>
          <Route  exact path="/" component={Home}/>
          <PrivateRoute path="/friends" component={FriendList} />
          <PrivateRoute path="/add-friend" component={AddFriend} />
          <Route path="/login" component={Login}/>
        </Switch>
      </section>

    </div>

  );
}

export default App;
