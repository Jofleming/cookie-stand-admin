import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandForm from '../components/StandForm';
import ReportTable from '../components/ReportTable';
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ?
        <CookieStandAdmin />
        :
        <LoginForm onLogin={login} />
      }

    </div>
  )
}





