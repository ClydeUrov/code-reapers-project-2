import toast from "react-hot-toast";
import { errorToast, infoToast, successToast } from "../helpers/toasters";

const Header = () => {
  return (
    <div>
      Header
      <div className="space-x-6">
        <h3>toasters</h3>
        <button onClick={() => infoToast("SOME MESSAGE")}>INFO</button>
        <button onClick={() => successToast()}>SUCCESS</button>
        <button onClick={() => errorToast()}>ERROR</button>
      </div>
    </div>
  );
};

export default Header;
