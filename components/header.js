import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { IconMoon, IconSun } from "@tabler/icons-react-native";

export function Header({ theme, toggleTheme }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>Dogs API</Text>
      </View>
      <Pressable onPress={toggleTheme} style={{ padding: 2 }}>
        {theme !== "light" ? (
          <IconSun size={25} color="#fff" />
        ) : (
          <IconMoon size={25} color="#fff" />
        )}
      </Pressable>
    </View>
  );
}
