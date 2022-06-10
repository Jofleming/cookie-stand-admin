
export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }
  
    return (
        <div className="w-full flex justify-center pt-3 ">
  
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-[rgb(168,244,208)] rounded shadow-md">
            <fieldset autoComplete='off'>
                <label className="block mb-2 text-sm font-bold" htmlFor="username">Username</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="username" />
                <label className="block mb-2 text-sm font-bold" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="password" name="password" />
                <button className="px-4 py-2 font-bold text-white bg-[rgb(21,185,129)] rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Log In</button>
            </fieldset>
        </form>
        </div>
    );
  }