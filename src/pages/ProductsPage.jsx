import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";

const ProductsPage = () => {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        } else {
            setSelectedCategory(null);
        }
        window.scrollTo(0, 0);
    }, [location.state]);

    return (
        <FeaturedProducts
            selectedCategory={selectedCategory}
            onCategoryConsumed={() => setSelectedCategory(null)}
        />
    );
};

export default ProductsPage;
