const data = [
  {
    nama: "soerjo",
    status: "boejank",
  },
  {
    nama: "Hasto",
    status: "Berdoa TH",
  },
  {
    nama: "Tomo",
    status: "mahasiswa",
  },
];
data.forEach((data, index) =>
  console.log(`${index}. isinya: ${data.nama} dan ${data.status}`)
);

console.log("isi data: ", data);

const tampung = data.filter((e) => e.nama !== "Hasto");
console.log(tampung);
