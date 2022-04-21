import Link from "next/link";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Users({ users }) {
  return (
    <Layout>
      <Title>Users Page</Title>
      <div className="grid">
        {users.map((user) => {
          return (
            <Link href={"/users/[id]"} as={`/users/${user.id}`}>
              <a className="card">
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <div>
        <h1>Users</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "30%" }} scope="col">
                Name
              </th>
              <th style={{ width: "30%" }} scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.title} {user.name}
                  </td>
                  <td>{user.email}</td>

                  <td style={{ whiteSpace: "nowrap" }}>
                    <button
                      href={`/users/${user.id}`}
                      className="btn btn-sm btn-primary mr-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-sm btn-danger btn-delete-user"
                      disabled={user.isDeleting}
                    >
                      {user.isDeleting ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        <span>Delete</span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}

            {!users && (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="spinner-border spinner-border-lg align-center"></div>
                </td>
              </tr>
            )}
            {users && !users.length && (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="p-2">No Users To Display</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .grid {
           tar display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
