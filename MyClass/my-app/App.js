import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { categoriesData } from "../mockData/categories.data";
import { taskData } from "../mockData/task.data";

const App = () => {
  return (
    <SafeAreaView className="bg-[#F7F0E8] flex-1">
      <View className="p-3" style={{ gap: 20 }}>
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-3xl font-bold">Hello, Devs</Text>
            <Text className="font-normal">14 tasks devs</Text>
          </View>

          <TouchableOpacity className="bg-white rounded-full p-2">
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        {/**Search Bar */}
        <View className="flex flex-row justify-between">
          {/**TextInput Box  */}
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 10,
              padding: 5,
            }}
          />
          {/**FIlter Icon */}
          <View className="bg-[#F0522F] p-2 rounded-xl">
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        {/**Categories */}
        <View style={{ gap: 10 }}>
          <Text className="font-bold text-2xl tracking-wide">Categories</Text>

          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View
                style={{ gap: 10 }}
                className="bg-white mr-5 p-5 rounded-xl"
              >
                <View>
                  <Text className="font-bold text-xl tracking-wider">
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                </View>
                <Image source={item.image} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/**Ongoing Tasks */}
        <View style={{ gap: 20 }}>
          <Text className="font-bold text-2xl tracking-wide">Ongoing Task</Text>

          <FlatList
            data={taskData}
            renderItem={({ item }) => (
              <View
                style={{ gap: 10, height: 150 }}
                className="bg-white border border-[#E8D1BA] mr-5 p-5 rounded-xl w-full mb-5 justify-center"
              >
                <View>
                  <Text className="font-medium text-xl tracking-wider">
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
