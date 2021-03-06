import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import { Ionicons } from "@expo/vector-icons";
import ProjectsScreen from "../screens/ProjectsScreen";
import VideoScreen from "../screens/VideoScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
  Video: VideoScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section" || routeName == "Video") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible: tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CourseStack = createStackNavigator({
  Courses: CoursesScreen
});

CourseStack.navigationOptions = {
  tabBarLabel: "Course",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const ProjectsStack = createStackNavigator({
  Preojects: ProjectsScreen
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CourseStack,
  ProjectsStack
});

export default TabNavigator;
