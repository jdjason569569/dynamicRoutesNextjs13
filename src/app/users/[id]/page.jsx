
async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}


export default async function UserPage({params}) {
  const user = await getUser(params.id);
  return (
    <div>
      <div>
          <h5>
            {user.id} {user.first_name} {user.last_name}
          </h5>
          <p>{user.email}</p>
        </div>
        <img src={user.avatar} alt={user.email}></img>
    </div>
  )
}
