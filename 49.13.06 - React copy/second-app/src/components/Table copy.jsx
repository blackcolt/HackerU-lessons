import React from "react";

function Table(props) {
  const { users } = props;
  if (!users.length) return null;
  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(users[0]).map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            {Object.values(user).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
