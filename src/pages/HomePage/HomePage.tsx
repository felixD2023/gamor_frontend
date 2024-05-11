
import MainSection from "./components/MainSection/MainSection"
import LeftSection from "./components/LeftSection/LeftSection"
import CentralSection from "./components/CentralSection/CentralSection"
import RightSection from "./components/RightSection/RightSection"
import CategorySection from "./components/Category Section/CategorySection"

const HomePage = () => {
  return (
    <div>
      <MainSection >
        <LeftSection/>
        <CentralSection/>
        <RightSection />
      </MainSection>
      <CategorySection/>
    </div>
  )
}

export default HomePage
