import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API Fetching using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name cannot be empty";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Register</button>
      </form>

      <h3 style={{ color: "green" }}>{success}</h3>

      <hr />

      <h2>API Data using useEffect</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;