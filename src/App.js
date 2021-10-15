import './css/App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import HomePage from './container/Home/HomePage';
import ShopPage from './container/Shop/ShopPage';
import DetailProductPage from './container/DetailProduct/DetailProductPage';
import ShopCartPage from './container/ShopCart/ShopCartPage';
function App() {
  return (
    <div className="App">
    <Header></Header>
    {/* <HomePage> </HomePage> */}
    {/* <ShopPage /> */}
    {/* <DetailProductPage /> */}
    <ShopCartPage/>
    <Footer />
    </div>
  );
}

export default App;
