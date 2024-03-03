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

export async function getOneUser() {
  const token = getToken();

  return await axios
    .get(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/user/info`,
      {
        headers: {
          Authorization: "Bearer " + token,
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

export async function updateStudent({ id, data }) {
  const token = getToken();
  return await axios
    .put(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/update/${id}`,
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => res.data);
}

export async function createTest(data) {
  const token = getToken();
  console.log(data);
  return await axios
    .post(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/tests/create`, data,
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
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/messages/send/faculty/${id}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
}
export async function postMessageUser(id, body) {
  const token = getToken();

  return axios.post(
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/messages/send/student/${id}`,
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
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/messages/send/group/${id}`,
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
    `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/messages/send/course/${id}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getAllMessaages() {
  const token = getToken();

  return axios
    .get(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/messages/all`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",

        },
      }
    )
    .then((res) => res.data);
}

export async function getAllTests() {
  const token = getToken();

  return axios
    .get(
      `http://ec2-16-170-239-71.eu-north-1.compute.amazonaws.com/campus/tests/all`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",

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
