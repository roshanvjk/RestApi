import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './del';
import Login from './login';
import UpdateForm from './update';
import "./nav.css";


function Intro() {
    return (  
        <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/login" class="nav-link active">Create</Link>
  </li>
   <li class="nav-item">
  <Link to="/del" class="nav-link" >Delete</Link>
  </li> 
   <li class="nav-item">
  <Link to="/update" class="nav-link" >Update</Link>
  </li> 
</ul>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/del" element={<Deleteform/>}/>
  <Route path="/update" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;