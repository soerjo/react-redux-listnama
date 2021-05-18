//Siaping function yang akan di buat / action yang ingin di buat
const store = (value) => ({
  type: "store",
  value,
});

const deleteData = (value) => ({
  type: "deleteData",
  value,
});

//Siapin tempat penyimpnana dan data yang akan di olah
const initialState = {
  users: [
    {
      name: "Soerjo",
      describe:
        "Manusia ciptaan Tuhan yang luarbiasa, terkadang banyak melakukan kesalahan dan sering kali menglami pembentukan Tuhan namun Ia tetap bertahan dan berdiri teguh kepada Tuhan.",
    },
  ],
};

//Siapin reducer yang akan mengolah atau apa saja yang di lakukan dari function itu
export default function reducer(state = initialState, action) {
  console.log("isi dari action: ", action.value);
  switch (action.type) {
    case "store":
      return {
        ...state,
        user: state.users.push(action.value),
      };
    case "deleteData":
      const newValue = state.users.filter((e) => e.name !== action.value);
      return {
        ...state,
        users: newValue,
      };

    default:
      return state;
  }
}

//export functionnya
export { store, deleteData };
