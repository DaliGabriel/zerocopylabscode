export async function getUserProfile(token) {
    const res = await fetch('http://localhost:4000/api/user/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (res.status === 401 || res.status === 403) {
        throw new Error('unauthorized');
    }
    if (!res.ok) throw new Error('Failed to load user');
    return res.json();
}

export async function getUserBalance(token) {
    const res = await fetch('http://localhost:4000/api/user/balance', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (res.status === 401 || res.status === 403) {
        throw new Error('unauthorized');
    }
    if (!res.ok) throw new Error('Failed to load balance');
    const data = await res.json();
    return data.balance;
}