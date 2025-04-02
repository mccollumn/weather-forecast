/**
This file allows you to call backend APIs from your frontend of this app.
You can generate various API methods including GET, POST, PUT, and DELETE.
To learn more, check out our documentation: https://wix.to/Iabrrso

Here's how you can call your API from your frontend code:

import { httpClient } from '@wix/essentials';

function MyComponent() {
  const callMyBackend = async () => {
    const res = await httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/weather-data`);
    console.log(await res.text());
  };

  return <button onClick={callMyBackend}>Call backend GET function</button>;
};
*/

import { auth } from "@wix/essentials";
import { secrets } from "@wix/secrets";
import { WEATHER_API_URL } from "../../../consts";

async function getSecretValue(name: string) {
  try {
    const elevatedGetSecretValue = auth.elevate(secrets.getSecretValue);
    const response = await elevatedGetSecretValue(name);
    return response.value;
  } catch (error) {
    console.error("Error retrieving secret:", error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const apiKey = await getSecretValue("API_KEY");
    const { location, tempScale } = await req.json();
    const url = `${WEATHER_API_URL}${location}/next5days?key=${apiKey}&contentType=json&unitGroup=${tempScale}&include=days`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return new Response("Failed to fetch weather data", { status: 500 });
  }
}
