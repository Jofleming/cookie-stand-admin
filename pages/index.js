import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {

  const [jsonString, setJson] = useState();

  function storeCreationHandler(e) {
    e.preventDefault();
    var locationData = {}
    locationData["Location"] = e.target.location.value;
    locationData["Minimum Customers per Hour"] = parseInt(e.target.minCust.value);
    locationData["Maximum Customers per Hour"] = parseInt(e.target.maxCust.value);
    locationData["Average Cookies per Hour"] = parseInt(e.target.avgCookies.value);
    setJson(locationData);
    e.target.reset();
  }

  return (
    <div>
      <Header />
      <main className='flex flex-col items-center'>
        <StandForm onSubmit={storeCreationHandler}/>
        <ReportTable />
        <LatestStand jsonString={jsonString}/>
      </main>
      <Footer copywright='2022' />
    </div>
  )
}

function Header() {
  return <header className='bg-[rgb(21,185,129)] py-6 px-5 text-4xl'>
      <h1 className='font-serif'>Cookie Stand Admin</h1>
  </header>
}

function Footer({ copywright  }) {
  return <footer className='bg-[rgb(21,185,129)] py-6 px-5'>
    <p>&copy;{copywright}</p>
  </footer>
}

function StandForm(props) {
  return <form onSubmit={props.onSubmit} className='grid grid-rows-2 p-2 rounded-md my-10 bg-[rgb(111,230,183)]'>
    <legend className='flex justify-center pl-70 py-3 text-2xl' >Create Cookie Stand</legend>
    <div className='grid col-span-2'>
      <label>Location <input name='location' className='w-5/6 pl-2' placeholder='Enter a new location' required/></label>
    </div>
    <div>
      <label>Minimum Customers per Hour<input name='minCust' /></label>
      <label>Maximum Customers per Hour<input name='maxCust' /></label>
      <label>Average Cookies per Sale<input name='avgCookies' /></label>
      <button className='px-4 py-2 m-2 bg-[rgb(21,185,129)]'>Create</button>
    </div>

  </form>
}

function LatestStand({ jsonString }) {
  return <p>Latest Store: {JSON.stringify(jsonString)}</p>
}



function ReportTable() {
  return <p>
    Report Table Coming Soon...
  </p>
}