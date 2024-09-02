import * as React from "react";
import { View, ScrollView } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonContent from "./components/LittleLemonContent";
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
        >
        <ScrollView>
          <LittleLemonHeader />
          <LittleLemonContent />
        </ScrollView>
      </View>

      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
