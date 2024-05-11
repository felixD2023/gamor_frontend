import Category from "./Category";
import {
  CategoriesContainer,
  CategorySectionStyled,
  HeaderCategories,
} from "./StyledComponents";


//redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { CategoryType } from "../../../../Redux/categoriesSlice";

const CategorySection = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  return (
    <CategorySectionStyled>
      <HeaderCategories>
        <strong>Trending Categories</strong>
      </HeaderCategories>
      <CategoriesContainer>
        {categories.map((category: CategoryType,index:number) => (
          <Category
            key={category.name}
            number={index+1}
            name={category.name}
            isActive={category.isActive}
            image={category.image}
          />
        ))}
        
      </CategoriesContainer>
    </CategorySectionStyled>
  );
};

export default CategorySection;
