const MoveVaccum = (
  _grid_val: IGrid,
  _vaccum_init: IVaccum,
  _instructions: string[]
): void => {
  let grid: IGrid = {
    size_x: _grid_val.size_x,
    size_y: _grid_val.size_y,
  };
  let vaccum: IVaccum = {
    pos_x: _vaccum_init.pos_x,
    pos_y: _vaccum_init.pos_y,
    direction: "N",
  };

  _instructions.map((_inst) => {
    switch (_inst) {
      case "D":
        switch (vaccum.direction) {
          case "N":
            vaccum.direction = "E";
            break;
          case "E":
            vaccum.direction = "S";
            break;
          case "S":
            vaccum.direction = "W";
            break;
          case "W":
            vaccum.direction = "N";
            break;
        }
        break;
      case "G":
        switch (vaccum.direction) {
          case "N":
            vaccum.direction = "W";
            break;
          case "W":
            vaccum.direction = "S";
            break;
          case "S":
            vaccum.direction = "E";
            break;
          case "E":
            vaccum.direction = "N";
            break;
        }
        break;
      case "A":
        switch (vaccum.direction) {
          case "N":
            vaccum.pos_y += 1;
            break;
          case "E":
            vaccum.pos_x += 1;
            break;
          case "S":
            vaccum.pos_y -= 1;
            break;
          case "W":
            vaccum.pos_x -= 1;
            break;
        }
        break;
    }
  });

  let message = `{\nposition.x: ${vaccum.pos_x},\nposition.y: ${vaccum.pos_y}\norientation: ${vaccum.direction}\n}`;

  console.log(
    "\n====================== Aspirateur iHoover ======================\n"
  );
  console.log("Opération fini: ");
  console.log(message);
  console.log(
    "\n================================================================\n"
  );
};

MoveVaccum({ size_x: 10, size_y: 10 }, { pos_x: 5, pos_y: 5, direction: "N" }, [
  "D",
  "A",
  "D",
  "A",
  "D",
  "A",
  "D",
  "A",
  "A",
]);
