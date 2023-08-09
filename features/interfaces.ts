interface CarProps extends SummaryProp {
  model: string;
  year: number;
  drivable: boolean;
}

interface SummaryProp {
  summary?(): string;
}

const car = {
  model: "ferrari",
  year: 2023,
  drivable: true,
  summary(): string {
    return "...here will be information about the item...";
  },
};

const drink = {
  model: "blue",
  year: 2024,
  drivable: true,
};

const itemLog = (item: CarProps): void => {
  console.log(`the name of the item is ${item.model}
  the year that it was created is ${item.year}
  is the item drivable ${item.drivable}
  summary about the item ${item.summary()}
  `);
};

itemLog(car);
itemLog(drink);
