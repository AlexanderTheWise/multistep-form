import Personal from "../Personal/Personal.";
import "./MultiStepForm.css";
import useForm from "../../hooks/useForm";
import Pagination from "../Pagination/Pagination";
import Steps from "../Steps/Steps";
import Plans from "../Plans/Plans";
import AddOns from "../AddOns/AddOns";
import Summary from "../Summary/Summary";
import Thanks from "../Thanks/Thanks";

export default function MultiStepForm() {
  const { form, setProp, setError, ...pagination } = useForm();
  const steps = [
    <Personal form={{ ...form, setProp, setError }} />,
    <Plans form={{ ...form, setProp, setError }} />,
    <AddOns form={{ ...form, setProp }} />,
    <Summary form={{ ...form, setProp }} />,
    <Thanks />,
  ];

  return (
    <form className="stepform flex bx-between">
      <Steps
        currentPage={
          form.currentPage === steps.length - 1
            ? steps.length - 2
            : form.currentPage
        }
      />
      <div className="stepform__main flex">
        <div className="stepform__steps">{steps[form.currentPage]}</div>
        {form.currentPage !== steps.length - 1 && (
          <Pagination
            currentPage={form.currentPage}
            pagination={pagination}
            length={steps.length}
          />
        )}
      </div>
    </form>
  );
}
