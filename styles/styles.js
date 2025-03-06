import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3781cd",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 350,
    height: "100%",
  },
  item: {
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "48%",
    paddingVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3781cd",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottomContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  buttonRandom: {
    height: 40,
    backgroundColor: "#3781cd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "center",
  }
});
