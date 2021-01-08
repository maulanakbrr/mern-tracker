import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './components/navbar/navbar.component'; 
import ExerciseList from './components/exercise-list/exercise-list.component';
import EditExercise from './components/edit-exercise/edit-exercise.component';
import CreateExercise from './components/create-exercise/create-exercise.component';
import CreateUser from './components/create-user/create-user.component';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Container>
        <Switch>
          <Route path='/' exact component={ExerciseList}/>
          <Route path='/edit/:id' component={EditExercise}/>
          <Route path='/create' component={CreateExercise}/>
          <Route path='/user' component={CreateUser}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
