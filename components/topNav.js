import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from './Search';

const TopNav = createMaterialTopTabNavigator();

function MyTopNav() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Settings" component={Search} />
      {/* <Image source={"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}></Image> */}
    </Tab.Navigator>
  );
}

export default MyTopNav