import Navbar from "./navbar";
import Head from "next/head";
import Image from "next/dist/client/image";

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
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
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
