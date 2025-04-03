import { local } from "@wix/site-storage";
import { httpClient } from "@wix/essentials";
import { TempScale } from "@/types";

export const getFavoriteLocation = async () => {
  try {
    // TODO: This fails in dev. Hoping it works in prod.
    const favoriteLocation = await local.getItem("favoriteLocation");
    return favoriteLocation;
  } catch (error) {
    console.error("Error getting favorite location:", error);
    return null;
  }
};

export const setFavoriteLocation = async (location: string) => {
  await local.setItem("favoriteLocation", location);
};

export const removeFavoriteLocation = async () => {
  await local.removeItem("favoriteLocation");
};

export const getData = async (location: string, tempScale: TempScale) => {
  return await httpClient.fetchWithAuth(
    `${import.meta.env.BASE_API_URL}/weather-data`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, tempScale }),
    }
  );
};
