import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react-native";

export function Search({ theme, setText, text, setDogs }) {

    return(
        <View
        style={[
          styles.search,
          { backgroundColor: theme === "light" ? "#f8f8ff" : "#000" },
        ]}
      >
        <Text
          style={[
            styles.searchTitle,
            { color: theme === "light" ? "#000" : "#fff" },
          ]}
        >
          Search
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Enter a block name"
            placeholderTextColor={theme === "light" ? "#888" : "#666"}
            onChangeText={setText}
            value={text}
            style={[
              styles.input,
              {
                borderColor: theme === "light" ? "#dadada" : "#414141",
                color: theme === "light" ? "#000" : "#fff",
                flex: 1,
                borderRadius: 50
              },
            ]}
          />

          <TouchableOpacity
            onPress={setDogs}
            style={{justifyContent: 'center', alignItems:'center', paddingLeft: 12}}>
            <IconSearch size={20} color={'#000'}/>
          </TouchableOpacity>

        </View>
      </View>
    );
}