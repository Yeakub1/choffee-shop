import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllCoffee = ({ coffee }) => {
    const {_id, name, quantity, supplier, taste, category, details, photo } =
        coffee;
    
    const handleDelete = _id => {
        console.log('Yes mama delete', _id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              fetch(`http://localhost:5000/coffee/${_id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                        Swal.fire(
                          "Deleted!",
                          "Your file has been deleted.",
                          "success"
                        );
                      }
              })
          }
        });
    }
    
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="">
            <img src={photo} />
          </figure>
          <div className="flex p-4">
            <div className="card-body mt-0">
              <h2 className="card-title">{name}</h2>
              <p>quantity: {quantity}</p>
              <p>supplier: {supplier}</p>
              <p>dtails: {details}</p>
            </div>
            <div className="grid justify-center items-center">
              <button className="btn btn-primary">View</button> <br />
              <Link to={`updatecoffee/${_id}`}>
                <button className="btn btn-secondary">Edit</button> <br />
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-accent"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCoffee;