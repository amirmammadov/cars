// import Compact from "../assets/carTypes/Compact car side view silhouette 1.svg";
// import Luxury from "../assets/carTypes/Luxury car side view silhouette 1.svg";
// import SUV from "../assets/carTypes/Suv car side view silhouette 1.svg";
// import Pickup from "../assets/carTypes/Pickup car side view silhouette 1.svg";
// import Sedan from "../assets/carTypes/Sedan car side view silhouette 1.svg";
// import Hatchback from "../assets/carTypes/Hatchback side view silhouette 1.svg";
// import Convertible from "../assets/carTypes/Convertible car side view silhouette 1.svg";
// import Van from "../assets/carTypes/Van side view silhouette 1.svg";

export const brands = [
  "Mercedes",
  "Toyota",
  "Kia",
  "Hundai",
  "Ferrari",
  "Chevrolet",
  "BMW",
];

export const models = ["1-series", " . 116", " . 118"];
export const cities = [
  "Nakhchivan",
  "Shirvan",
  "Shirvan",
  "Shaki",
  "Ganja",
  "Sumqayit",
  "Sumqayit",
  "Baku",
  "Mingachevir",
  "Yevlakh",
  "Baku",
  "Nakhchivan",
  "Baku",
  "Ganja",
  "Shaki",
  "Shaki",
  "Ganja",
  "Sumqayit",
  "Shirvan",
  "Barda",
  "Mingachevir",
  "Nakhchivan",
  "Nakhchivan",
  "Ganja",
  "Shirvan",
  "Yevlakh",
  "Barda",
  "Shirvan",
  "Ganja",
  "Shirvan",
  "Baku",
  "Ganja",
  "Shirvan",
  "Ganja",
  "Ganja",
  "Nakhchivan",
  "Ganja",
  "Sumqayit",
  "Barda",
  "Lankaran",
  "Baku",
  "Baku",
  "Barda",
  "Mingachevir",
  "Nakhchivan",
  "Yevlakh",
  "Nakhchivan",
  "Barda",
  "Lankaran",
  "Shirvan",
];
export const seatCount = [2, 3, 4, 5, 6, 8, 12];
export const ownercount = [1, 2, 3, 4];
export const years = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
  2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2003, 2002, 2001, 2000, 1999,
  1998,
];
export const fuelConsumption = ["51/100 km", "61/100 km", "71/100 km"];
export const externalColors = [
  { id: 1, name: "Qara", color: "#000000" },
  { id: 2, name: "Bənövşəyi", color: "#9361FF" },
  { id: 3, name: "Yaşıl", color: "#7EBA30" },
  { id: 4, name: "Gümüşü", color: "#c0c0c0" },
  { id: 5, name: "Qəhvəyi", color: "#855E1B" },
  { id: 6, name: "Gold", color: "#ffd700" },
  { id: 7, name: "Narıncı", color: "#FF7F23" },
  { id: 8, name: "Ağ", color: "#fff5f5" },
  { id: 9, name: "Mavi", color: "#376EDB" },
  { id: 10, name: "Boz", color: "#ABABAB" },
  { id: 11, name: "Qırmızı", color: "#FF4040" },
  { id: 12, name: "Metalik", color: "#DFDFDF" },
  { id: 13, name: "Sarı", color: "#F5D300" },
  {
    id: 14,
    name: "Bej",
    color: "#DBB67F",
  },
];
export const internalColors = [
  { id: 1, name: "Qara", color: "#000000" },

  { id: 10, name: "Boz", color: "#ABABAB" },

  { id: 5, name: "Qəhvəyi", color: "#855E1B" },
  {
    id: 14,
    name: "Bej",
    color: "#DBB67F",
  },
  { id: 8, name: "Digər", color: "#FFFFFF" },
];

export const transmissions = [
  "Mexaniki",
  "Avtomat",
  "Avtomat(robot)",
  " Avtomat(variator)",
  "Reduktor",
];
export const fuelTypes = [
  "Benzin",
  "Dizel",
  "Elektrik",
  "Hibrid",
  "Plug-in hibrid",
];
// export const showRoom = [
//   { name: "SUV", image: SUV, id: 1 },
//   { name: "Compact Car", image: Compact, id: 2 },
//   { name: "Luxury Car", image: Luxury, id: 3 },
//   { name: "Sedan", image: Sedan, id: 4 },
//   { name: "Hatchback", image: Hatchback, id: 5 },
//   { name: "Convertible", image: Convertible, id: 6 },
//   { name: "Pickup", image: Pickup, id: 7 },
//   { name: "Van", image: Van, id: 8 },
// ];
export const accessories = [
  "Tv",
  "Siqnalizasiya sistemi",
  "Dəri sükan",
  "Oturacaqların havalandırılması",
  "USB ports",
  "Təcili zəng sistemi",
  "Bluetooth",
  "Toxunma ekran",
  "Elektrik pəncərələr",
  "Oturacaqların isidilməsi",
  "Naviqasiya sistemi",
  "WI-FI",
  "Kondisioner",
];

export const status = [ {id:1,label:"Hamısı",value:"all"},{id:2,label:"Yeni",value:"new"},{ id:3,label:"Sürülmüş",value:"old"}];
export const seller = [{id:1,label:"Hamısı",value:"all"},{ id:2,label:"Satıcı",value:"seller"}, {id:3,label:"Şəxsi satıcı",value:"private"}];
export const rating=[
  {
    id:1,
    label:"3",value:3
  }, {
    id:2,
    label:"4",value:4
  }, {
    id:3,
    label:"5",value:5
  },
]
export const comparisons=[
  {id:1,label:"Hamısı",value:"all"},
  {id:2,label:"Oxşarlıqlar",value:"similar"},
  {id:3,label:"Fərqlər",value:"difference"},
]