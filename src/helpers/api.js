import axios from "axios";

export async function fetchUser(email, password) {
  return await axios
    .post(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/auth`,
      JSON.stringify({ email: email, password: password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
}
export async function getAllStudents() {
  const token = getToken();

  return await axios
    .get(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/students/all`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => res.data);
}

export async function updateStudent({id, data}) {
  const token = getToken();
  console.log("data", id, data)
  console.log(token);
  return await axios
    .put(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/update/${id}`, data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => res.data);
}

function getToken() {
  const user = localStorage.getItem("user");
  const corr = JSON.parse(user);
  return corr.token;
}
