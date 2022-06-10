import { hourly_sales } from "../data";
import useResource from '../hooks/useResource';
import { useAuth } from "../contexts/auth";

export default function StandForm({ onCreate }) {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleCreate(e) {
        e.preventDefault();
        var locationData = {}
        locationData["Location"] = e.target.location.value;
        locationData["minimum_customers_per_hour"] = parseInt(e.target.minCust.value);
        locationData["maximum_customers_per_hour"] = parseInt(e.target.maxCust.value);
        locationData["average_cookies_per_sale"] = parseInt(e.target.avgCookies.value);
        locationData["owner"] = user.id;
        createResource(locationData);
        e.target.reset();

    }

    return <div className='relative flex justify-center py-6'>
            <form onSubmit={handleCreate} className='flex-wrap p-2 rounded-md my-10 bg-[rgb(111,230,183)]'>
                <legend className='flex justify-center py-3 text-2xl' >Create Cookie Stand</legend>
                <div className='flex py-2'>
                    <label className='px-2'>Location </label>
                    <input name='location' className='flex-auto px-2' placeholder='Enter a new location' required />
                </div>
                <div className='flex space-x-2'>
                    <div className='flex flex-col bg-[rgb(168,244,208)] px-2 rounded'>
                        <label>Minimum Customers per Hour</label>
                        <input name='minCust' />
                    </div>
                    <div className='flex flex-col bg-[rgb(168,244,208)] px-2 rounded'>
                        <label>Maximum Customers per Hour</label>
                        <input name='maxCust' />
                    </div>
                    <div className='flex flex-col bg-[rgb(168,244,208)] px-2 rounded'>
                        <label>Average Cookies per Sale</label>
                        <input name='avgCookies' />
                    </div>
                    <button className='px-16 py-2 m-2 bg-[rgb(21,185,129)] rounded'>Create</button>
                </div>


            </form>
    </div>
  }