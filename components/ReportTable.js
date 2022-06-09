import { hours} from '../data'

export default function ReportTable({ locationData }) {
    function calcHourlyTotal() {
      let globalTotal = 0;
      let hourlyTotal = []
      for (let i = 0; i < hours.length; i++) {
        let sumHour = 0;
        locationData.map(elem => {
          sumHour += elem.HourlySales[i]
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
                  <td key={hour} className='pr-2'>
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
                <tr key={location.Location}>
                  <td>{location.Location}</td>
                  {location.HourlySales.map(hourSales => {
                    return (
                      <td className='border-2 border-black' key={hourSales}>
                        {hourSales}
                      </td>
                    );
                  })
                  }
                  <td>
                    {location.HourlySales.reduce((acc, curr) => acc + curr)}
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
                  <td className='border-2 border-black' key={elem}>{elem}</td>
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