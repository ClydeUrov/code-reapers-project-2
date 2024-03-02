import axios from "axios";
import { errorToast } from "./toasters";

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
