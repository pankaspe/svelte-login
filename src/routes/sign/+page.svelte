<script>
import { enhance } from '$app/forms';

/** @type {import('./$types').PageData} */  
export let data;

/** @type {import('./$types').ActionData} */
export let form;
</script>

<!-- component -->
<div class="w-full min-h-screen bg-cyan-950 text-white flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div class="w-full sm:max-w-md p-5 mx-auto">
      <h2 class="mb-12 text-center text-5xl font-extrabold">Sign in</h2>
      {#if form?.errors}<p class="error">{form.errors}</p>{/if}
      <form method="POST" use:enhance>
        <div class="mb-4">
          <label class="block mb-1" for="email">Username</label>
          <input id="username" type="text" name="username" class="text-gray-700 py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        <div class="mb-4">
          <label class="block mb-1" for="password">Password</label>
          <input id="password" type="password" name="password" class="text-gray-700 py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
            <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-200"> remember me </label>
          </div>
        </div>
        <div class="mt-6">
          <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-cyan-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-cyan-800 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">send</button>
        </div>
      </form>
    </div>
  </div>