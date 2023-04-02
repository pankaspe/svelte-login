
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
  
        const api_url = "https://freya-1-m3228305.deta.app/python";
        const response = await fetch(`${api_url}/login`,{ 
            method: "POST",
            headers: { 
                'Content-Type': 'application/json', 
                "WWW-Authenticate": "Bearer",
                'Accept': 'application/json' 
            },
            body: JSON.stringify({username, password})
        })
  
        const json = await response.json();
  
        if (response.status === 200) {
            cookies.set('token', json.access_token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 1000
            });
            throw redirect(302, "/");
        } else {
            return fail(422, { errors: json, user: username });
        }
        
    }
}