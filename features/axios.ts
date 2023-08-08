import axios from "axios";

interface resDataprops {
  name: string;
  data: Object[];
  address: {};
  email: string;
}

axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
  const data = res.data as resDataprops;

  const name = data.name;
  const address = data.address;
  const email = data.email;
  console.log(logTodo(name, address, email));
});

const logTodo = (
  name: string,
  address: object,
  email: string
): resDataprops | void => {
  const log = console.log(`my name is: ${name}
  my address is: ${address}
  my email is: ${email}
  `);
};
