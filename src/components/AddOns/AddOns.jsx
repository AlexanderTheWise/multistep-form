import { addons } from "../data";
import "./AddOns.css";

export default function AddOns({ form: { setProp, addOns, isYearly } }) {
  return (
    <fieldset className="add-ons">
      <legend>Pick add-ons</legend>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons__entries flex">
        {addons.map(({ name, description, monthPrice }) => (
          <label
            className="add-ons__add-on ipt-checkbox flex itm-center"
            key={name}
          >
            <input
              type="checkbox"
              className="not-show"
              name="addOns"
              value={name}
              checked={addOns.includes(name)}
              onChange={setProp}
            />
            <div className="add-ons__info flex">
              <span className="add-ons__name">{name}</span>
              <span className="add-ons__description">{description}</span>
            </div>
            <div className="add-ons__price">
              +${isYearly ? monthPrice * 10 : monthPrice}/
              {isYearly ? "yr" : "mo"}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
