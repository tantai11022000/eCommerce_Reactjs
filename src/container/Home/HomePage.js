import React from 'react';
import HomeBanner from "../../component/HomeFeature/HomeBanner";
import MainFeature from "../../component/HomeFeature/MainFeature";
import ProductFeature from "../../component/HomeFeature/ProductFeature";
import NewProductFeature from "../../component/HomeFeature/NewProductFeature"
import HomeBlog from '../../component/HomeFeature/HomeBlog';
function HomePage(props) {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <MainFeature></MainFeature>
            <ProductFeature></ProductFeature>
            <NewProductFeature></NewProductFeature>
            <HomeBlog />
        </div>
    );
}

export default HomePage;