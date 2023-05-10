import { useLoaderData } from 'react-router-dom';
import './App.css'
import AllCoffee from './components/Layout/AllCoffee';

function App() {

  const coffees = useLoaderData();


  return (
    <>
      <h1>This is a coffee section</h1>
      <h1>Our coffee {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <AllCoffee key={coffee._id} coffee={coffee}></AllCoffee>
        ))}
      </div>
    </>
  );
}

export default App
