import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  Outlet,
  useNavigate,
  useParams
} from 'react-router-dom';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: 'Seattle',
      country: 'USA',
      population: '733,919',
      details: 'Seattle is a major city in Washington State known for technology, ports, coffee, and the Space Needle.'
    }
  ]);

  function addCity(newCity) {
    setCities([...cities, newCity]);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Cities Application</h1>

          <nav>
            <NavLink to="/cities">Cities List</NavLink>
            <NavLink to="/add-city">Add City</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<CitiesList cities={cities} />} />
            <Route path="/cities" element={<CitiesList cities={cities} />}>
              <Route path=":cityId" element={<CityDetails cities={cities} />} />
            </Route>
            <Route path="/add-city" element={<AddCity addCity={addCity} cities={cities} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function CitiesList({ cities }) {
  return (
    <section className="card">
      <h2>Cities List</h2>

      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </section>
  );
}

function AddCity({ addCity, cities }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: '',
    details: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newCity = {
      id: cities.length + 1,
      name: formData.name,
      country: formData.country,
      population: formData.population,
      details: formData.details
    };

    addCity(newCity);

    navigate('/cities');
  }

  return (
    <section className="card">
      <h2>Add City</h2>

      <form onSubmit={handleSubmit} className="city-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Population:
          <input
            type="text"
            name="population"
            value={formData.population}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Details:
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add City</button>
      </form>
    </section>
  );
}

function CityDetails({ cities }) {
  const { cityId } = useParams();

  const city = cities.find((item) => item.id === Number(cityId));

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
    <section className="city-details">
      <h2>{city.name} Details</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p><strong>Details:</strong> {city.details}</p>
    </section>
  );
}

export default App;