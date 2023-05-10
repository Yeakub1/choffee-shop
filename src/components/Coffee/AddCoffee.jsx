import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const quantity = from.quantity.value;
    const supplier = from.supplier.value;
    const taste = from.taste.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;

    const fullForm = { name, quantity, supplier, taste, category, details, photo };
    console.log(fullForm);
    event.target.reset();



    // send to server
    fetch("http://localhost:5000/coffee", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(fullForm)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add your coffee",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      })
    
    };


  return (
    <div className="px-14">
      <form onSubmit={handleAddCoffee}>
        {/* name */}
        <div className="md:flex">
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="coffee name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* Supplier */}
        <div className="md:flex">
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* Category */}
        <div className="md:flex">
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-5 md:w-1/2">
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="form-control mt-5 md:w-1/2">
          <label className="input-group">
            <span>Photo</span>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
            />
          </label>
        </div>
        <button className="btn btn-block mt-5" type="submit">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
