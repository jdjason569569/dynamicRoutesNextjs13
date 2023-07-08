

import Link from "next/link";


export default function Users({ user }) {
  
  return (
    <ul>
      <li
        key={user.id}>
        <div>
            <Link href={`/users/${user.id}`}>
          <h5>
            {user.id} {user.first_name} {user.last_name}
          </h5>
          </Link>
          <p>{user.email}</p>
        </div>
        <img src={user.avatar} alt={user.email}></img>
      </li>
    </ul>
  );
}
