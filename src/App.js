import Header from './Containers/Header';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<>
              <ProductListing/>
            </>} />
            <Route path="/product/:productID" element={<ProductDetails/>} />
            <Route>404 Page not Found</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;

      