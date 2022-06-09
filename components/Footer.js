

export default function Footer({ copywright, count  }) {
    return <footer className='bg-[rgb(21,185,129)] py-6 px-5'>
        <p>{count} Locations World Wide.</p>
        <p>&copy;{copywright}</p>
    </footer>
  }