const profile = {
  name: "Auron",
  age: 18,
  cords: {
    lat: 0,
    log: 11,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  cords: { lat, log },
}: { cords: { lat: number; log: number } } = profile;
