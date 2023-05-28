import Personal from "../Personal/Personal.";
import "./MultiStepForm.css";
import useForm from "../../hooks/useForm";
import Pagination from "../Pagination/Pagination";
import Steps from "../Steps/Steps";
import Plans from "../Plans/Plans";

export default function MultiStepForm() {
  const { form, setProp, setError, ...pagination } = useForm();
  const steps = [
    <Personal form={{ ...form, setProp, setError }} />,
    <Plans form={{ ...form, setProp }} />,
  ];

  return (
    <form className="stepform flex bx-between">
      <Steps currentPage={form.currentPage} />
      <div className="stepform__main flex">
        <div className="stepform__steps">{steps[1]}</div>
        <Pagination currentPage={form.currentPage} pagination={pagination} />
      </div>
    </form>
  );
}
