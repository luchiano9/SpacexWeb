export default function Title({ children }) {
  return (
    <h1>
      {children}

      <style jsx>
        {`
          h1 {
            padding-top: 20px;
            margin: 0;
            font-size: 3rem;
            text-align: center;
          }
        `}
      </style>
    </h1>
  );
}
