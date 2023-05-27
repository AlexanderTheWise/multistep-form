import "./Personal.css";

export default function Personal({
  form: {
    name,
    email,
    phone,
    setProp,
    personalErrors: { emptyError },
    setError,
  },
}) {
  const LabelAndError = ({ children, prop }) => (
    <div className="flex bx-between">
      <span>{children}</span>
      <span hidden={prop || !emptyError} className="personal__error">
        This field is required
      </span>
    </div>
  );

  const handleOnFocus = () => {
    setError(false, "personalErrors", "emptyError");
    setError(false, "personalErrors", "invalidError");
  };

  const handleOnBlur = (event) => {
    const areValid = Array.from(
      event.currentTarget.querySelectorAll("input")
    ).every((element) => element.checkValidity());

    setError(!areValid, "personalErrors", "invalidError");
  };

  return (
    <fieldset
      className="personal"
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <legend>Personal info</legend>
      <p>Please provide your name, email address, and phone number.</p>
      <label
        className={`personal__entry personal__entry${
          name || !emptyError ? "" : "--error"
        }`}
      >
        <LabelAndError prop={name}>{"Name"}</LabelAndError>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          value={name}
          onChange={setProp}
          pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)*$"
        />
      </label>
      <label
        className={`personal__entry personal__entry${
          email || !emptyError ? "" : "--error"
        }`}
      >
        <LabelAndError prop={email}>{"Email Address"}</LabelAndError>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          value={email}
          onChange={setProp}
        />
      </label>
      <label
        className={`personal__entry personal__entry${
          phone || !emptyError ? "" : "--error"
        }`}
      >
        <LabelAndError prop={phone}>{"Phone Number"}</LabelAndError>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          name="phone"
          value={phone}
          onChange={setProp}
          pattern="^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$"
        />
      </label>
    </fieldset>
  );
}
