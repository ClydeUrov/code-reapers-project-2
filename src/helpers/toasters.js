import toast from "react-hot-toast";

export function infoToast(mess = "Hello World") {
  toast(mess);
}

export function errorToast(mess = "This is an error!") {
  toast.error(mess);
}

export function successToast(mess = "Successfully created!") {
  toast.success(mess);
}
