import fetch from "node-fetch";

const routeHello = (): string => "Hello World!";

const routeAPINames = async (): Promise<string> => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: responseItemType[];
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return err;
  }
  const names = data.map((item) => `id: ${item.id}, name: ${item.name}`);
  return names.join("<br/>");
};

const routeWeather = async (
  query: WeatherQueryInterface
): Promise<WeatherDetailType> => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
  return {
    zipcode: query.zipcode,
    weather: "sunny",
    temp: 180,
  };
};

export { routeHello, routeAPINames, routeWeather };
