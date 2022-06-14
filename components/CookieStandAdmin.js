import { useState } from 'react';
import Header from './Header';
import StandForm from './StandForm'; 
import ReportTable from './ReportTable';
import Footer from './Footer';
import useResource from '../hooks/useResource'

export default function CookieStandAdmin() {
  const [locationData, setlocationData] = useState([]);
  const { resources, deleteResource } = useResource();

  function storeCreationHandler(newlocationData) {

    setlocationData([...locationData, newlocationData]);
  }

  return (<>
    <Header />
    <main className='flex flex-col items-center'>
      <StandForm onCreate={storeCreationHandler}/>
      <ReportTable locationData={resources || []} deleteStand={deleteResource} />
    </main>
    <Footer copywright='2022' count={resources && resources.length}/>

  </>)

}