import { Head } from "blitz"
import PublicNavigation from '../components/PublicNavigation'
import Footer from '../components/Footer'

const PublicLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "pumpt-2.0"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicNavigation />
      {children}
      <Footer />
    </>
  )
}

export default PublicLayout
