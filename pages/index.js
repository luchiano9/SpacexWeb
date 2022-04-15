import Image from "next/image";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title>Space X</Title>

      <p>Web desarrollada por la cotorreja martina</p>

      <Image src="/images/space.jpg" width={400} height={600} />

      <style>
        {`
        p{color: darkgray;}
        
        p:hover{color: darkred;}
        `}
      </style>
    </Layout>
  );
}
