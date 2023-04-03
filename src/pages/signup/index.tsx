import { useState } from 'react';

export default function Signup(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const handleChange = (e: any) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log(formData)

        // const res = await fetch('/api/signup', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        // },
        //   body: JSON.stringify(formData)
        // });

        // if (res.status === 200) {
        //     // Redirect to the dashboard or some other page
        // } else {
        //     const { message } = await res.json();
        //     setError(message);
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Sign up</button>
      </form>
    )
}