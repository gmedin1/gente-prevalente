import Button from "./Button";
import "../styles/Buttons.css";
import companyService from "../services/companyService";

function Buttons({ company }) {
  const handleReject = () => {
    const obj = { state: "REJECTED" };
    companyService
      .changeState(company.id, obj)
      .catch((err) => console.log(err));
  };

  const handleApprove = () => {
    const obj = { state: "ACCEPTED" };
    companyService
      .changeState(company.id, obj)
      .catch((err) => console.log(err));
  };

  return (
    <div className="buttons-panel">
      <Button
        icon="./approve.svg"
        text="Aprobar Empresa"
        handleClick={handleApprove}
      />
      <Button
        icon="./reject.svg"
        text="Rechazar Empresa"
        handleClick={handleReject}
      />
    </div>
  );
}

export default Buttons;
