import { hourly_sales } from "../data";
import useResource from '../hooks/useResource';
import { useAuth } from "../contexts/auth";

export default function StandForm({ onCreate }) {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleCreate(e) {
        e.preventDefault();
        var locationData = {}
        locationData["location"] = e.target.location.value;
        locationData["minimum_customers_per_hour"] = parseInt(e.target.minCust.value);
        locationData["maximum_customers_per_hour"] = parseInt(e.target.maxCust.value);
        locationData["average_cookies_per_sale"] = parseInt(e.target.avgCookies.value);
        locationData["owner"] = user.id;
        createResource(locationData);
        e.target.reset();

    }

    return <div className='justify-center w-5/6'>
            <form onSubmit={handleCreate} className='flex-wrap p-2 rounded-md my-10 bg-[rgb(168,244,208)]'>
                <div className='flex py-2'>
                    <div className="flex flex-col font-bold text-center w-4/5 px-10">
                        <label className='px-2'>ADD LOCATION </label>
                        <input name='location' className='flex-auto px-2' placeholder='Enter a new location' required />
                    </div>
                    <button className='px-16 py-2 m-2 bg-[rgb(21,185,129)] rounded'>CREATE STAND</button>
                </div>
                <div className='flex space-x-2 py-8'>
                    <div className='flex flex-col font-bold bg-[rgb(168,244,208)] px-20 rounded'>
                        <label>MINIMUM CUSTOMERS PER HOUR</label>
                        <input name='minCust' placeholder='0' />
                    </div>
                    <div className='flex flex-col font-bold bg-[rgb(168,244,208)] px-20 rounded'>
                        <label>MAXIMUM CUSTOMERS PER HOUR</label>
                        <input name='maxCust' placeholder='0'/>
                    </div>
                    <div className='flex flex-col font-bold bg-[rgb(168,244,208)] px-20 rounded'>
                        <label>AVERAGE COOKIES PER SALE</label>
                        <input name='avgCookies' placeholder='0' />
                    </div>
                </div>


            </form>
    </div>
  }