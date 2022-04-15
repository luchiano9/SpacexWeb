import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>SpaceX WebApp</title>
        <meta name="description" content="Página web de servicios spaceX" />
      </Head>
      <Navbar />
      <main>{children}</main>

      <style jsx>
        {`
          div {
            ming-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
