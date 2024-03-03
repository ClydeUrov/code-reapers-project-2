import { useEffect } from "react";
import { useNavigate } from "react-router";

export const PrivateRoute = ({ component: Component }) => {
  const userJSON = localStorage.getItem("user");
  const navigate = useNavigate();
  const user = JSON.parse(userJSON);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, [user, navigate]);
  return user && Component;
};
