import { plans } from "../data";
import "./Plans.css";

export default function Plan({
  form: { isYearly, setProp, plan, setError, planError },
}) {
  return (
    <fieldset
      className="plan"
      onFocus={() => {
        setError(false, "planError");
      }}
    >
      <legend>Select your plan</legend>
      <p>You have the option of monthly or yearly billing</p>
      <div className="plan__entries flex">
        {plans.map(({ icon, name, monthPrice }) => (
          <label className="plan__entry ipt-checkbox flex" key={name}>
            <input
              type="radio"
              name="plan"
              value={name}
              className="not-show"
              checked={plan === name}
              onChange={setProp}
            />
            {icon}
            <div className="plan__info flex">
              <div className="plan__name">{name}</div>
              <div className="plan__price ">
                ${isYearly ? monthPrice * 10 : monthPrice}/
                {isYearly ? "yr" : "mo"}
              </div>
              {isYearly && <div className="rather">2 months free</div>}
            </div>
          </label>
        ))}
      </div>
      <div className="plan__payment flex center">
        <span className={isYearly ? "" : "rather"}>Monthly</span>
        <label className="plan__switch">
          <input
            type="checkbox"
            className="not-show"
            checked={isYearly}
            name="isYearly"
            onChange={setProp}
          />
          <div className="plan__switch__slider"></div>
        </label>
        <span className={isYearly ? "rather" : ""}>Yearly</span>
      </div>
      {planError && <span className="plan__error">You must select a plan</span>}
    </fieldset>
  );
}
