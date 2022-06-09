import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandForm from '../components/StandForm';
import ReportTable from '../components/ReportTable';

export default function Home() {

  const [locationData, setlocationData] = useState([]);

  function storeCreationHandler(newlocationData) {

    setlocationData([...locationData, newlocationData]);
  }

  return (
    <div>
      <Header />
      <main className='flex flex-col items-center'>
        <StandForm onCreate={storeCreationHandler}/>
        <ReportTable locationData={locationData}/>
        {/* <LatestStand locationData={locationData}/> */}
      </main>
      <Footer copywright='2022' count={locationData.length}/>
    </div>
  )
}


// function LatestStand({ locationData }) {
//   return <p>Latest Store: {JSON.stringify(locationData)}</p>
// }



