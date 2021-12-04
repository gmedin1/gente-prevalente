import Card from "./Card";
import Grid from "./Grid";
import "../styles/Cards.css";

function Cards({ options, handleNav }) {
  return (
    <section className="cards">
      <Grid>
        {options.map((option, index) => (
          <Card option={option} index={index} handleNav={handleNav} />
        ))}
      </Grid>
    </section>
  );
}

export default Cards;
