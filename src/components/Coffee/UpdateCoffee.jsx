import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
     const { _id, name, quantity, supplier, taste, category, details, photo } =
       coffee;
    console.log(coffee, 'update coffee');
    return (
        <div>
            <h1>Update Coffee store</h1>
            <h1> name{ name}</h1>
        </div>
    );
};

export default UpdateCoffee;