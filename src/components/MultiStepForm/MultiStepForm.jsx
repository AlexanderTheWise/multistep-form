import Personal from "../Personal/Personal.";
import "./MultiStepForm.css";
import useForm from "../../hooks/useForm";
import Pagination from "../Pagination/Pagination";
import Steps from "../Steps/Steps";
import Plans from "../Plans/Plans";
import AddOns from "../AddOns/AddOns";

export default function MultiStepForm() {
  const { form, setProp, setError, ...pagination } = useForm();
  const steps = [
    <Personal form={{ ...form, setProp, setError }} />,
    <Plans form={{ ...form, setProp }} />,
    <AddOns addOns={form.addOns} setProp={setProp} />,
  ];

  return (
    <form className="stepform flex bx-between">
      <Steps currentPage={form.currentPage} />
      <div className="stepform__main flex">
        <div className="stepform__steps">{steps[2]}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="m1 4 3.433 3.433L10.866 1"
          />
        </svg>
        <Pagination currentPage={form.currentPage} pagination={pagination} />
      </div>
    </form>
  );
}
