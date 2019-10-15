import React from 'react';

const FriendItem = (props) => {

  const { id, name, age, email } = props.friend;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
    </tr>
  );
}

export default FriendItem;

