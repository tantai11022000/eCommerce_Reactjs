import '../css/App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './Home/HomePage';
import ShopPage from './Shop/ShopPage';
import DetailProductPage from './DetailProduct/DetailProductPage';
import ShopCartPage from './ShopCart/ShopCartPage';
function App() {
  return (
    <div className="App">
    <Header></Header>
    {/* <HomePage> </HomePage>ư */}
    <ShopPage />
    {/* <DetailProductPage /> */}
    {/* <ShopCartPage/> */}
    <Footer />
    </div>
  );
}

export default App;
