import './App.css';
import {
  BrowserRouter,
 
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/LogIn/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import { Switch } from 'react-router-dom';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import AdminRoute from './Pages/LogIn/AdminRoute';
import AddAdmin from './Pages/AddAdmin/AddAdmin';
import AddProduct from './Pages/AddProduct/AddProduct';


function App() {
  return (
 
    <AuthProvider>
      <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
         
          <Route exact path="/login">
            <Login/>
              </Route>
          <Route exact path="/register">
        <Register/>
            </Route>
        
          <PrivateRoute>
            <Route path="/dashboard">
            <Dashboard />
          </Route>
          </PrivateRoute>
          <AdminRoute>
          <Route path="/addAdmin">
            <AddAdmin/>
            </Route>
            
          </AdminRoute>
          <AdminRoute>
          <Route path="/addProduct">
            <AddProduct/>
          </Route>
            
          </AdminRoute>
          
        </Switch>

        
     
      </BrowserRouter>
      
    
    </AuthProvider>
      
 
    
  );
}

export default App;
