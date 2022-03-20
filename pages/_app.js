import { AuthProvider } from '../contexts/AuthContext'
import '../styles/globals.css'
import '../lib/firebase'

function MyApp({ Component, pageProps }) {
  
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
