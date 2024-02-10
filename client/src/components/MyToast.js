/************************************************************
*                          TOAST                            *
*                                                           *
*     Toast component used to notify user after             *
*     some action. React-toastify library installed.        *
*     Source: https://www.npmjs.com/package/react-toastify  *
*                                                           *
************************************************************/

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

/* Success notification, if computer is successfully added to comparison. */
export function SuccessNotification() {
  toast.success("Počítač bol pridaný do porovnania.", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

/* Warning notification, if user adds already obtained computer to comparison. */
export function WarningNotification() {
  toast.warn("Počítač už je v porovnaní.", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

/* Success notification, if computer is successfully removed from comparison. */
export function SuccessDeleteNotification() {
  toast.success("Počítač úspešne odobraný.", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

/* Success notification, when contact form is submitted successfully. */
export function SuccessSubmitNotification() {
  toast.success("Formulár bol úspešne odoslaný.", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

/* Error */
export function WarnSubmitNotification() {
  toast.warn("Všetky polia formuláru musia byť vyplnene!", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

/* Error notification, if something went wrong. */
export function ErrorNotification() {
  toast.error("Hups, niečo sa pokazilo!", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export default function MyToast() {
  return (
    <ToastContainer />
  )
}
