import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const token = cookies.get('token');

    if(!token) {
        throw redirect(302, "/sign");
    }

    return { 
        token 
    };
  }
