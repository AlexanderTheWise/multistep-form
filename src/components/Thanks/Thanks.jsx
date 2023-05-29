import ThankIcon from "../icons/ThankIcon";
import "./Thanks.css";

export default function Thanks() {
  return (
    <div className="thanks flex itm-center">
      <ThankIcon />
      <h2 className="step-title">Thank you!</h2>
      <p className="thanks__text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
