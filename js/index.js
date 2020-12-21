/******  */

// Get  IDNumber is String
let IDNumber = document.getElementById("numID").value;

// Get Data From ID Number
let Century = IDNumber.substring(0, 1);
let BirthDay = IDNumber.substring(1, 7);
let Year = IDNumber.substring(1, 3);
let Month = IDNumber.substring(3, 5);
let Day = IDNumber.substring(5, 7);
let Government = IDNumber.substring(7, 9);
let GenderNum = IDNumber.substring(12, 13);

let FullYear;
let Gender;

// Code Of Goverment For ID User
const Gov = {
  "01": "القاهرة",
  "02": "الإسكندرية",
  "03": "بورسعيد",
  "04": "السويس",
  11: "دمياط",
  12: "الدقهلية",
  13: "الشرقية",
  14: "القليوبية",
  15: "كفر الشيخ",
  16: "الغربية",
  17: "المنوفية",
  18: "البحيرة",
  19: "الإسماعيلية",
  21: "الجيزة",
  22: "بني سويف	",
  23: "الفيوم",
  24: "المنيا",
  25: "أسيوط",
  26: "سوهاج",
  27: "قنا",
  28: "أسوان",
  29: "الأقصر",
  31: "البحر الأحمر",
  32: "الوادى الجديد",
  33: "مطروح",
  34: "شمال سيناء",
  35: "جنوب سيناء",
  88: "خارج الجمهورية",
};
//Code For Month of the Year
const Months = {
  "01": "يناير",
  "02": "فبراير",
  "03": "مارس",
  "04": "إبريل",
  "05": "مايو",
  "06": "الدقهلية",
  "06": "يونيو",
  "07": "يوليو",
  "08": "أغسطس ",
  "09": "سبتمبر",
  10: "أكتوبر",
  11: "نوفمبر",
  12: "ديسمبر",
};

// Determine The Gender Of User
const GenderType = function (GenderTypeNum) {
  if (GenderTypeNum >= 0 && GenderTypeNum <= 9) {
    if (GenderNum % 2 === 0) {
      Gender = "أنثي";
      return Gender;
    } else if (GenderNum % 2 === 1) {
      Gender = "ذكر";
      return Gender;
    }
  } else {
    Gender = "غير محدد";
    return Gender;
  }
};

// Set the Full Birth Year of the user
const FullyYear = function (cen) {
  if (cen == 2) {
    FullYear = 19 + Year;
    return FullYear;
  } else if (cen == 3) {
    FullYear = 20 + Year;
    return FullYear;
  } else {
    return "No Century Available";
  }
};

// Print output
console.log(Century, BirthDay, Year, Month, Day, GenderNum, Government);
console.log(Gov[Government], Months[Month]);
console.log(GenderType(GenderNum));
console.log(typeof IDNumber);
console.log(FullyYear(Century));
let Info=`أنت  ${Gender} ومن مواليد شهر ${Months[Month]} ومحافظة ${Gov[Government]} وولدت فى عام ${FullYear}`
console.log(Info);
