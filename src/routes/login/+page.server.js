import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ fetch, cookies, request }) => {
        const data = await request.formData();
        
        const username = data.get('username');
        const password = data.get('password');

        if (!username || !password) {
            return fail(400, { username, password, missing: true })
        }

        const userData = new FormData();
	    userData.append('username', username);
	    userData.append('password', password);

        const api_url = "https://freya-1-m3228305.deta.app/python";
        const response = await fetch(`${api_url}/login`, { 
            method: "POST",
            headers: { 
                "WWW-Authenticate": "Bearer",
            },
            body: userData
        })
  
        const json = await response.json();
  
        if (response.status === 200) {
            cookies.set('token', json.access_token, {
                path: '/dashboard',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 1000
            });
            throw redirect(302, "/dashboard");
        } else {
            return fail(422, { errors: json});
        }
        
    }
}