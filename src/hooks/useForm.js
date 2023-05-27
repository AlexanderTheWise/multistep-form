import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    currentPage: 0,
    personalErrors: {
      emptyError: false,
      invalidError: false,
    },
    planError: false,
  });

  const setProp = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const setError = (setter, error, property) => {
    setForm((prevForm) => ({
      ...prevForm,
      [error]:
        error === "planError"
          ? setter
          : {
              ...prevForm[error],
              [property]: setter,
            },
    }));
  };

  const moveBackwards = () => {
    if (form.currentPage === 0) return;

    setForm((prevForm) => ({
      ...prevForm,
      currentPage: prevForm.currentPage - 1,
    }));
  };

  const moveForwards = (length) => {
    if (form.currentPage === length - 1) return;

    if (
      form.currentPage === 0 &&
      !Object.values(form)
        .slice(0, 3)
        .every((value) => value)
    ) {
      setError(true, "personalErrors", "emptyError");

      return;
    }

    if (form.currentPage === 0 && form.personalErrors.invalidError) return;

    if (form.currentPage === 1 && !form.plan) {
      setError(true, "planError");

      return;
    }

    setForm((prevForm) => ({
      ...prevForm,
      currentPage: form.currentPage + 1,
    }));
  };

  return {
    form,
    setProp,
    moveBackwards,
    moveForwards,
    setError,
  };
}
