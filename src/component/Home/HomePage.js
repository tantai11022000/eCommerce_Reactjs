import React from 'react';
import HomeBanner from "./HomeFeature/HomeBanner";
import MainFeature from "./HomeFeature/MainFeature";
import ProductFeature from "./HomeFeature/ProductFeature";
import NewProductFeature from "./HomeFeature/NewProductFeature"
import HomeBlog from './HomeFeature/HomeBlog';
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