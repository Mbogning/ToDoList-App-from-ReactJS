import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddTask from './AddTask';
import initialData from '../initialData';

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <section>
        <BrowserRouter>
        <Switch>
            <Route path="/add-task" component={AddTask} />
            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData} />} />
        </Switch>
        <NavBar />
        </BrowserRouter>
      </section>
    );
  }
}

export default App
