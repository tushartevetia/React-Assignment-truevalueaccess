import {BrowserRouter as Router,Navigate,Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound';
import UserDetails from './components/UserDetails';
import UsersList from './components/UsersList';

function App() {
  return (
    <Router>
    <div className='flex flex-col justify-between h-screen px-4 py-4'>
      <Routes>
        <Route path='/users' element={<UsersList/>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/' element={<Navigate to="/users" />} />
      </Routes>
    </div>
    </Router>
  
  );
}

export default App;
