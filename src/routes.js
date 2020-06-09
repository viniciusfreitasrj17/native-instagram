import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "./screens/Feed";

import camera from "../assets/instagram-icons/camera.png";
import logo from "../assets/instagram-icons/logo.png";
import igtv from "../assets/instagram-icons/igtv.png";
import send from "../assets/instagram-icons/send.png";

const MainNavigator = createStackNavigator(
  {
    Feed,
  },
  {
    defaultNavigationOptions: {
      headerTitle: <Image source={logo} />,
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Image source={camera} />
        </TouchableOpacity>
      ),
      headerRight: (
        <View
          style={{
            flexDirection: "row",
            marginRight: 20,
          }}
        >
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image source={igtv} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image source={send} />
          </TouchableOpacity>
        </View>
      ),
    },
  }
);

export default createAppContainer(MainNavigator);
