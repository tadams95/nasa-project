const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  //data is read by the fs.createReadStream
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      //on any piece of data, it is pushed to the habitablePlanets array
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => {
        return planet["kepler_name"];
    }));
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log("done");
  });

module.exports = {
    planets: habitablePlanets,
}
