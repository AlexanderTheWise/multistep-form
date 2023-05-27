import { useEffect } from "react";
import Personal from "../Personal/Personal.";
import "./MultiStepForm.css";
import useForm from "../../hooks/useForm";
import Pagination from "../Pagination/Pagination";
import Steps from "../Steps/Steps";

export default function MultiStepForm() {
  useEffect(() => {
    document.querySelectorAll("label").forEach((label) => {
      label.addEventListener("click", (event) => event.preventDefault());
    });
  }, []);

  const { form, setProp, setError, ...pagination } = useForm();

  return (
    <form className="stepform flex bx-between">
      <Steps currentPage={form.currentPage} />
      <div className="stepform__main flex">
        <div className="stepform__steps">
          <Personal form={{ ...form, setProp, setError }} />
        </div>
        <Pagination currentPage={form.currentPage} pagination={pagination} />
      </div>
    </form>
  );
}
