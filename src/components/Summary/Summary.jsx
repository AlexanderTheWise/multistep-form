import "./Summary.css";
import { plans, addons } from "../data";

export default function Summary({ form: { plan, addOns, isYearly, setProp } }) {
  const peridiocity = isYearly ? "year" : "month";
  const disminutive = isYearly ? "yr" : "mo";

  const getPlanCost = () => {
    const planCost = plans.find(({ name }) => name === plan).monthPrice;

    return isYearly ? planCost * 10 : planCost;
  };
  const getAddOnCost = (addOn) => {
    const addOnCost = addons.find(({ name }) => name === addOn).monthPrice;

    return isYearly ? addOnCost * 10 : addOnCost;
  };
  const getTotalCost = () =>
    (addOns.length > 0
      ? addOns.reduce((accu, current) => accu + getAddOnCost(current), 0)
      : 0) + getPlanCost();

  return (
    <div className="summary">
      <h2 className="step-title">Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <article className="summary__table">
        <div className="header flex itm-center bx-between">
          <div className="summary__plan flex">
            <span>{plan} (Monthly)</span>
            <label>
              Change
              <input
                type="checkbox"
                className="not-show"
                checked={isYearly}
                name="isYearly"
                onChange={setProp}
              />
            </label>
          </div>
          <span>
            ${getPlanCost()}/{disminutive}
          </span>
        </div>
        {addOns.map((addOn) => (
          <div className="summary__add-on row flex itm-center bx-between">
            <p>{addOn}</p>
            <span>
              +${getAddOnCost(addOn)}/{disminutive}
            </span>
          </div>
        ))}
      </article>
      <div className="summary__total row flex itm-center bx-between">
        <p>Total (per {peridiocity})</p>
        <span>
          ${getTotalCost()}/{disminutive}
        </span>
      </div>
    </div>
  );
}
