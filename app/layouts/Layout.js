import { Head } from "blitz"

<<<<<<< HEAD
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "pumpt-2.0"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}
=======
const Layout = ({
  title,
  children
}) => {
  return <>
    <Head>
      <title>{title || "pumpt-2.0"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}
  </>;
};
>>>>>>> ac2843419adee2bc001724452342e46e4eb8c4f4

export default Layout
