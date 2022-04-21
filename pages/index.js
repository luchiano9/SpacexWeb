import Image from "next/image";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title>Space X</Title>

      <p>Web desarrollada por la comadreja martina</p>

      <Image
        src="/images/space.jpg"
        className="img-fluid"
        width={380}
        height={560}
      />
      <Image
        src="/images/space2.jpg"
        className="img-fluid"
        width={380}
        height={560}
      />
      <Image
        src="/images/space3.jpg"
        className="img-fluid"
        width={380}
        height={560}
      />
      <Image
        src="/images/space4.jpg"
        className="img-fluid"
        width={380}
        height={560}
      />
      <Image
        src="/images/space5.jpg"
        className="img-fluid"
        width={380}
        height={560}
      />

      <style>
        {`
        p{color: darkgray;
        text-align:center;}
        
        p:hover{color: blue;}
        `}
      </style>
    </Layout>
  );
}
