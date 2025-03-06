import { FlatList, View, Text, Image } from "react-native";
import { styles } from "../styles/styles";

export default function DynamicList({ theme, data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Item
          image={item}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
}

function Item({ image, theme }) {
  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#000",
          shadowColor: theme === "light" ? "#000" : "#fff",
          borderColor: theme === "light" ? "#e4e4e7" : "#333",
          alignItems: 'center'
        },
      ]}
    >

      <Image style={styles.image} source={{ uri: image }} />

    </View>
  );
}
