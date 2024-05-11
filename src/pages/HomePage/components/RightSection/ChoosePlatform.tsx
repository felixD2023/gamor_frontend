import Platform from "./Platform";

//styled-components
import { ChoosePlatformContainer } from "./StyledComponents";

//redux
import { useSelector } from "react-redux";
import { PlatformType } from "../../../../Redux/platformsSlice";
import { RootState } from "../../../../Redux/store";

const ChoosePlatform = () => {
  const platformsList = useSelector((state: RootState) => state.platforms.platforms);

  return (
    <ChoosePlatformContainer>
      {platformsList.map((platform: PlatformType) => 
        <Platform key={platform.name} active={platform.isActive} text={platform.name} icon={platform.icon} />
      )}
    </ChoosePlatformContainer>
  );
};

export default ChoosePlatform;
