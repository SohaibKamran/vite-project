import  { useState } from 'react';

const Register = () => {
  // State variables to hold the username and password input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can call your Register API
    try {
      const response = await fetch('http://10.196.36.209:30889/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      // Handle response from API
      if (response.ok) {
        // Register successful
        console.log('Register successful');
      } else {
        // Register failed
        console.error('Register failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Define styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    card: {
      width: '300px',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px'
    },
    input: {
      width: '100%',
      padding: '8px',
      boxSizing: 'border-box',
      marginBottom: '5px'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
