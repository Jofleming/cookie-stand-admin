import { hours } from '../data'

export default function ReportTable({ locationData, deleteStand }) {
    function clickHandler(id) {
        deleteStand(id);
    }

    function calcHourlyTotal() {
      let globalTotal = 0;
      let hourlyTotal = []
      for (let i = 0; i < hours.length; i++) {
        let sumHour = 0;
        locationData.map(elem => {
          sumHour += elem.hourly_sales[i]
        })
        hourlyTotal[i] = sumHour
      }
      globalTotal = hourlyTotal.reduce((acc, curr) => acc + curr)
      hourlyTotal[hours.length] = globalTotal;
      return (hourlyTotal)
    }
    function drawReportTable() {
      return (
        <table className='bg-[rgb(21,185,129)]'>
          <thead>
            <tr className='font-bold'>
              <td className='pr-6'>
                Location
              </td>
              {hours.map(hour => {
                return (
                  <td className='pr-2'>
                    {hour}
                  </td>
                )
              })}
              <td>
                Totals
              </td>
            </tr>
          </thead>
          <tbody className='bg-[rgb(53,211,153)]'>
            {locationData.map(location => {
              return (
                <tr key={location}>
                  <td className='font-bold border-2 border-black'>{location.location} <button onClick={() => clickHandler(location.id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button></td>
                  {location.hourly_sales.map((hourSales, idx) => {
                    return (
                      <td key={idx} className='border-2 border-black'>
                        {hourSales}
                      </td>
                    );
                  })
                  }
                  <td className='border-2 border-black'>
                    {location.hourly_sales.reduce((acc, curr) => acc + curr)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className='border-2 border-black  font-bold'>
              <td className='border-2 border-black'>Totals</td>
              {calcHourlyTotal().map(elem => {
                return (
                  <td className='border-2 border-black'>{elem}</td>
                )
              })}
            </tr>
          </tfoot>
        </table>
      )
    }
  
    function reportTable() {
      if (locationData.length == 0) {
        return (
          <p className='font-bold pb-10'>No Cookie Stands Available</p>
        )
      } else {
        return drawReportTable()
      }
    }
    return (
      reportTable()
    )
  }