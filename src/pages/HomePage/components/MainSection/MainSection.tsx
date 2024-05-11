import React from "react"
import { MainSectionStyled } from "./StyledComponents"

type MainSectionProps = {
  children: React.ReactNode
}

const MainSection = ({children}:MainSectionProps) => {
  return (
    <MainSectionStyled>
      {children}
    </MainSectionStyled>
  )
}

export default MainSection;
