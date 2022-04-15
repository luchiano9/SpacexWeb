import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Rockets</a>
      </Link>

      <style>
        {`
   nav{
     padding-top: 20px;}
     a{
       padding: 0 20px;  
       font-size: 1.5rem;
       color:black;
      
       }
       a:hover{
         color:blue;
       }
      
  `}
      </style>

      {/*   <Link href="/posts/[id]" as={`/posts/${5}`}>
        <a>Posts #5</a>
  </Link> */}
    </nav>
  );
}
