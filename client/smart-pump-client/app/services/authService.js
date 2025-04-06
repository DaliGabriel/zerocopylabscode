export async function loginUser(email, password) {
    const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        throw new Error('Login failed');
    }

    const data = await res.json();
    return data.token;
}