import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMeals from '../Screens/CategoriesMeals';
import MealsDetailScreen from '../Screens/MealsDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Meals: CategoriesMeals,
  MealDetails: MealsDetailScreen,
});

export default createAppContainer(MealsNavigator);
