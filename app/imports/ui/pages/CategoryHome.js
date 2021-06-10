import React from 'react';
import {useParams} from "react-router";

const CategoryHome = () => {
    const {categoryId} = useParams();
    return <>
        <p>Kategoria: {categoryId}</p>
    </>;
};

export default CategoryHome;