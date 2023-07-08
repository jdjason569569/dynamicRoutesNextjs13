import Users from "@/components/users";

async function fetchUsers(){
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}



async function IndexPage() {
  const users = await fetchUsers();
  //console.log('Users ->', users);
  return (
    <>
    {users.map((user) =>(
       <Users user = {user}></Users>
    ))}
  </>
  );
}

export default IndexPage