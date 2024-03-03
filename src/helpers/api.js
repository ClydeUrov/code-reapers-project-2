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

export async function postMessageFacult(id, body) {
  const token = getToken();

  return axios.post(
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/send-message/faculty/${id}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
}
export async function postMessageGroup(id, body) {
  const token = getToken();

  return axios.post(
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/send-message/group/${id}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
}
export async function postMessageCourse(id, body) {
  const token = getToken();

  return axios.post(
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/send-message/course/${id}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
}

function getToken() {
  const user = localStorage.getItem("user");
  const corr = JSON.parse(user);
  return corr.token;
}
