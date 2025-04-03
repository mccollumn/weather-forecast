import React from "react";
import { IconButton, Image, Tooltip, Box } from "@wix/design-system";
import {
  getFavoriteLocation,
  setFavoriteLocation,
  removeFavoriteLocation,
} from "../../utils";

interface FavoriteLocationProps {
  currentLocation: string;
}

export const FavoriteLocation = ({
  currentLocation,
}: FavoriteLocationProps) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [favoriteLocation, setFavoriteLocationState] = React.useState<
    string | null
  >(null);

  console.log("favoriteLocation", favoriteLocation);
  console.log("currentLocation", currentLocation);

  const handleClick = async () => {
    if (isFavorite) {
      await removeFavoriteLocation();
      setIsFavorite(false);
    } else {
      await setFavoriteLocation(currentLocation);
      setIsFavorite(true);
    }
  };

  React.useEffect(() => {
    const loadFavoriteLocation = async () => {
      const favoriteLocationValue = await getFavoriteLocation();
      setFavoriteLocationState(favoriteLocationValue);
    };
    loadFavoriteLocation();
  }, []);

  React.useEffect(() => {
    if (currentLocation === favoriteLocation) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [currentLocation, favoriteLocation]);

  return (
    <Box className="favorite-location" align="center">
      <Tooltip
        content={isFavorite ? "Remove as favorite" : "Add as favorite"}
        placement="auto"
        size="small"
        fluid
      >
        <IconButton
          size="tiny"
          onClick={handleClick}
          aria-label="favorite"
          priority="secondary"
          skin="light"
        >
          {isFavorite ? (
            <Image src="https://img.icons8.com/?size=100&id=85338&format=png&color=000000" />
          ) : (
            <Image src="https://img.icons8.com/?size=75&id=85033&format=png&color=000000" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
