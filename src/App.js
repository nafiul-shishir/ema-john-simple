
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


import Inventory from './components/Inventory/Inventory';
import Kinakata from './components/Kinakata/Kinakata';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {

  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
             <Shop></Shop>
          </Route>

          <Route path="/review">
            <Kinakata> </Kinakata>

          </Route>
          

          
          <Route path="/manage">
            <Inventory></Inventory>

          </Route>
          <Route path="/product/:ProductKey">
            <ProductDetail></ProductDetail>
            
          </Route>


          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
