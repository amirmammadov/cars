export const INITIAL_DATA = {
  tabOne: "hamısı",
  tabTwo: "hamısı",
  brand: "",
  model: [],
  banType: [],
  city: "",
  minPrice: "",
  maxPrice: "",
  currency: "AZN",
  minYear: { title: "" },
  maxYear: { title: "" },
  code: "",
};

export const tabsDefaultValues = {
  tabOne: "all",
  tabTwo: "all",
  tabThree: "all",
};

export const filterTabOne = {
  all: "hamısı",
  new: "yeni",
  old: "sürülmüş",
};

export const newPromotionRadioValues = [
  {
    id: 1,
    value: "new",
    radioName: "isNew",
    text: "Yeni",
  },
  {
    id: 2,
    value: "old",
    radioName: "isNew",
    text: "Sürülmüş",
  },
];

export const filtersRadioValues = [
  {
    id: 1,
    value: "all",
    radioName: "isNew",
    text: "Hamısı",
  },
  {
    id: 2,
    value: "new",
    radioName: "isNew",
    text: "Yeni",
  },
  {
    id: 3,
    value: "old",
    radioName: "isNew",
    text: "Sürülmüş",
  },
];

export const filterTabTwo = {
  all: "hamısı",
  credit: "kredit",
  barter: "barter",
};

export const filterTabThree = {
  all: "Önə çəkilmiş",
  other: "Statistik",
};

export const brandOptions = [
  { title: "BMW" },
  { title: "Mercedes-Benz" },
  { title: "Toyota" },
];

export const modelOptions = [
  { title: "1-series" },
  { title: "116" },
  { title: "118" },
];

export const salonOptions = [
  { title: "SUV" },
  { title: "Compact Car" },
  { title: "Luxury Car" },
  { title: "Sedan" },
  { title: "Hatchback" },
  { title: "Pickup" },
  { title: "Van" },
  { title: "Convertible" },
];

export const banOptions = [{ title: "Pikap" }, { title: "Sedan" }];

export const cityOptions = [
  { title: "Bakı" },
  { title: "Gəncə" },
  { title: "Xankəndi" },
];

export const yearOptions = [
  { title: "2021" },
  { title: "2022" },
  { title: "2023" },
];

export const carTypes = [
  { name: "SUV", image: "/carTypes/suv.svg", id: 1 },
  { name: "Kompakt", image: "/carTypes/compact.svg", id: 2 },
  { name: "Sport maşın", image: "/carTypes/luxury.svg", id: 3 },
  { name: "Sedan", image: "/carTypes/sedan.svg", id: 4 },
  { name: "Hetçbek", image: "/carTypes/hatchback.svg", id: 5 },
  {
    name: "Kabriolet",
    image: "/carTypes/convertible.svg",
    id: 6,
  },
  { name: "Pikap", image: "/carTypes/pickup.svg", id: 7 },
  { name: "Van/Minibus", image: "/carTypes/van.svg", id: 8 },
];

export const carNames = [];

export const typeOfFuel = [
  {
    title: "Benzin",
  },
  {
    title: "Dizel",
  },
  {
    title: "Hibrid",
  },
];

export const fuelConsumption = [
  {
    title: "51/100 km",
  },
  {
    title: "61/100 km",
  },
  {
    title: "71/100 km",
  },
];

export const gearBox = [
  {
    title: "Mexaniki",
  },
  {
    title: "Avtomat",
  },
  {
    title: "Avtomat(Robot)",
  },
];

export const transmission = [
  {
    title: "Ön",
  },
  {
    title: "Arxa",
  },
  {
    title: "Tam",
  },
];

export const parkingSensor = [
  {
    title: "Ön",
  },
  {
    title: "Arxa",
  },
  {
    title: "360 kamera",
  },
];

export const speedControl = [
  {
    title: "Hamısı",
  },
  {
    title: "Sürət kontrol düzənləməsi",
  },
  {
    title: "Adaptiv kontrol düzənləməsi",
  },
];

export const innerMaterial = [
  {
    title: "Alkantra",
  },
  {
    title: "Parça",
  },
  {
    title: "Tam dəri",
  },
];

export const airBags = [
  {
    title: "Hamısı",
  },
  {
    title: "Sürcü hava yastığı",
  },
  {
    title: "Ön təhlükəsizlik yastığı",
  },
];

export const seatNumbers = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
];

export const sellerType = [
  {
    title: "Şəxsi satıcı",
  },
  {
    title: "Satıcı",
  },
  {
    title: "Şirkət",
  },
];

export const ownNumbers = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
];

export const outerColors = [
  {
    title: "Qara",
  },
  {
    title: "Bənövşəyi",
  },
  {
    title: "Yaşıl",
  },
  {
    title: "Gümüşü",
  },
  {
    title: "Qəhvəyi",
  },
  {
    title: "Gold",
  },
  {
    title: "Narıncı",
  },
  {
    title: "Ağ",
  },
  {
    title: "Mavi",
  },
  {
    title: "Boz",
  },
  {
    title: "Qırmızı",
  },
  {
    title: "Metalik",
  },
  {
    title: "Sarı",
  },
  {
    title: "Bej",
  },
];

export const innerColors = [
  {
    title: "Qara",
  },
  {
    title: "Bənövşəyi",
  },
  {
    title: "Yaşıl",
  },
  {
    title: "Gümüşü",
  },
];

export const supplies = [
  {
    id: 1,
    title: "ABS",
  },
  {
    id: 3,
    title: "Mərkəzi qapanma",
  },
  {
    id: 5,
    title: "Lyuk",
  },
  {
    id: 8,
    title: "Yağış sensoru",
  },
  {
    id: 9,
    title: "Ksenon lampalar",
  },
  {
    id: 10,
    title: "Yüngül lehimli disklər",
  },
  {
    id: 11,
    title: "Qızdırılan ön şüşə",
  },
  {
    id: 18,
    title: "Bluetooth",
  },
  {
    id: 19,
    title: "Dəri sükan",
  },
  {
    id: 20,
    title: "Oturacaqların havalandırılması",
  },
  {
    id: 22,
    title: "Oturacaqların isidilməsi",
  },
  {
    id: 25,
    title: "Kondisioner",
  },
];

export const others = [
  {
    id: 1,
    title: "Vuruğu yoxdur",
  },
  {
    id: 2,
    title: "Rənglənməyib",
  },
  {
    id: 3,
    title: "Qəzalı və ya ehtiyat hissələr üçün",
  },
];

export const forMarket = [
  {
    id: 1,
    title: "Amerika",
  },
  {
    id: 2,
    title: "Avropa",
  },
  {
    id: 3,
    title: "Digər",
  },
];

export const moreOptionsIterator = [
  {
    id: 1,
    options: yearOptions,
    holder: "İl",
    keyValue: "year",
  },
  {
    id: 2,
    options: typeOfFuel,
    holder: "Yanacaq növü",
    keyValue: "fuelType",
  },
  {
    id: 3,
    options: fuelConsumption,
    holder: "Yanacaq sərfiyyatı",
    keyValue: "fuelConsumption",
  },
  {
    id: 4,
    options: gearBox,
    holder: "Sürətlər qutusu",
    keyValue: "gearBox",
  },
  {
    id: 5,
    options: transmission,
    holder: "Ötürücü",
    keyValue: "transmission",
  },
  {
    id: 6,
    options: parkingSensor,
    holder: "Parking sensoru",
    keyValue: "pankingSensor",
  },
  {
    id: 7,
    options: speedControl,
    holder: "Sürət kontrol düzənləməsi",
    keyValue: "speedControl",
  },
  {
    id: 8,
    options: innerMaterial,
    holder: "Daxili material",
    keyValue: "innerMaterial",
  },
  {
    id: 9,
    options: seatNumbers,
    holder: "Oturacaq sayı",
    keyValue: "seatNumbers",
  },
  {
    id: 10,
    options: sellerType,
    holder: "Satıcı",
    keyValue: "sellerType",
  },
  {
    id: 11,
    options: forMarket,
    holder: "Yığıldığı bazar",
    keyValue: "forMarket",
  },
  {
    id: 12,
    options: innerColors,
    holder: "Daxili rəng",
    keyValue: "innerColor",
  },
  {
    id: 12,
    options: outerColors,
    holder: "Xarici rəng",
    keyValue: "outerColor",
  },
];

export const locationOfCity =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853003306!2d49.69014890705255!3d40.394737007992184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1698083147829!5m2!1sen!2saz";

export const ITEMS_PER_PAGE_FEATURED = 8;
export const ITEMS_PER_PAGE_COMPANY = 8;
export const ITEMS_PER_PAGE_NEW = 20;
export const ITEMS_PER_PAGE_SIMILAR = 8;

export const companies = [
  { title: "AutoStyle" },
  { title: "West Cost" },
  { title: "Car Fanatics" },
];

export const foreignCountries = [
  { title: "Almaniya" },
  { title: "Rusiya" },
  { title: "Türkiyə" },
  { title: "Gürcüstan" },
];

export const rating = [
  { title: 1 },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  { title: 5 },
];

export const accountAsideBtns = ["advert", "account", "offer", "logout"];

export const comparisonTitles = [
  "Həcm",
  "Yürüyüş",
  "İl",
  "Vəziyyəti",
  "Ban növü",
  "Güc",
  "Yanacaq növü",
  "Yanacaq sərfiyyatı",
  "Sahib",
  "Transmissiya",
  "Ötürücü",
  "Oturacaq sayı",
  "Rəng",
];

export const comparisonValues = {
  volume: "5.5 L",
  mileage: "110,000 km",
  year: 2021,
  condition: "Sürülmüş",
  body_type: "Sedan",
  power: 263,
  fuel_type: "Dizel",
  fuel_consumption: "71/100 km",
  owner: 2,
  transmission: "Avtomat",
  drive: "Ön",
  seat_count: 5,
  color: "Qara",
};

export const comparisonValuesAz = {
  volume: "Həcm",
  mileage: "Yürüyüş",
  year: "İl",
  condition: "Vəziyyəti",
  body_type: "Ban növü",
  power: "Güc",
  fuel_type: "Yanacaq növü",
  fuel_consumption: "Yanacaq sərfiyyatı",
  owner: "Sahib",
  transmission: "Transmissiya",
  drive: "Ötürücü",
  seat_count: "Oturacaq sayı",
  color: "Rəng",
};
