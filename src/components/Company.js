import Fields from "./Fields";
import Grid from "./Grid";
import Logo from "./Logo";
import Button from "./Button";
import Buttons from "./Buttons";
import "../styles/Company.css";

function Company({ company }) {
  const { logo } = company;
  const backendUrl = "https://quiet-reef-14327.herokuapp.com/static/";
  const logoUrl = `${backendUrl}${logo.split("/")[3]}`;

  return (
    <>
      <article className="company">
        <Buttons company={company} />
        <Logo src={logoUrl} alt="company logo" />
        <Grid>
          <Fields company={company} />
          <Button icon="./clip.svg" text="Ver archivos adjuntos" />
        </Grid>
      </article>
    </>
  );
}

export default Company;
