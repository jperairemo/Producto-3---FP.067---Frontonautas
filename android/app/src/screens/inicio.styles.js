import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7D7B5",
    paddingHorizontal: 20,
    paddingTop: 40
  },

  header: {
    backgroundColor: "#D9792B",
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },

  btnNuevoJugador: {
    backgroundColor: "#D9792B",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  card: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },

  avatar: {
    backgroundColor: "#F7D7B5",
    padding: 12,
    borderRadius: 40
  },

  avatarText: {
    fontSize: 22
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold"
  },

  posicion: {
    fontSize: 14,
    color: "gray"
  },

  deleteIcon: {
    backgroundColor: "#FFD6D6",
    padding: 10,
    borderRadius: 10,
    fontSize: 18
  }
});
