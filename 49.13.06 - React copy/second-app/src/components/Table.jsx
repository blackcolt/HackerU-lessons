import React from "react";

function Table(props) {
  const { users } = props;
  if (!users.length) return null;
  return (
    <table className="table">
      <thead>
        <tr>{createHead(users[0])}</tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>{createRow(user)}</tr>
        ))}
      </tbody>
    </table>
  );

  function createHead(obj) {
    return Object.keys(obj).map((head) => <th>{head}</th>);
  }

  function createRow(rowObject) {
    return Object.values(rowObject).map((value) => <td>{value}</td>);
  }
}

export default Table;
