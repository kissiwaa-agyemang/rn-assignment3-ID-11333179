# rn-assignment3-ID-11333179
React- import React from 'react'; - React: The fundamental library for designing user interfaces in JavaScript. It enables programmers to design UI elements that are reusable.

 2. React Native Components - import { ScrollView, StyleSheet, Image, Text, View, } from'react-native';- View: A container with flexbox layout, style, touch sensitivity, and accessibility features supported.
  - Text: A text-displaying component.
  - TextInput: A component that accepts input from users.
  - Image: An image-displaying component.
  - StyleSheet: A React Native abstraction for style definitions.
  - ScrollView: A container with horizontal and vertical scrolling support for content.

 3. React Native Icons: An element for presenting vector icons from the Ionicons; **import Icon from'react-native-vector-icons/Ionicons';**


  4. App Component: const App = () => {... }; App: The primary functional component of the application. It returns the JSX layout that defines the UI.

  5. Search Section: <View style={styles.searchContainer}>
  It includes a search input and a filter icon.
  The Icon component displays a search icon.
 The TextInput component allows users to input in search terms.

 7. ScrollView <ScrollView style={styles.container}>.
ScrollView: Wraps the entire content to allow scrolling, making the app's content scrollable vertically.
 
 8. Header Section: <View style={styles.header}>
 Includes a greeting message and a user image.
 The greeting and subtitle are displayed within text components.
 The image component displays a user avatar.
 
 9. Categories Section: <Text style={styles.sectionTitle}>Categories</Text>
 Text component for section title.
 ScrollView enables horizontal scrolling of category cards.
 View components for individuals.
