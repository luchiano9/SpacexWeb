import Link from "next/link";
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function Abm({ users }) {
  return (
    <Layout>
      <Title>Users</Title>
      <Link href="/abm/add">
        <a class="btn btn-sm btn-success mb-2">Add User</a>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "10%" }} scope="col">
              ID
            </th>
            <th style={{ width: "10%" }} scope="col">
              Name
            </th>
            <th style={{ width: "10%" }} scope="col">
              Company
            </th>
            <th style={{ width: "10%" }} scope="col">
              Email
            </th>
            <th style={{ width: "10%" }} scope="col">
              Website
            </th>
            <th style={{ width: "10%" }} scope="col">
              City
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.company.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.address.city}</td>

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
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
