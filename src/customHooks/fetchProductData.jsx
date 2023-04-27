import { useState, useEffect } from 'react';

export default function fetchProductData() {
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        fetch(`/products.json`)
            .then((r) => r.json())
            .then((data) => setProductsInfo(data));
    }, []);

    return productsInfo;
}
