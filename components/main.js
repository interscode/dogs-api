import { View } from "react-native";
import { styles } from "../styles/styles";
import DynamicList from "./dynamic-list";
import { useState } from "react";
import { Header } from "./header";
import { Search } from "./search";
import { useDogs } from "../hooks/useDogs";

export default function Main() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState('')
  const { dogs, loading, error, getDogsByBreed, getDogsRandom } = useDogs()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleBreeds = () => {
    getDogsByBreed(text)
  };

  return (
    <View>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Search theme={theme} setText={setText} text={text} setDogs={handleBreeds}/>
      <View style={[styles.bottomContainer, { backgroundColor: theme === "light" ? "#f8f8ff" : "#000" }]}>
        <Pressable onPress={handleRandom} style={styles.buttonRandom}>
          <Text style={styles.buttonText}>Random</Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.body,
          { backgroundColor: theme === "light" ? "#f8f8ff" : "#000" },
        ]}
      >
        <DynamicList theme={theme} data={dogs} />
      </View>
    </View>
  );
}
