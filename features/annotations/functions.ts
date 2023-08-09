//arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

//anonymous function
const anonymous = function anonymus(a: number, b: number): number {
  return a - b;
};

const todaysWeather = {
  day: new Date(),
  weather: "sunny",
};

const func = (todaysWeather: { day: Date; weather: string }): void => {
  console.log(todaysWeather.weather);
  console.log(todaysWeather.day);
};
func(todaysWeather);

const weatherFunc = ({
  day,
  weather,
}: {
  day: Date;
  weather: string;
}): void => {
  console.log(weather);
  console.log(day);
};
weatherFunc(todaysWeather);
