import { useEffect, useState } from "react";
import companyService from "../services/companyService";
import Company from "../components/Company";
import LeftControl from "../components/LeftControl";
import RightControl from "../components/RightControl";

function Approvals() {
  const [companies, setCompanies] = useState([]);
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  useEffect(() => {
    companyService
      .getAll()
      .then((data) => setCompanies(data))
      .catch((err) => console.log(err));
  }, []);

  const currentCompany = companies.length ? (
    <Company company={companies[currentCompanyIndex]} />
  ) : (
    "Loading..."
  );

  const handleNextCompany = () => {
    return currentCompanyIndex >= companies.length - 1
      ? setCurrentCompanyIndex(0)
      : setCurrentCompanyIndex(currentCompanyIndex + 1);
  };

  const handlePrevCompany = () => {
    return currentCompanyIndex <= 0
      ? setCurrentCompanyIndex(companies.length - 1)
      : setCurrentCompanyIndex(currentCompanyIndex - 1);
  };

  return (
    <main>
      {currentCompany}
      <div className="controllers">
        <LeftControl handleClick={handleNextCompany} />
        <p>Empresa 1 de 2 pendiente por aprobación</p>
        <RightControl handleClick={handlePrevCompany} />
      </div>
    </main>
  );
}

export default Approvals;
