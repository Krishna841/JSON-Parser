(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { CmpApi } = require("@iabtechlabtcf/cmpapi");
const {TCModel, TCString, GVL} = require("@iabtechlabtcf/core");
const cmpstub = require('@iabtcf/stub');

var injectedOptions = {"isIabTcf": true,"flow": "OPT_IN", "key": "23c88f5b13ad41679a5914e0c559419d", "timeoutSeconds": 10, "scripts": {}, "frames": {}, "cookies": {"new": "C003"}, "pixels": {"//static.ads-twitter.com/uwt.js": "C002", "https://a.quora.com/qevents.js": "C002", "https://connect.facebook.net/en_US/fbevents.js": "C002", "https://snap.licdn.com/li.lms-analytics/insight.min.js": "C002", "edge.fullstory.com/s/fs.js": "C004", "https://cdn.segment.com/analytics.js/v1": "C004", "'squarespace-common'": "C004", "'squarespace-performance'": "C004", "//www.google-analytics.com/analytics.js": "C004", "//static.hotjar.com/c/hotjar-": "C004", "ga('send'": "C004", "function gtag()": "C004"}};
const CUSTOMIZATION = {"remove_privado_branding": false, "banner": {"language": [{"name": "English (US)", "id": "englist"}], "noticeTextColor": "#000", "noticeFontStyle": "normal", "noticeText": "By Clicking on \"Accept\", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.", "type": "banner", "position": "bottom", "backgroundColor": "#fff", "vendorsCTA": {"visibility": true, "text": "Vendors Tab!", "color": "#ff8946", "buttonType": "filled", "buttonColor": "#fff", "fontStyle": "normal",}, "manageSettingsCTA": {"visibility": true, "text": "Cookie Settings", "color": "#1D2FB5", "buttonType": "link", "buttonColor": "#1D2FB5", "fontStyle": "normal"}, "acceptCTA": {"visibility": true, "text": "Accept All", "color": "#fff", "buttonType": "filled", "buttonColor": "#1D2FB5", "fontStyle": "normal"}, "denyCTA": {"visibility": true, "text": "Deny All", "color": "#fff", "buttonType": "filled", "buttonColor": "#1D2FB5", "fontStyle": "normal"}}, "manageCookieBox": {"type": "sidepanel", "background": "#FFFFFF", "textColor": "#000000", "mainButtonColor": "#1D2FB5", "noticeTextColor": "#000000", "noticeBoxStyle": "normal", "noticeText": "When you visit web sites, they may store or retrieve data in your web browser. This storage is often necessary for basic functionality of the web site or the storage may be used for the purposes of marketing, analytics, and personalization of the web site such as storing your preferences.", "noticeFonStyle": "normal"}, "metaDetails": {"manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"}};
const CATEGORIZATION = [{"name": "Functional", "key": "C003", "description": "These cookies help us personalize our website based on your usage.", "state": 0, "cookies": [{"name": "new", "description": "", "hostname": "lol", "lifespan": "persistent", "details": ""}]}];
const VENDORS = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "39", "40", "41", "42", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "55", "56", "57", "58", "59", "60", "61", "62", "63", "65", "66", "67", "68", "69", "70", "71", "72", "73", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98", "100", "101", "102", "104", "108", "109", "110", "111", "114", "115", "119", "120", "122", "124", "126", "127", "128", "129", "130", "131", "132", "133", "134", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "167", "168", "170", "173", "174", "177", "178", "179", "183", "184", "185", "190", "192", "193", "194", "195", "196", "198", "199", "200", "202", "203", "205", "206", "208", "209", "210", "211", "212", "213", "215", "216", "217", "218", "223", "224", "226", "227", "228", "230", "231", "232", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "246", "248", "249", "250", "251", "252", "253", "254", "255", "256", "259", "261", "262", "263", "264", "265", "266", "270", "272", "273", "274", "275", "276", "277", "278", "279", "280", "281", "282", "284", "285", "289", "290", "293", "294", "295", "297", "298", "299", "301", "302", "303", "304", "308", "310", "311", "312", "314", "315", "316", "317", "318", "319", "321", "323", "325", "326", "328", "329", "331", "333", "334", "335", "336", "337", "343", "345", "347", "349", "350", "351", "354", "358", "359", "360", "361", "365", "368", "371", "373", "374", "375", "377", "378", "380", "381", "382", "384", "385", "387", "388", "394", "397", "402", "404", "408", "409", "410", "412", "413", "415", "416", "418", "422", "423", "424", "427", "428", "429", "430", "431", "434", "435", "436", "438", "439", "440", "444", "447", "448", "450", "452", "454", "455", "458", "459", "461", "462", "466", "467", "468", "469", "471", "473", "475", "479", "482", "484", "486", "488", "490", "491", "493", "495", "496", "497", "498", "501", "502", "505", "506", "507", "508", "509", "511", "512", "516", "517", "519", "520", "521", "524", "527", "528", "530", "531", "534", "535", "536", "539", "541", "543", "544", "545", "546", "547", "549", "550", "553", "554", "556", "559", "561", "565", "568", "569", "570", "571", "572", "573", "574", "577", "578", "579", "580", "581", "584", "587", "590", "591", "593", "596", "597", "598", "599", "601", "602", "606", "607", "609", "610", "612", "613", "614", "615", "617", "618", "620", "621", "624", "625", "626", "628", "630", "631", "638", "639", "644", "645", "646", "647", "648", "649", "650", "652", "653", "654", "655", "656", "657", "658", "659", "662", "663", "664", "665", "666", "667", "668", "670", "671", "672", "673", "674", "675", "676", "677", "678", "681", "682", "683", "684", "685", "686", "687", "688", "690", "691", "694", "697", "699", "702", "703", "706", "707", "708", "709", "711", "712", "713", "714", "715", "716", "717", "718", "719", "720", "721", "722", "723", "724", "725", "726", "727", "728", "729", "730", "732", "733", "734", "735", "736", "737", "738", "739", "740", "741", "742", "743", "744", "745", "746", "747", "748", "749", "750", "751", "753", "754", "755", "756", "757", "758", "759", "760", "761", "762", "763", "764", "765", "766", "767", "768", "769", "770", "771", "772", "773", "774", "775", "776", "777", "778", "779", "780", "781", "782", "783", "784", "785", "786", "787", "788", "789", "790", "791", "792", "793", "794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "812", "813", "814", "815", "816", "817", "818", "819", "820", "821", "822", "823", "824", "825", "826", "827", "828", "829", "830", "831", "832", "833", "834", "835", "836", "837", "838", "839", "840", "841", "842", "843", "844", "845", "846", "847", "848", "849", "850", "851", "852", "853", "854", "855", "856", "857", "858", "859", "860", "861", "862", "863", "864", "865", "866", "867", "868", "869", "870", "871", "872", "873", "874", "875", "876", "877", "878", "879", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889", "890", "891", "892", "893", "894", "895", "896", "897", "898", "899", "900", "901", "902", "903", "904", "905", "906", "907", "908", "909", "910", "911", "912", "913", "914", "915", "916", "917", "918", "919", "920", "921", "922", "923", "924", "925", "926", "927", "928", "929", "930", "931", "932", "933", "934", "935", "936", "937", "938", "939", "940", "941", "942", "943", "944", "945", "946", "947", "948", "949", "950", "951", "952", "953", "954", "955", "956", "957", "958", "959", "960", "961", "962", "963", "964", "965", "966", "967", "968", "969", "970", "971", "972", "973", "974", "975", "976", "977", "978", "979", "980", "981", "982", "983", "984", "985", "986", "987", "988", "989", "990", "991", "992", "993", "994", "995", "996", "997", "998", "999", "1000", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1022", "1023", "1024", "1025", "1026", "1027", "1028", "1029", "1030", "1031", "1032", "1033", "1034", "1035", "1036", "1037", "1038", "1039", "1040", "1041", "1042", "1043", "1044", "1045", "1046", "1047", "1048", "1049", "1050", "1051", "1052", "1053", "1054", "1055", "1056", "1057", "1058", "1059", "1060", "1061", "1062", "1063", "1064", "1065", "1066", "1067", "1068", "1069", "1070", "1071", "1072", "1073", "1074", "1075", "1076", "1077", "1078", "1079", "1080", "1081", "1082", "1083", "1084", "1085", "1086", "1087", "1088", "1089", "1090", "1091", "1092", "1093", "1094", "1095", "1096", "1097", "1098", "1099", "1100", "1101", "1102", "1103", "1104", "1105", "1106", "1107", "1108", "1109", "1110", "1111", "1112", "1113", "1114", "1115", "1116", "1117", "1118", "1119", "1120", "1121", "1122", "1123", "1124", "1125", "1126", "1127", "1128", "1129", "1130", "1131", "1132", "1133", "1134", "1135", "1136", "1137", "1138", "1139", "1140", "1141", "1142", "1143", "1144", "1145", "1146", "1147", "1148", "1149", "1150", "1151", "1152", "1153", "1154", "1155", "1156", "1157", "1158", "1159", "1160", "1161", "1162", "1163", "1164", "1165", "1166", "1167", "1168", "1169", "1170", "1171", "1172", "1173", "1174", "1175", "1176", "1177", "1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185", "1187", "1188", "1189", "1190", "1191", "1192", "1193", "1194", "1195", "1196", "1197", "1198", "1199", "1200", "1201", "1202", "1203", "1204", "1205", "1206", "1207", "1208", "1209", "1210", "1211", "1212", "1213", "1214", "1215", "1216", "1217", "1218", "1219", "1220", "1221", "1222", "1223", "1224", "1225", "1226", "1227", "1228", "1229", "1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1240", "1241", "1242", "1243", "1244", "1245", "1246", "1247", "1248", "1249", "1250", "4176", "4202"];
const PRIVADO_CMP_ID = 1122;
const API_URL = `https://test.api.cookie.privado.ai/test`;
const CSS_URL = `https://cdn.privado.ai/version/indexV1.css`;
const GVL_URL = `https://www.cdn.privado.ai/version/gvl.json`;

let FLOW = injectedOptions.flow || injectedOptions.default_flow;
if(!("metaDetails" in CUSTOMIZATION)) CUSTOMIZATION.metaDetails = { "manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"};
CUSTOMIZATION.metaDetails = Object.assign({ "manageCookiesTopHeading": "Manage Cookies", "cookieDetailsSubtext": "Cookie details", "poweredByFooterText": "Powered by {privado}", "saveButtonText": "Save"}, CUSTOMIZATION.metaDetails);
CUSTOMIZATION.banner.vendorsCTA["visibility"] = injectedOptions.isIabTcf;

const COOKIELIST = CATEGORIZATION.flatMap(category => category.cookies.map(cookie => ({...cookie, category: category.name })));
const PURPOSES = new Set([]);
const LEGINT_PURPOSES = new Set([]);
const FEATURES = new Set([]);
const COOKIE_TYPES = CATEGORIZATION.map(category => category.key.toLocaleUpperCase());
window.dataLayer = window.dataLayer || [];
cmpstub();

GVL.baseUrl = GVL_URL.substring(0, GVL_URL.lastIndexOf("/") + 1);
GVL.latestFilename = GVL_URL.substring(GVL_URL.lastIndexOf("/") + 1);
const gvl = new GVL();
let currentTcString = document.cookie?.split('; ').find(row => row.startsWith('preferences_tcf'))?.split('=')[1] || '';
gvl.readyPromise.then(()=>{
  gvl.narrowVendorsTo(VENDORS);
});
let tcModel = new TCModel(gvl); 
tcModel.cmpId = PRIVADO_CMP_ID;
tcModel.cmpVersion = 1;

const privadoCmpApi = new CmpApi(PRIVADO_CMP_ID, 1, true);
if (injectedOptions.isIabTcf) {
  privadoCmpApi.update(currentTcString, !currentTcString);
} else {
  // set gdprApplies False
  privadoCmpApi.update(null);
}

const updateTCString = (setOnlyEventStatus = undefined) => {
  if (injectedOptions.isIabTcf){
    if (setOnlyEventStatus !== undefined){
      privadoCmpApi.update(currentTcString, setOnlyEventStatus);
      return;
    }
    gvl.readyPromise.then(() => {
      const encodedTCString = TCString.encode(tcModel);
      document.cookie = `preferences_tcf=${encodedTCString}; expires=${new Date(new Date().getTime() + 31536000000).toGMTString()}; SameSite=Lax; path=/`;
      privadoCmpApi.update(encodedTCString, false);
      currentTcString = encodedTCString;
    });
  }
}

// Initialize with only essential (Runs before GTM) 
var COOKIES_ALLOWED = [];
COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
  if(category.state === 2)
    return [...acc, category.key];
  return acc;
}, []);

//To populate tcModel
let PURPOSES_ALLOWED = [];
let VENDORS_ALLOWED = [];
let LEGITIMATE_VENDORS = []; 
let LEGITIMATE_PURPOSES = [];
let FEATURES_ALLOWED = [];

if (currentTcString){
  gvl.readyPromise.then(()=>{
    tcModel = TCString.decode(currentTcString);
    tcModel.gvl = gvl;
    PURPOSES_ALLOWED = Array.from(tcModel.purposeConsents.set_);
    VENDORS_ALLOWED = Array.from(tcModel.vendorConsents.set_);
    LEGITIMATE_VENDORS = Array.from(tcModel.vendorLegitimateInterests.set_); 
    LEGITIMATE_PURPOSES = Array.from(tcModel.purposeLegitimateInterests.set_);   
    FEATURES_ALLOWED = Array.from(tcModel.specialFeatureOptins.set_);   
  });
}

gvl.readyPromise.then(()=>{
  Object.values(gvl.vendors).forEach((vendor)=>{
      vendor.purposes.forEach((purpose)=>{
        PURPOSES.add(purpose);
      });   
      if (vendor.legIntPurposes.length){
          vendor.legIntPurposes.forEach((p)=>{
          LEGINT_PURPOSES.add(p);
          })
      } 
      if (vendor.specialFeatures.length){
        vendor.specialFeatures.forEach((f)=>{
          FEATURES.add(f);
        })
      }
    }
  )
  })

const privadoUpdateDataLayer = () => {  
  dataLayer.push({"event": 'setCookieConsent', "CookieConsent": COOKIES_ALLOWED.toString()});
  document.dispatchEvent(new Event("privadoGTMSetCookieConsent"));
};
privadoUpdateDataLayer();

// Initiate CSS load
(function (url) {
  if(document.createStyleSheet) {
    document.createStyleSheet(url);
  }
  else {
    var styles = `@import url('${url}');`;
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
})(CSS_URL);

const uuidV4 = () => { // eslint-disable-line complexity
    // if possible, generate a single random value, 128 bits (16 bytes) in length
    // in an environment where that is not possible, generate and make use of 4 32-bit (4-byte) random values
    // use crypto-grade randomness when available, else Math.random()
    const random = () => {
        const
            fourBytesOn = 0xffffffff, // 4 bytes, all 32 bits on: 4294967295
            c = typeof crypto === "object"
                ? crypto // node or most browsers
                : typeof msCrypto === "object" // stinky non-standard IE
                    ? msCrypto // eslint-disable-line no-undef
                    : null; // what old or bad environment are we running in?
            return c
                ? c.randomBytes
                    ? parseInt(c.randomBytes(4).toString("hex"), 16) / (fourBytesOn + 1) - Number.EPSILON // node
                    : c.getRandomValues(new Uint32Array(1))[0] / (fourBytesOn + 1) - Number.EPSILON // browsers
                : Math.random();
    };

    const
        c = typeof crypto === "object"
            ? crypto // node or most browsers
            : typeof msCrypto === "object" // stinky non-standard IE
                ? msCrypto // eslint-disable-line no-undef
            : null; // what old or bad environment are we running in?
    let
        byteArray = c
            ? c.randomBytes
                ? c.randomBytes(16) // node
                : c.getRandomValues(new Uint8Array(16)) // browsers
            : null,
        uuid = [ ];

    /* eslint-disable no-bitwise */
    if ( ! byteArray) { // no support for generating 16 random bytes in one shot -- this will be slower
        const
            int = [
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0,
                random() * 0xffffffff | 0
            ];
        byteArray = [ ];
        for (let i = 0; i < 256; i++) {
            byteArray[i] = int[i < 4 ? 0 : i < 8 ? 1 : i < 12 ? 2 : 3] >> i % 4 * 8 & 0xff;
        }
    }
    byteArray[6] = byteArray[6] & 0x0f | 0x40; // always 4, per RFC, indicating the version
    byteArray[8] = byteArray[8] & 0x3f | 0x80; // constrained to [89ab], per RFC for version 4
    for (let i = 0; i < 16; ++i) {
        uuid[i] = (byteArray[i] < 16 ? "0" : "") + byteArray[i].toString(16);
    }
    uuid =
        uuid[ 0] + uuid[ 1] + uuid[ 2] + uuid[ 3] + "-" +
        uuid[ 4] + uuid[ 5]                       + "-" +
        uuid[ 6] + uuid[ 7]                       + "-" +
        uuid[ 8] + uuid[ 9]                       + "-" +
        uuid[10] + uuid[11] + uuid[12] + uuid[13] + uuid[14] + uuid[15];
    return uuid;
    /* eslint-enable no-bitwise */
}
const cookieState = {
  type: ''
};

class CookieConsent {
  constructor(params) {
    this.injectedOptions = params.injectedOptions;
    this.timerId = null;
    this.setPreferenceCookies = this.setPreferenceCookies.bind(this);
    this.acceptAll = this.acceptAll.bind(this);
    this.denyConsent = this.denyConsent.bind(this);
    this.savepreferences = this.savepreferences.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    this.openVendorModal = this.openVendorModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.domLoaded = this.domLoaded.bind(this);
    this.showPrivacyBanner = this.showPrivacyBanner.bind(this);
    this.hideManageModal = this.hideManageModal.bind(this);
    this.removeAllEventListeners = this.removeAllEventListeners.bind(this);
    this.showNoticeBanner = this.showNoticeBanner.bind(this);
    this.consentRevoked = this.consentRevoked.bind(this);
    this.initialiseCookiesAndScriptBlocking = this.initialiseCookiesAndScriptBlocking.bind(this);
    this.outsideClickFinder = this.outsideClickFinder.bind(this);
    this.handleScriptBlocking = this.handleScriptBlocking.bind(this);
    this.handlePixelBlocking = this.handlePixelBlocking.bind(this);
    this.handleFrameBlocking = this.handleFrameBlocking.bind(this);
    this.initializeUUID = this.initializeUUID.bind(this);
    this.injectSettingsModal = this.injectSettingsModal.bind(this);
    this.allFrames = new Map();
    this.allFramesParents = new Map();
    this.initializeUUID();
  }

  outsideClickFinder(event) {
    const privacyBox = document.getElementById("cookie-consent-banner");
    if (privacyBox && !privacyBox.contains(event.target)) {
      document.dispatchEvent(new Event("acceptAllButtonClick"));
    }
  }

  getCookie(name) {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
    if(cookie){
      return cookie.split('=')[1];
    }
    return false;
  }

  getAllCookies() {
    const allCookies = document.cookie.split(";");
    let cookies = {};
    allCookies.forEach((cookie) => {
      const nameAndValue = cookie.split("=");
      Object.assign(cookies, { [nameAndValue[0].trim()]: nameAndValue[1] });
    });
    return cookies;
  }

  deleteCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  deleteAllCookies() {
    const cookies = this.getAllCookies();
    for (let i in cookies) {
      if (
        COOKIES_ALLOWED.indexOf(this.injectedOptions.cookies[i]) < 0 &&
        i !== "preferences" && i !== "last_consent" && i != "preferences_tcf"
      ) {
        this.deleteCookie(i);
      }
    }
  }

  checkForNewCookie() {
    const cookies = this.getAllCookies();
    for (let i in cookies) {
      if (injectedOptions.cookies[cookies[i]]) {
        //Cool Cookie exists
      } else {
        //Code to send cookie name and info to api
      }
    }
  }

  getWebsiteLanguage() {
    const lang = navigator.language;
    return lang;
  }

  removeAllEventListeners() {
    document.removeEventListener("acceptAllButtonClick", this.acceptAll);
    document.removeEventListener("denyButtonClick", this.denyConsent);
    document.removeEventListener("savePreferences", this.savepreferences);
    document.removeEventListener("click", this.outsideClickFinder);
  }

  initializeUUID() {
    try{
      let lastConsentCookie = this.getCookie(`last_consent`);
      if(lastConsentCookie) {
        this.uuid = lastConsentCookie.split(`|`)[0];
      }
      else {
        this.uuid = uuidV4();
      }
    }
    catch(e){}
  }

  setPreferenceCookies(source, source_desc) {
    var theDate = new Date();
    var oneYearLater = new Date(theDate.getTime() + 31536000000);
    var expiryDate = oneYearLater.toGMTString();
    document.cookie = `preferences=${COOKIES_ALLOWED.join(',')}; expires=${expiryDate}; SameSite=Lax; path=/`;
    //Add beacon
    updateTCString();

    if(navigator.sendBeacon){
      const beaconData = JSON.stringify({
        domain_key: injectedOptions.key,
        consent_id: this.uuid,
        consent: COOKIES_ALLOWED.toString(),
        timestamp: theDate.getTime()/1000,
        source: source,
        source_desc: source_desc,
        banner_type: FLOW
      });
      const status = navigator.sendBeacon(`${API_URL}/v1/consent-update/`, beaconData);
    }

  }

  consentGranted() {
    privadoUpdateDataLayer();
    var scripts = document.getElementsByTagName("SCRIPT");
    this.handleScriptBlocking(scripts);
    this.handlePixelBlocking();
    this.handleFrameBlocking();
    this.deleteAllCookies();
  }

  consentRevoked() {
    if (injectedOptions.isIabTcf){  
      tcModel.vendorLegitimateInterests.empty();
      tcModel.vendorLegitimateInterests.set(LEGITIMATE_VENDORS)
      tcModel.vendorConsents.empty();
      tcModel.vendorConsents.set(VENDORS_ALLOWED)
      tcModel.purposeLegitimateInterests.empty();
      tcModel.purposeLegitimateInterests.set(LEGITIMATE_PURPOSES);
      tcModel.purposeConsents.empty();
      tcModel.purposeConsents.set(PURPOSES_ALLOWED);
      tcModel.specialFeatureOptins.empty();
      tcModel.specialFeatureOptins.set(FEATURES_ALLOWED); 
    }
    
    const privadoModal = document.getElementById("manage-cookies");
    if(privadoModal)
      privadoModal.style.display = "none";
    this.removeAllEventListeners();

    this.setPreferenceCookies("Consent Revoked", "Consent Revoked");
    privadoUpdateDataLayer();

    var scripts = document.getElementsByTagName("SCRIPT");
    this.handleScriptBlocking(scripts);
    this.handlePixelBlocking();
    this.handleFrameBlocking();
    this.deleteAllCookies();
  }

  handleScriptBlocking(scripts) {
    // 1. Loaded blacklisted scripts
    // 2. Blocked blacklisted scripts - Ignore case
    // 3. Blocked Whitelisted scripts
    // 4. Loaded Whitelisted scripts - Ignore case
    let loadedBlacklistedScripts = [], blockedWhitelistedScripts = [];
    for(let script of scripts) {
      // Script is known
      if(injectedOptions.scripts[script.src]) {
        if((script.type === "application/javascript" || script.type === "" ) && !COOKIES_ALLOWED.includes(injectedOptions.scripts[script.src]))
          loadedBlacklistedScripts.push(script);
        else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(injectedOptions.scripts[script.src]))
          blockedWhitelistedScripts.push(script);
      }
      // Script unknown and category Set
      else if(script.hasAttribute("privado-cookie-category")) {
        const scriptCategory = script.getAttribute("privado-cookie-category");
        if((script.type === "application/javascript" || script.type === "" ) && !COOKIES_ALLOWED.includes(scriptCategory))
          loadedBlacklistedScripts.push(script);
        else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(scriptCategory))
          blockedWhitelistedScripts.push(script);
      }
    };

    loadedBlacklistedScripts.forEach((script) => {
      script.setAttribute("type", "javascript/privado-block");
    });

    blockedWhitelistedScripts.forEach((script) => {
      try{
        let elem = script.cloneNode(true);
        elem.setAttribute("type", "application/javascript");
        script.parentNode.replaceChild(elem, script);
      }
      catch(e){}
    });
  }

  handlePixelBlocking() {
    // 1. Loaded blacklisted pixels
    // 2. Blocked blacklisted pixels - Ignore case
    // 3. Blocked Whitelisted pixels
    // 4. Loaded Whitelisted pixels - Ignore case

    const scripts = document.getElementsByTagName("SCRIPT");
    let loadedBlacklistedPixels = [], blockedWhitelistedPixels = [];
    for(let script of scripts) {
      if(!script.src) {
        for(let [pixel, pixelCategory] of Object.entries(injectedOptions.pixels)){
          if(script.innerText.includes(pixel)){
            // Pixel script identified
            if(script.type !== "javascript/privado-block" && !COOKIES_ALLOWED.includes(pixelCategory))
              loadedBlacklistedPixels.push(script);
            else if(script.type === "javascript/privado-block" && COOKIES_ALLOWED.includes(pixelCategory))
              blockedWhitelistedPixels.push(script);
          }
        }
      }
    }
    loadedBlacklistedPixels.forEach((pixel) => {
      pixel.setAttribute("type", "javascript/privado-block");
    });

    blockedWhitelistedPixels.forEach((pixel) => {
      try{
        let elem = pixel.cloneNode(true);
        elem.setAttribute("type", "application/javascript");
        pixel.parentNode.replaceChild(elem, pixel);
      }
      catch(e){}
    });
  }

  handleFrameBlocking() {
    const injectedOptions = this.injectedOptions;
    const frames = Array.from(document.getElementsByTagName("FRAME"))
    .concat(Array.from(document.getElementsByTagName("IFRAME")));

    let loadedBlacklistedFrames = [], blockedWhitelistedFrames = [];

    for(let frame of frames) {
      let frameSrc = frame.src, framePrivadoSrc = frame.getAttribute("data-privado-src");

      // Frame exists but not allowed
      if(injectedOptions.frames[frameSrc] && !COOKIES_ALLOWED.includes(injectedOptions.frames[frameSrc])) {
        loadedBlacklistedFrames.push(frame);
        // Frames blocked but allowed
      } else if(framePrivadoSrc && COOKIES_ALLOWED.includes(injectedOptions.frames[framePrivadoSrc])) {
        blockedWhitelistedFrames.push(frame);
      }
    }

    loadedBlacklistedFrames.forEach(frame => {
      frame.setAttribute(`data-privado-src`, frame.src);
      frame.setAttribute(`data-privado-srcdoc`, frame.srcdoc);
      frame.setAttribute(`data-privado-sandbox`, frame.sandbox);
      frame.setAttribute(`sandbox`, ``);
      frame.setAttribute(`srcdoc`, this.getPrivadoFrameBannerHTML());
      frame.removeAttribute(`src`);
    });

    blockedWhitelistedFrames.forEach(frame => {
      let elem = frame.cloneNode(true);

      let originalSandbox = elem.getAttribute(`data-privado-sandbox`);
      if (originalSandbox) elem.setAttribute("sandbox", originalSandbox);
      else elem.removeAttribute("sandbox");

      let originalSrcdoc = elem.getAttribute(`data-privado-srcdoc`);
      if (originalSrcdoc) elem.setAttribute("srcdoc", originalSrcdoc);
      else elem.removeAttribute("srcdoc");

      elem.setAttribute("src", elem.getAttribute(`data-privado-src`));

      elem.removeAttribute(`data-privado-src`);
      elem.removeAttribute(`data-privado-sandbox`);
      frame.parentNode.replaceChild(elem, frame);
    });

  }

  setPrivacyObserver() {
    const injectedOptions = this.injectedOptions;
    const PrivacyObserver = new MutationObserver((mutations) => {
      // Everytime DOM element changes
      mutations.forEach((mutation) => {
        let addedNodes = mutation.addedNodes; //Last mutated node
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.tagName === "SCRIPT") {
            this.handleNewScriptNode(node);
          }
          else if (node.nodeType === 1 &&
            (node.tagName === "IFRAME" || node.tagName === "FRAME")
          ) {
            this.handleNewFrameNode(node);
          }
        });
      });
    });

    PrivacyObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  handleNewScriptNode(node) {
    const injectedOptions = this.injectedOptions;

    // For known and blocked scripts (auto-blocking)
    if (
      injectedOptions.scripts[node.src] &&
      !COOKIES_ALLOWED.includes(injectedOptions.scripts[node.src])
    ) {
      node.type = "javascript/privado-block";
      // Firefox has this additional event which prevents scripts from beeing executed
      const beforeScriptExecuteListener = function (event) {
        // Prevent only marked scripts from executing
        if (node.getAttribute("type") === "javascript/privado-block")
          event.preventDefault();
        node.removeEventListener(
          "beforescriptexecute",
          beforeScriptExecuteListener
        );
      };
      node.addEventListener(
        "beforescriptexecute",
        beforeScriptExecuteListener
      );
    }

    // For manual blocking
    else if (
      node.type === "javascript/privado-block" &&
      injectedOptions.scripts[node.src] &&
      COOKIES_ALLOWED.includes(injectedOptions.scripts[node.src])
    ) {
      node.type = "application/javascript";
    }

    // For manual blocking with script unknown and category Set
    else if(
      node.type === "javascript/privado-block" &&
      node.hasAttribute("privado-cookie-category") &&
      COOKIES_ALLOWED.includes(node.getAttribute("privado-cookie-category"))
    ) {
      node.type = "application/javascript";
    }

    // For pixels
    else if (!node.src) {
      for(let [pixel, pixelCategory] of Object.entries(injectedOptions.pixels)){
        if(node.innerText.includes(pixel) && !COOKIES_ALLOWED.includes(pixelCategory)){
          // Pixel script identified
          node.type = "javascript/privado-block";
        }
      }
    }

    // For unknown scripts which does not fall in above cases
    else if (!injectedOptions.scripts[node.src]) {
      // Do nothing
    }
  }

  handleNewFrameNode(node) {
    const injectedOptions = this.injectedOptions;
    if(
      injectedOptions.frames[node.src] &&
      !COOKIES_ALLOWED.includes(injectedOptions.frames[node.src])
    ) {
      node.setAttribute(`data-privado-srcdoc`, node.srcdoc);
      node.setAttribute(`srcdoc`, this.getPrivadoFrameBannerHTML());
      node.setAttribute(`data-privado-src`, node.src);
      node.setAttribute(`data-privado-sandbox`, node.sandbox);
      node.setAttribute(`sandbox`, "");
      node.removeAttribute(`src`, "");
    }
  }

  domLoaded() {
    this.injectSettingsModal();

    let cookies = this.getCookie("preferences");
    if (cookies !== false) {
      if(cookies.length)
        COOKIES_ALLOWED = cookies.split(",");
      else COOKIES_ALLOWED = [];
    }
    else if( FLOW === "NOTICE" ){
      this.showNoticeBanner();
      this.setPreferenceCookies("Default", "Accept All");
    }
    else {
      this.showPrivacyBanner();
    }

    // Unblock any manually blocked script
    // or block any unblocked script if preference is set
    this.consentGranted();
    privadoUpdateDataLayer();

    this.renderCookieTable();
    this.initializeChangeConsentButton();
    window.addEventListener("load", () => {
      this.renderCookieTable();
      this.initializeChangeConsentButton();
    });
  }

  initializeChangeConsentButton() {
    // <button id="privado-changepreferences"> 
    // <button id="privado-changepreferences" onclick="window.top.document.dispatchEvent(new Event('changeConsent'))">

    const privadoChangepreferences = document.getElementById(`privado-changepreferences`);
    if(privadoChangepreferences) {
      privadoChangepreferences.addEventListener('click', function () {
        document.dispatchEvent(new Event("changeConsent"));
      });
    }
  };

  getPrivadoFrameBannerHTML() {
    return `
      <div>
        This Frame has been blocked as per your cookie consent.
        To unblock, kindly change your cookie preferences.
      </div>
    `;
  }

  showNoticeBanner() {
    const { noticeFontStyle, acceptCTA } = CUSTOMIZATION.banner;
    const buttonClassName = {
      outlined: "banner-outlined-button",
      link: "banner-link-button",
      filled: "banner-filled-button",
    };
    const privadoPrivacyBanner = document.createElement("div");
    privadoPrivacyBanner.id = "cookie-consent-banner";
    privadoPrivacyBanner.classList.add(
      CUSTOMIZATION.banner.type === `banner`? "edit-modal-banner" : "edit-modal-banner-box"
    );
      privadoPrivacyBanner.style.background = CUSTOMIZATION.banner.backgroundColor || "#010d6a";
      privadoPrivacyBanner.innerHTML = `
        <span id="notice-close-icon" class="banner-close-icon" style="color: ${CUSTOMIZATION.banner.noticeTextColor};" >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
          </svg>
        </span>
        <div class=${(CUSTOMIZATION.banner.type === `banner`)? "banner-content-wrapper-banner" : "banner-content-wrapper-box"}>
          <p
            class="privado-para banner-notice-text"
            style="
              font-weight: ${(noticeFontStyle.includes('bold'))? "bold":""};
              text-decoration: ${(noticeFontStyle.includes('underline'))? "underline":""};
              fontStyle: ${(noticeFontStyle.includes('italic'))? "italic":""};
              color: ${CUSTOMIZATION.banner.noticeTextColor};
            "
          >
            ${CUSTOMIZATION.banner.noticeText}
          </p>
          <div class="banner-button-container">
            <button
              id = "accept-button"
              class = ${buttonClassName[acceptCTA.buttonType]}
              style = "
                background-color: ${(acceptCTA.buttonType === "filled")? acceptCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(acceptCTA.buttonType === "outlined")? acceptCTA.buttonColor: "none"};
                color: ${(acceptCTA.color)};
                font-weight: ${(acceptCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(acceptCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(acceptCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${acceptCTA.text}
            </button>
          </div>
        </div>
      `;

    if(document.body) {
      document.body.appendChild(privadoPrivacyBanner);
      privadoPrivacyBanner.style.width = "auto";
      privadoPrivacyBanner.style.margin = "0px";
      privadoPrivacyBanner.style.borderRadius = "";
      privadoPrivacyBanner.style.top = "";
      privadoPrivacyBanner.style.left = "";
      privadoPrivacyBanner.style.right = "";
      privadoPrivacyBanner.style.bottom = "";
      
      privadoPrivacyBanner.classList.remove("fullWidth");
      privadoPrivacyBanner.classList.remove("compactWidth");
      switch (CUSTOMIZATION.banner.position) {
        case "top":
            privadoPrivacyBanner.style.top = "0";
            privadoPrivacyBanner.style.width = "100%";
            privadoPrivacyBanner.style.removeProperty("bottom");
            privadoPrivacyBanner.classList.add("fullWidth");
            break;
        case "mid":
          privadoPrivacyBanner.style.bottom = "";
          privadoPrivacyBanner.style.width = "100%";
          privadoPrivacyBanner.style.top = `calc(50% - ${privadoPrivacyBanner.offsetHeight/2}px)`;
          break;

        case "bottom":
            privadoPrivacyBanner.style.width = "100%";
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.top = "";
            privadoPrivacyBanner.classList.add("fullWidth");
            break;

        case "bottomLeft":
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.top = "";
            privadoPrivacyBanner.style.width = "35%";
            privadoPrivacyBanner.style.marginLeft = "20px";
            privadoPrivacyBanner.style.marginBottom = "20px";
            privadoPrivacyBanner.style.borderRadius = "12px";
            privadoPrivacyBanner.classList.add("compactWidth");
            break;

        case "bottomRight":
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.right = "0";
            privadoPrivacyBanner.style.left = "";
            privadoPrivacyBanner.style.width = "35%";
            privadoPrivacyBanner.style.marginRight = "20px";
            privadoPrivacyBanner.style.marginBottom = "20px";
            privadoPrivacyBanner.style.borderRadius = "12px";
            privadoPrivacyBanner.classList.add("compactWidth");
            break;
      }
    }

    const acceptButtonEl = document.getElementById("accept-button");
    if (acceptButtonEl) {
      acceptButtonEl.addEventListener('click', function () {
        document.dispatchEvent(new Event("noticeButtonClicked"));
      })
    }

    const noticeCloseIcon = document.getElementById("notice-close-icon");
    if (noticeCloseIcon) {
      noticeCloseIcon.addEventListener('click', function () {
        document.dispatchEvent(new Event("noticeButtonClicked"));
      })
    }
  }

  hideNoticeBanner() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if(privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    document.removeEventListener("noticeButtonClicked", this.hideNoticeBanner);
  }

  acceptAll() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    if (injectedOptions.isIabTcf){
      PURPOSES_ALLOWED = Array.from(PURPOSES);
      VENDORS_ALLOWED = VENDORS;
      FEATURES_ALLOWED = Array.from(FEATURES);
      LEGITIMATE_PURPOSES = Array.from(PURPOSES)
      LEGITIMATE_VENDORS = VENDORS;
      tcModel.vendorConsents.set(VENDORS_ALLOWED);
      tcModel.purposeConsents.set(PURPOSES_ALLOWED);
      tcModel.specialFeatureOptins.set(FEATURES_ALLOWED);
      tcModel.purposeLegitimateInterests.set(LEGITIMATE_PURPOSES);
      tcModel.vendorLegitimateInterests.set(LEGITIMATE_VENDORS);
    } 
    
    COOKIES_ALLOWED = COOKIE_TYPES;
    this.setPreferenceCookies("Cookie Banner", "Accept All");

    this.consentGranted();
    this.removeAllEventListeners();
    // location.reload();
  }

  injectSettingsModal() {
    const CONFIG = CUSTOMIZATION.manageCookieBox;
    const META_CONFIG = CUSTOMIZATION.metaDetails;
    META_CONFIG.poweredByFooterText = META_CONFIG.poweredByFooterText
    .replace("{privado}", `<a style="text-decoration: none; color: inherit;" href="https://privado.ai/cookie-consent">Privado</a>`);

    // if already present, remove that one
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal) {
      manageCookieModal.parentNode.removeChild(manageCookieModal);
    }

    const privadoManageCookies = document.createElement("div");
    privadoManageCookies.style.display = "none";
    privadoManageCookies.id = "manage-cookies";
    privadoManageCookies.classList.add(
      CONFIG.type === `box`? "manage-cookies-modal" : "manage-cookies-modal-sidepanel"
    );
    privadoManageCookies.innerHTML = `
      <div class="modal-notice-heading">
        <span id="modal-heading-icon" class="modal-heading-icon">
          <svg stroke="currentColor" fill="currentColor" stroke-width="60px" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
            </path>
          </svg>
        </span>
       <span> ${META_CONFIG.manageCookiesTopHeading}</span>
      </div>
      <div class="manage-cookies-modal-wrapper" style="min-height: calc(100% - 78px - 4px - 64px);" >
        <div class="manage-cookies-modal-content" id="manage-cookies-modal-content">
          <p
                class="privado-para modal-notice-text"
                style="
                font-weight: ${(CONFIG.noticeFonStyle.includes('bold'))? "bold":""};
                text-decoration: ${(CONFIG.noticeFonStyle.includes('underline'))? "underline":""};
                font-style: ${(CONFIG.noticeFonStyle.includes('italic'))? "italic":""};
                "
              >
                ${CONFIG.noticeText}
              </p>
              <div id="manage-cookies-cookielist" class="manage-cookies-cookielist">
              </div>

        </div>
        <p id="privado-branding-wrap" class="privado-para privado-power" style="font-size: 14px; text-align: center;" >
          ${META_CONFIG.poweredByFooterText}
        </p>
      </div>
      <div class="manage-cookies-save-container">
        <button class="save-button-cookie-policy" id="save-button">
          ${META_CONFIG.saveButtonText}
        </button>
      </div>
    `;

    if(document.body) {
      document.body.appendChild(privadoManageCookies);
      const variableParent = document.getElementById('manage-cookies');
      for(const [field, value] of Object.entries(CONFIG)){
        switch (field) {
          case "background":
              variableParent.style.setProperty("--primary-background", value);
              break;
          case "textColor":
              variableParent.style.setProperty("--primary-text-color", value);
              break;
          case "mainButtonColor":
              variableParent.style.setProperty("--primary-button-background", value);
              break;
          case "toggleButtonColor":
              variableParent.style.setProperty("--toggle-button-color", value);
              break;
          case "noticeTextColor":
              variableParent.style.setProperty("--modal-notice-text-color", value);
              break;
        }
      }

        const savepreferencesClick = document.getElementById("save-button");
        if(savepreferencesClick) {
          savepreferencesClick.addEventListener('click', function () {

            if (cookieState.type === "changeConsent") {
              document.dispatchEvent(new Event("revokeConsent"));
            } else document.dispatchEvent(new Event("savePreferences"));
        });
      }
    }
  }

  openModal(type) {
    const heading = document.getElementsByClassName("modal-notice-heading")[0];
    if (heading) {
      heading.children[1].innerHTML = `Manage Cookies`;
    }

    let backButtonClick = document.getElementById("modal-heading-icon");
    if (backButtonClick) {
      const newBackButton = backButtonClick.cloneNode(true);
      if (backButtonClick.parentNode) {
        backButtonClick.parentNode.replaceChild(newBackButton, backButtonClick);
        backButtonClick = newBackButton;
      }

      backButtonClick.addEventListener("click", function (e) {
        e.stopPropagation();
        document.dispatchEvent(new Event("hideManageModal"));
      });
    }

    // Manage Settings Modal
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal) 
    privadoModal.parentNode.removeChild(privadoModal);

    // Mark visible
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal) 
     manageCookieModal.style.display = "unset";

    if(FLOW === "IMPLIED_OPT_IN" && this.timerId){
      clearTimeout(this.timerId);
      this.timerId = null;
      document.removeEventListener("click", this.outsideClickFinder);
    }

    // Populate cookie list (checks according to type)
    const cookieListDiv = document.getElementById("manage-cookies-cookielist");
    if(cookieListDiv) {
      cookieListDiv.innerHTML = `
      <div id="vendor-tab" style=${injectedOptions.isIabTcf?"color:var(--primary-button-texxt);": "display:none;"} >Vendors</div>`
      +`<div style="color:#ffffff; display:flex; padding-bottom:10px; padding-top:10px">
       ${injectedOptions.isIabTcf? `<div style="width:60%">Cookies/Purposes</div>
       <div style="width:30%">
           Legitimate Interest
       </div>
       <div style="width:20%">Consent</div>`: ``}
       </div>`+CATEGORIZATION.map((category, i) => {
        let isChecked = "checking";
        if( type === "changeConsent" && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()) ){
          isChecked = "checked";
        } else if( type !== "changeConsent"){
         if (category.state === 1 || category.state === 2 ){
          isChecked = "checked";      
         } else if (injectedOptions.isIabTcf && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase())){
          isChecked = "checked";
        }
      }
        const isCookieSwitchDisabled = category.state === 2;

        return `
          <div>
            <div>
              <div class="category-input-container" style = "display: flex; justify-content: space-between;">
                <p class = "cookie-heading privado-para">
                  ${category.name}
              </p>
              <input
              class="toggle-checkbox ${isCookieSwitchDisabled ? 'disabled' : ''}"
              type="checkbox"
              id="${category.key.toLocaleUpperCase()}"
              ${isChecked}
              ${isCookieSwitchDisabled ? "disabled" : ""}
            />
            <label
              class="toggle-label ${isCookieSwitchDisabled ? 'disabled' : ''}"
              for=${category.key.toLocaleUpperCase()}
            >Toggle</label>
          </div>
          <p class="privado-para cookie-desc" style="width:80%">
            ${category.description}
          </p>
        </div>
        ${
          category.cookies.length
            ? `<div onclick="window.PRIVADO.cookieConsent.handleCollapsible(event)" class="cookie-detail-collapsible collapsible-inactive-icon">
          ${CUSTOMIZATION.metaDetails.cookieDetailsSubtext}
        </div>
          <div class="cookie-detail-box">
            ${category.cookies
              .map((cookie) => {
                return `
                <div class="cookie-detail" >
                  <div class="cookie-name-details">
                    <p class="privado-para cookie-box-name">Cookie Name</p>
                    <p class="privado-para cookie-box-detail">${cookie.name}</p>
                  </div>
                  <div class="cookie-name-details">
                    <p class="privado-para cookie-box-name">Provider</p>
                    <p class="privado-para cookie-box-detail">${cookie.hostname}</p>
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>
      </div>`
            : ""
        }
        `;
      }).join("")
      + Object.values(gvl.purposes).filter((p)=>PURPOSES.has(p.id) && injectedOptions.isIabTcf)
      .map((purpose) => {            
      return `
        <div>
            <div class="category-input-container" style = "display: flex; justify-content: space-between;">
              <p class = "cookie-heading privado-para" style = "width: 180px;">
                ${purpose.name}
            </p>
        ${LEGINT_PURPOSES.has(purpose.id)?`  <input
            class="toggle-checkbox"
            type="checkbox"
            ${LEGITIMATE_PURPOSES.includes(purpose.id) && "checked"} id="${purpose.id}-legit" 
          />
          <label
            class="toggle-label"
            for="${purpose.id}-legit"
          >Toggle</label>`:""}
            <input
            class="toggle-checkbox"
            type="checkbox"
            id="${purpose.id}-purpose"
            ${PURPOSES_ALLOWED.includes(purpose.id) && "checked"} />
          <label
            class="toggle-label"
            for="${purpose.id}-purpose"
          >Toggle</label>
        </div>
      </div>
      ${
        purpose.description.length
          ? `<div onclick="window.PRIVADO.cookieConsent.handleCollapsible(event)"    
          class="cookie-detail-collapsible collapsible-inactive-icon">
      Purpose Details
      </div>
        <div class="cookie-detail-box" >
        <div class="cookie-detail" >
      Purpose Description
        <p> ${Object.keys(gvl.getVendorsWithConsentPurpose(purpose.id)).length} vendors</p>
           <p> ${purpose.description}</p>
        </div>
        </div>
      `
          : ""
      }
      `;
      }).join("")
      +Object.values(gvl.specialFeatures).filter((f)=>FEATURES.has(f.id) && injectedOptions.isIabTcf)
      .map((feature) => {  
      return `
        <div>
              <div class="category-input-container" style = "display: flex; justify-content: space-between;">
                <p class = "cookie-heading privado-para" style = "width: 180px;">
                  ${feature.name}
              </p>
              <input
              class="toggle-checkbox"
              type="checkbox"
              id="${feature.id}-feature"
              ${FEATURES_ALLOWED.includes(feature.id) && "checked"}    />
            <label
              class="toggle-label"
              for="${feature.id}-feature"
            >Toggle</label>
          </div>
        </div>
        ${
          feature.description.length
            ? `<div onclick="window.PRIVADO.cookieConsent.handleCollapsible(event)"    
            class="cookie-detail-collapsible collapsible-inactive-icon">
        Purpose Details
        </div>
          <div class="cookie-detail-box">
          <span style="display:flex">
        <h5>Purpose Description</h5>
              <p class="privado-para cookie-desc">
              ${feature.description}
            </p>   
          </div>
        `
            : ""
        }`;
      }).join("")
    }

    FEATURES.forEach((feature) => {
      const addFeature = document.getElementById(`${feature}-feature`);
      if (addFeature){
        addFeature.addEventListener("change", ()=>{
          if (addFeature.checked) {
            FEATURES_ALLOWED.push(feature);
          } else {
            FEATURES_ALLOWED = FEATURES_ALLOWED.filter(
              (x) => x !== feature
            );
          }
        })
      }    
    });

    CATEGORIZATION.forEach(category => {
      if(category.state !== 2) {
        const isChecked = document.getElementById(category.key.toLocaleUpperCase());
        if (isChecked){
          isChecked.addEventListener("change", ()=>{
            if (isChecked.checked && !COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
          {  COOKIES_ALLOWED.push(category.key.toLocaleUpperCase());
          }
          else if(!isChecked.checked && COOKIES_ALLOWED.includes(category.key.toLocaleUpperCase()))
            COOKIES_ALLOWED = COOKIES_ALLOWED.filter(x => x !== category.key.toLocaleUpperCase())
        }
          )
        }
      }
    });
    PURPOSES.forEach((purpose) => {
      const addLegitmateInterests = document.getElementById(`${purpose}-legit`);
      if (addLegitmateInterests){
        addLegitmateInterests.addEventListener("change", ()=>{
          if (addLegitmateInterests.checked) {
            LEGITIMATE_PURPOSES.push(purpose);
          } else {
            LEGITIMATE_PURPOSES = LEGITIMATE_PURPOSES.filter(
              (x) => x !== purpose
            );
          }
        })
      }; 

      const isChecked = document.getElementById(`${purpose}-purpose`);
      if (isChecked) {
        isChecked.addEventListener("change", ()=>{
        if (isChecked.checked){
        PURPOSES_ALLOWED.push(purpose);
      } else if (!isChecked.checked && PURPOSES_ALLOWED.includes(purpose)) {
          PURPOSES_ALLOWED = PURPOSES_ALLOWED.filter(
            (x) => x !== purpose
          );
        }
      }
    )}
    });

    const vendorTabClick = document.getElementById("vendor-tab");
    if (vendorTabClick) {
      vendorTabClick.addEventListener("click", () => {
        const even = new Event("openVendorModal");
        document.dispatchEvent(even);
      });
    }
  }
  
  //Opens vendor tab
  openVendorModal(type) {
    const heading = document.getElementsByClassName("modal-notice-heading")[0];
    if (heading){
      heading.children[1].innerHTML = `Vendors`
    }     

    let backButtonClick = document.getElementById("modal-heading-icon");
    //Checks if modal has been opened from manage-cookies tab, takes back to manage-cookies tab
   
    if (backButtonClick) { 
      const newBackButton = backButtonClick.cloneNode(true);
      if (backButtonClick.parentNode) {
        backButtonClick.parentNode.replaceChild(newBackButton, backButtonClick);
        backButtonClick = newBackButton;
      }

      backButtonClick.addEventListener("click", function (e) {
        e.stopPropagation();
        if (cookieState.type === "changeConsent"){
            document.dispatchEvent(new Event("changeConsent"));
        } else if (cookieState.type === "openModal"){
            document.dispatchEvent(new Event("openModal"));
        } else document.dispatchEvent(new Event("hideManageModal"));
      });
      // openVendorModal
    }
    
    // Manage Settings Modal
    const privadoModal = document.getElementById(
      "cookie-consent-banner"
    );
    if (privadoModal) privadoModal.parentNode.removeChild(privadoModal);

    // Mark visible
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal) manageCookieModal.style.display = "unset";

    if (FLOW === "IMPLIED_OPT_IN" && this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
      document.removeEventListener("click", this.outsideClickFinder);
    }

    // Populate cookie list (checks according to type)
    const vendorListDiv = document.getElementById(
      "manage-cookies-cookielist"
    );
    if (vendorListDiv) {
      vendorListDiv.innerHTML = `
    <div style="color:var(--primary-button-texxt); display:flex; padding-bottom:10px; padding-top:10px">
      <div style="width:60%">Vendors</div>
      <div style="width:30%">Legitimate Interest</div>
      <div style="width:20%">Consent</div>
    </div>`
    +Object.values(gvl.vendors).map((vendor, i) => {
      let isChecked = VENDORS_ALLOWED.includes(vendor.id)? "checked" : "checking";   
      return `
        <div>
            <div>
              <div class="category-input-container" style = "display: flex; justify-content: space-between; padding:5px;">
                <p class = "cookie-heading privado-para" style = "width: 180px;">
                  ${vendor.name}
              </p>
              ${ vendor.legIntPurposes.length >0? `
                <input
                class="toggle-checkbox"
                type="checkbox"
                ${LEGITIMATE_VENDORS.includes(vendor.id) && "checked"} id="${vendor.id}-legit"
                />   
                <label
                class="toggle-label"
                for="${vendor.id}-legit"
                >Toggle</label>
              `
                : ""
              }
            <input
              class="toggle-checkbox"
              type="checkbox"
              id="${vendor.id}"
              ${isChecked}
            />
            <label
              class="toggle-label"
              for="${vendor.id}"
            >Toggle</label>
          </div>   
        </div>
        ${
          (vendor.purposes.length || vendor.cookies || vendor.features || vendor.policyUrl || vendor.deviceStorageDisclosureUrl) ?
             `<div onclick="window.PRIVADO.cookieConsent.handleCollapsible(event)" class="cookie-detail-collapsible collapsible-inactive-icon" style="padding:5px;">
                Description
              </div>
              <div class="cookie-detail-box">
              <div style="padding:10px">
              <div style="font-size:16px;padding-top:10px; display: flex;" >Cookies:</div>
              <div style="font-size:12px;">  
                  ${(vendor.cookies.map((cookie)=>{
                    return `
                ${cookie.identifier}
                    `
                  })).join(", ")}
              </div>
              <div style="font-size:16px;padding-top:10px; display: flex; align-items: end;" >Age(seconds): 
                <div style="font-size:12px;">     ${vendor.usesCookies? ` ${vendor.cookieMaxAgeSeconds}`:""}</div>
             </div>
             <div style="font-size:14px;padding-top:10px;" > Policy URL:<a href=${vendor.policyUrl}> ${vendor.policyUrl}</a></div>
              <div style="font-size:16px;padding-top:10px;">Purposes</div>
              ${(Object.values(gvl.purposes).filter((p)=>vendor.purposes.includes(p.id)).map((purpose)=>{
                return `
                  <div style="font-size:12px">
                      ${purpose.name}
                  </div>
                `
              })).join("")}
              <div style="font-size:16px;padding-top:10px;"> Special Purposes</div>
              ${(Object.values(gvl.specialPurposes).filter((p)=>vendor.specialPurposes.includes(p.id)).map((purpose)=>{
                return `
                  <div style="font-size:12px;">
                      ${purpose.name}
                  </div>
                `
              })).join("")}
              <div style="font-size:16px;padding-top:10px;"> ${vendor.features? "Features":""}</div>
              <p class="privado-para cookie-desc">
                ${(Object.values(gvl.features).filter((f)=>vendor.features.includes(f.id)).map((feature)=>{
                  return `
                    <div style="font-size:12px;">
                        ${feature.name} 
                    </div>
                  `
                })).join("")}
              </p> 
              <div style="font-size:16px;padding-top:10px;">${vendor.specialFeatures.length? "Special Features":""}</div>
              ${(Object.values(gvl.specialFeatures).filter((f)=>vendor.specialFeatures.includes(f.id)).map((feature)=>{
                return `
                  <div style="font-size:12px;">
                      ${feature.name}
                  </div>
                `
              })).join("")} 
              </div>
              </div>
          </div>`
          : ""
        }
      `;
        })
        .join("");
    }

    VENDORS.forEach((vendor)=>{
      const isChecked = document.getElementById(vendor);
      if (isChecked) {
        isChecked.addEventListener("change", ()=>{
        if (isChecked.checked){
          VENDORS_ALLOWED.push(vendor);
        } else if (
          !isChecked.checked &&
          VENDORS_ALLOWED.includes(vendor)
        ) {
            VENDORS_ALLOWED = VENDORS_ALLOWED.filter((x) => x !== vendor);
          }
        })
      }
            
    const addLegitmateInterests = document.getElementById(`${vendor}-legit`);
      if (addLegitmateInterests){
      addLegitmateInterests.addEventListener("change", ()=>{
        if (addLegitmateInterests.checked) {
          LEGITIMATE_VENDORS.push(vendor)
        } else if (LEGITIMATE_VENDORS.includes(vendor)){
          LEGITIMATE_VENDORS = LEGITIMATE_VENDORS.filter((x) => x !== vendor);
        }
      })
      }
    })   
  }


  handleCollapsible(event) {
    event.target.nextElementSibling.classList.toggle(`cookie-detail-box-active`);
    event.target.classList.toggle(`collapsible-active-icon`);
    event.target.classList.toggle(`collapsible-inactive-icon`);
  }

  hideManageModal() {
    const manageCookieModal = document.getElementById("manage-cookies");
    if (manageCookieModal)
      manageCookieModal.style.display = "none";

    const preferenceSet = this.getCookie(`preferences`);
    const vendorsSet = this.getCookie(`preferences_tcf`);
    if(preferenceSet === false || vendorsSet === false  ){
      this.showPrivacyBanner();
    } else {
      updateTCString(false);
    }
  }

  showPrivacyBanner() {
    if (FLOW === "IMPLIED_OPT_IN" && !this.timerId){
      document.addEventListener("click", this.outsideClickFinder);
      this.timerId = setTimeout(() => {
        document.dispatchEvent(new Event("acceptAllButtonClick"));
      }, this.injectedOptions.timeoutSeconds * 1000);
    }

    const { noticeFontStyle, manageSettingsCTA, vendorsCTA, acceptCTA, denyCTA } = CUSTOMIZATION.banner;
    const buttonClassName = {
      outlined: "banner-outlined-button",
      link: "banner-link-button",
      filled: "banner-filled-button",
    };
    const privadoPrivacyBanner = document.createElement("div");
    privadoPrivacyBanner.id = "cookie-consent-banner";
    privadoPrivacyBanner.classList.add(
      CUSTOMIZATION.banner.type === `banner`? "edit-modal-banner" : "edit-modal-banner-box"
    );
      privadoPrivacyBanner.style.background = CUSTOMIZATION.banner.backgroundColor || "#010d6a";
      privadoPrivacyBanner.innerHTML = `
        <span id="banner-close-icon" class="banner-close-icon" style="color: ${CUSTOMIZATION.banner.noticeTextColor};" >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
          </svg>
        </span>
        <div class=${(CUSTOMIZATION.banner.type === `banner`)? "banner-content-wrapper-banner":"banner-content-wrapper-box"} >
          <p
            class="privado-para banner-notice-text"
            style="
              font-weight: ${(noticeFontStyle.includes('bold'))? "bold":""};
              text-decoration: ${(noticeFontStyle.includes('underline'))? "underline":""};
              fontStyle: ${(noticeFontStyle.includes('italic'))? "italic":""};
              color: ${CUSTOMIZATION.banner.noticeTextColor};
            "
          >
            ${CUSTOMIZATION.banner.noticeText}
          </p>
          <div class="banner-button-container">
            <button
              id = "manage-settings-button"
              class = ${buttonClassName[manageSettingsCTA.buttonType]}
              style = "
                display: ${(manageSettingsCTA.visibility === false)? "none":"unset"};
                background-color: ${(manageSettingsCTA.buttonType === "filled")? manageSettingsCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(manageSettingsCTA.buttonType === "outlined")? manageSettingsCTA.buttonColor: "none"};
                color: ${(manageSettingsCTA.color)};
                font-weight: ${(manageSettingsCTA.fontStyle.includes('bold'))? "bold":""};
                        text-decoration: ${(manageSettingsCTA.fontStyle.includes('underline'))? "underline":""};
                        fontStyle: ${(manageSettingsCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${manageSettingsCTA.text}
            </button>
            </button>
            <button
              id = "vendor-button"
              class = ${buttonClassName[vendorsCTA.buttonType]}
              style = "
                display: ${
                  vendorsCTA.visibility === false ? "none" : "unset"
                };
                background-color: ${
                  vendorsCTA.buttonType === "filled"
                    ? vendorsCTA.buttonColor
                    : CUSTOMIZATION.banner.backgroundColor
                };
                border-color: ${
                  vendorsCTA.buttonType === "outlined"
                    ? vendorsCTA.buttonColor
                    : "none"
                };
                color: ${vendorsCTA.color};
                font-weight: ${
                  vendorsCTA.fontStyle.includes("bold") ? "bold" : ""
                };
                        text-decoration: ${
                          vendorsCTA.fontStyle.includes("underline")
                            ? "underline"
                            : ""
                        };
                        fontStyle: ${
                          vendorsCTA.fontStyle.includes("italic")
                            ? "italic"
                            : ""
                        };
              "
            >
              ${vendorsCTA.text}
            </button>
            <button
              id = "deny-button"
              class = ${buttonClassName[denyCTA.buttonType]}
              style = "
                display: ${(denyCTA.visibility === false)? "none":"unset"};
                background-color: ${(denyCTA.buttonType === "filled")? denyCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(denyCTA.buttonType === "outlined")? denyCTA.buttonColor: "none"};
                color: ${(denyCTA.color)};
                font-weight: ${(denyCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(denyCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(denyCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${denyCTA.text}
            </button>
            <button
              id = "accept-button"
              class = ${buttonClassName[acceptCTA.buttonType]}
              style = "
                display: ${(acceptCTA.visibility === false)? "none":"unset"};
                background-color: ${(acceptCTA.buttonType === "filled")? acceptCTA.buttonColor: CUSTOMIZATION.banner.backgroundColor};
                border-color: ${(acceptCTA.buttonType === "outlined")? acceptCTA.buttonColor: "none"};
                color: ${(acceptCTA.color)};
                font-weight: ${(acceptCTA.fontStyle.includes('bold'))? "bold":""};
                text-decoration: ${(acceptCTA.fontStyle.includes('underline'))? "underline":""};
                fontStyle: ${(acceptCTA.fontStyle.includes('italic'))? "italic":""};
              "
            >
              ${acceptCTA.text}
            </button>
          </div>
        </div>
      `;

    if(document.body) {
      document.body.appendChild(privadoPrivacyBanner);
      privadoPrivacyBanner.style.width = "auto";
      privadoPrivacyBanner.style.margin = "0px";
      privadoPrivacyBanner.style.borderRadius = "";
      privadoPrivacyBanner.style.top = "";
      privadoPrivacyBanner.style.left = "";
      privadoPrivacyBanner.style.right = "";
      privadoPrivacyBanner.style.bottom = "";
      
      privadoPrivacyBanner.classList.remove("fullWidth");
      privadoPrivacyBanner.classList.remove("compactWidth");
      switch (CUSTOMIZATION.banner.position) {
        case "top":
            privadoPrivacyBanner.style.top = "0";
            privadoPrivacyBanner.style.width = "100%";
            privadoPrivacyBanner.style.removeProperty("bottom");
            privadoPrivacyBanner.classList.add("fullWidth");
            break;
        case "mid":
          privadoPrivacyBanner.style.bottom = "";
          privadoPrivacyBanner.style.width = "100%";
          privadoPrivacyBanner.style.top = `calc(50% - ${privadoPrivacyBanner.offsetHeight/2}px)`;
          break;

        case "bottom":
            privadoPrivacyBanner.style.width = "100%";
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.top = "";
            privadoPrivacyBanner.classList.add("fullWidth");
            break;

        case "bottomLeft":
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.top = "";
            privadoPrivacyBanner.style.width = "35%";
            privadoPrivacyBanner.style.marginLeft = "20px";
            privadoPrivacyBanner.style.marginBottom = "20px";
            privadoPrivacyBanner.style.borderRadius = "12px";
            privadoPrivacyBanner.classList.add("compactWidth");
            break;

        case "bottomRight":
            privadoPrivacyBanner.style.bottom = "0";
            privadoPrivacyBanner.style.right = "0";
            privadoPrivacyBanner.style.left = "";
            privadoPrivacyBanner.style.width = "35%";
            privadoPrivacyBanner.style.marginRight = "20px";
            privadoPrivacyBanner.style.marginBottom = "20px";
            privadoPrivacyBanner.style.borderRadius = "12px";
            privadoPrivacyBanner.classList.add("compactWidth");
            break;
      }

      const manageSettingButtonClick = document.getElementById("manage-settings-button");
      const vendorsTabButtonClick = document.getElementById("vendor-button");
      const acceptAllButtonClick = document.getElementById("accept-button");
      const denyButtonClick = document.getElementById("deny-button");
      const hideBannerClick = document.getElementById("banner-close-icon");


      vendorsTabButtonClick.addEventListener("click", () => {
        cookieState.type = "openVendorModal";
        document.dispatchEvent(new Event("openVendorModal"));
      });

      manageSettingButtonClick.addEventListener('click', function () {
        // privado branding 
        const privadoBrandingElement = document.getElementById("privado-branding-wrap");
        if(privadoBrandingElement && CUSTOMIZATION.remove_privado_branding){
          privadoBrandingElement.style.display = 'none';
        }
        cookieState.type = "openModal";
        document.dispatchEvent(new Event("openModal"));
      });
      acceptAllButtonClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("acceptAllButtonClick"));
      });

      denyButtonClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("denyButtonClick"));
      });

      hideBannerClick.addEventListener('click', function () {
        document.dispatchEvent(new Event("hidePrivacyBanner"));
      });
    }
  }

  hidePrivacyBanner() {
    const privadoModal = document.getElementById("cookie-consent-banner");
    if (privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);
  }

  renderCookieTable() {
    // <div id="privado-cookie-table"></div>
    const privadoCookieTable = document.getElementById(`privado-cookie-table`);
    if(privadoCookieTable) {
      privadoCookieTable.innerHTML = `
        <table cell-spacing="0" class="demo-cookie-table demo-card ">
          <thead>
            <tr class="text-uppercase">
              <th class="demo-cookietable-heading-text">Cookie Name</th>
              <th class="demo-cookietable-heading-text">Host Name</th>
              <th class="demo-cookietable-heading-text">Duration</th>
              <th class="demo-cookietable-heading-text">Purpose</th>
            </tr>
          </thead>
          <tbody>
          ${COOKIELIST.map((cookie, i) => {
              return `
              <tr key={i} class="demo-cookietable-content">
                <td class="">${cookie.name}</td>
                <td class="">${cookie.hostname}</td>
                <td style="text-transform: capitalize;">${cookie.lifespan}</td>
                <td style="text-transform: capitalize;">${cookie.category || "Unknown"}</td>
              </tr>
              `}).join("")
          }
          </tbody>
        </table>
      `;
    }
  }
  savepreferences() {
    if (injectedOptions.isIabTcf){  tcModel.vendorLegitimateInterests.empty();
      tcModel.vendorLegitimateInterests.set(LEGITIMATE_VENDORS)
      tcModel.vendorConsents.empty();
      tcModel.vendorConsents.set(VENDORS_ALLOWED)
      tcModel.purposeLegitimateInterests.empty();
      tcModel.purposeLegitimateInterests.set(LEGITIMATE_PURPOSES);
      tcModel.purposeConsents.empty();
      tcModel.purposeConsents.set(PURPOSES_ALLOWED);
      tcModel.specialFeatureOptins.empty();
      tcModel.specialFeatureOptins.set(FEATURES_ALLOWED); 
    }

    this.setPreferenceCookies("Settings", "Save Preferences");
    const privadoModal = document.getElementById("manage-cookies");
    if(privadoModal)
      privadoModal.style.display = "none";

    this.consentGranted();
    this.removeAllEventListeners();
  }

  denyConsent() {
    VENDORS_ALLOWED = [];
    PURPOSES_ALLOWED = [];
    FEATURES_ALLOWED = [];
    tcModel.vendorConsents.empty();
    tcModel.purposeConsents.empty();
    tcModel.specialFeatureOptins.empty();
    COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
      if(category.state === 2)
        return [...acc, category.key];
      return acc;
    }, []);

    this.setPreferenceCookies("Cookie Banner", "Reject All");

    const privadoModal = document.getElementById("cookie-consent-banner");
    if(privadoModal)
      privadoModal.parentNode.removeChild(privadoModal);

    this.consentGranted();
    this.removeAllEventListeners();
  }


  initialiseCookiesAndScriptBlocking() {
    if(document.readyState !== "loading") {
      this.domLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", this.domLoaded);
    }
    this.getWebsiteLanguage();

    // start listening to event messages dispatched by frames
    window.addEventListener("message", event => {
      try {
        if(event.data && event.data.startsWith("[PRIVADO_EVENT]")) {
          const privadoEvent = event.data.replace("[PRIVADO_EVENT] ", "");
          document.dispatchEvent(new Event(privadoEvent));
          if(event.source) {
            event.source.postMessage(`[PRIVADO_EVENT_ACK] ${privadoEvent}`, event.origin);
          }
        }
      } catch(e){}
    });

    if (FLOW !== "NOTICE") {
      document.addEventListener("openVendorModal", this.openVendorModal);
      document.addEventListener("openModal", this.openModal);
      document.addEventListener("acceptAllButtonClick", this.acceptAll);
      document.addEventListener("denyButtonClick", this.denyConsent);
      document.addEventListener("savePreferences", this.savepreferences);
      document.addEventListener("changeConsent", () => {
        cookieState.type = "changeConsent";
        updateTCString(true);
        this.openModal("changeConsent");
      });
      document.addEventListener("revokeConsent", this.consentRevoked);
      document.addEventListener("hidePrivacyBanner", this.hidePrivacyBanner);
      document.addEventListener("hideManageModal", this.hideManageModal);
    }
    else {
      document.addEventListener("noticeButtonClicked", this.hideNoticeBanner);
    }
    // Call privacy observer for notice also
    // since manually blocked scripts needs to be unblocked
    // works when consent is set (preferences exist)
    this.setPrivacyObserver.call(this);
  }
}

// static definitions
window.PRIVADO = {
  addEventListener: (event, eventFn) => { 
    document.addEventListener(event, eventFn);
  },
  cookieConsent: new CookieConsent({ injectedOptions }),
};

// when either preferences or preferences_tcf is set
var preferenceSet = document.cookie.split('; ').find(row => row.startsWith('preferences'));
if(!preferenceSet){
  window.PRIVADO.cookieConsent.setPrivacyObserver();

  // Reinitialize COOKIES_ALLOWED
  switch(FLOW) {
    case "OPT_IN":
    case "IMPLIED_OPT_IN":
      COOKIES_ALLOWED = CATEGORIZATION.reduce((acc, category) => {
        if(category.state === 2)
          return [...acc, category.key];
        return acc;
      }, []);
      break;
    case "OPT_OUT":
    case "NOTICE":
      COOKIES_ALLOWED = COOKIE_TYPES;
      break;
    default:
  }

  window.PRIVADO.cookieConsent.initialiseCookiesAndScriptBlocking();
}
else {
  window.PRIVADO.cookieConsent.initialiseCookiesAndScriptBlocking();
}

},{"@iabtcf/stub":2,"@iabtechlabtcf/cmpapi":20,"@iabtechlabtcf/core":61}],2:[function(require,module,exports){
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var t=function(){var t,e,o=[],n=window,r=n;for(;r;){try{if(r.frames.__tcfapiLocator){t=r;break}}catch(t){}if(r===n.top)break;r=r.parent}t||(!function t(){var e=n.document,o=!!n.frames.__tcfapiLocator;if(!o)if(e.body){var r=e.createElement("iframe");r.style.cssText="display:none",r.name="__tcfapiLocator",e.body.appendChild(r)}else setTimeout(t,5);return!o}(),n.__tcfapi=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return o;"setGdprApplies"===n[0]?n.length>3&&2===parseInt(n[1],10)&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0)):"ping"===n[0]?"function"==typeof n[2]&&n[2]({gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"}):o.push(n)},n.addEventListener("message",(function(t){var e="string"==typeof t.data,o={};if(e)try{o=JSON.parse(t.data)}catch(t){}else o=t.data;var n="object"===_typeof(o)&&null!==o?o.__tcfapiCall:null;n&&window.__tcfapi(n.command,n.version,(function(o,r){var a={__tcfapiReturn:{returnValue:o,success:r,callId:n.callId}};t&&t.source&&t.source.postMessage&&t.source.postMessage(e?JSON.stringify(a):a,"*")}),n.parameter)}),!1))};"undefined"!=typeof module?module.exports=t:t()}();
},{}],3:[function(require,module,exports){
"use strict";var __read=this&&this.__read||function(o,n){var e="function"==typeof Symbol&&o[Symbol.iterator];if(!e)return o;var s,a,i=e.call(o),t=[];try{for(;(void 0===n||n-- >0)&&!(s=i.next()).done;)t.push(s.value)}catch(o){a={error:o}}finally{try{s&&!s.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return t},__spreadArray=this&&this.__spreadArray||function(o,n,e){if(e||2===arguments.length)for(var s,a=0,i=n.length;a<i;a++)!s&&a in n||(s||(s=Array.prototype.slice.call(n,0,a)),s[a]=n[a]);return o.concat(s||Array.prototype.slice.call(n))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CallResponder=exports.API_KEY=void 0;var index_js_1=require("./command/index.js"),CommandMap_js_1=require("./command/CommandMap.js"),CmpApiModel_js_1=require("./CmpApiModel.js"),Disabled_js_1=require("./response/Disabled.js"),SupportedVersions_js_1=require("./SupportedVersions.js");exports.API_KEY="__tcfapi";var CallResponder=function(){function o(o){if(o){var n=index_js_1.TCFCommand.ADD_EVENT_LISTENER;if(null==o?void 0:o[n])throw new Error("Built-In Custom Commmand for ".concat(n," not allowed: Use ").concat(index_js_1.TCFCommand.GET_TC_DATA," instead"));if(n=index_js_1.TCFCommand.REMOVE_EVENT_LISTENER,null==o?void 0:o[n])throw new Error("Built-In Custom Commmand for ".concat(n," not allowed"));(null==o?void 0:o[index_js_1.TCFCommand.GET_TC_DATA])&&(o[index_js_1.TCFCommand.ADD_EVENT_LISTENER]=o[index_js_1.TCFCommand.GET_TC_DATA],o[index_js_1.TCFCommand.REMOVE_EVENT_LISTENER]=o[index_js_1.TCFCommand.GET_TC_DATA]),this.customCommands=o}try{this.callQueue=window[exports.API_KEY]()||[]}catch(o){this.callQueue=[]}finally{window[exports.API_KEY]=this.apiCall.bind(this),this.purgeQueuedCalls()}}return o.prototype.apiCall=function(o,n,e){for(var s,a=[],i=3;i<arguments.length;i++)a[i-3]=arguments[i];if("string"!=typeof o)e(null,!1);else if(SupportedVersions_js_1.SupportedVersions.has(n)){if("function"!=typeof e)throw new Error("invalid callback function");CmpApiModel_js_1.CmpApiModel.disabled?e(new Disabled_js_1.Disabled,!1):this.isCustomCommand(o)||this.isBuiltInCommand(o)?this.isCustomCommand(o)&&!this.isBuiltInCommand(o)?(s=this.customCommands)[o].apply(s,__spreadArray([e],__read(a),!1)):o===index_js_1.TCFCommand.PING?this.isCustomCommand(o)?new CommandMap_js_1.CommandMap[o](this.customCommands[o],a[0],null,e):new CommandMap_js_1.CommandMap[o](e,a[0]):void 0===CmpApiModel_js_1.CmpApiModel.tcModel?this.callQueue.push(__spreadArray([o,n,e],__read(a),!1)):this.isCustomCommand(o)&&this.isBuiltInCommand(o)?new CommandMap_js_1.CommandMap[o](this.customCommands[o],a[0],null,e):new CommandMap_js_1.CommandMap[o](e,a[0]):e(null,!1)}else e(null,!1)},o.prototype.purgeQueuedCalls=function(){var o=this.callQueue;this.callQueue=[],o.forEach((function(o){window[exports.API_KEY].apply(window,__spreadArray([],__read(o),!1))}))},o.prototype.isCustomCommand=function(o){return this.customCommands&&"function"==typeof this.customCommands[o]},o.prototype.isBuiltInCommand=function(o){return void 0!==CommandMap_js_1.CommandMap[o]},o}();exports.CallResponder=CallResponder;
},{"./CmpApiModel.js":5,"./SupportedVersions.js":8,"./command/CommandMap.js":12,"./command/index.js":19,"./response/Disabled.js":21}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CmpApi=void 0;var CmpApiModel_js_1=require("./CmpApiModel.js"),index_js_1=require("./status/index.js"),CallResponder_js_1=require("./CallResponder.js"),core_1=require("@iabtechlabtcf/core"),CmpApi=function(){function p(p,e,i,o){void 0===i&&(i=!1),this.numUpdates=0,this.throwIfInvalidInt(p,"cmpId",2),this.throwIfInvalidInt(e,"cmpVersion",0),CmpApiModel_js_1.CmpApiModel.cmpId=p,CmpApiModel_js_1.CmpApiModel.cmpVersion=e,CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion=4,this.isServiceSpecific=!!i,this.callResponder=new CallResponder_js_1.CallResponder(o)}return p.prototype.throwIfInvalidInt=function(p,e,i){if(!("number"==typeof p&&Number.isInteger(p)&&p>=i))throw new Error("Invalid ".concat(e,": ").concat(p))},p.prototype.update=function(p,e){if(void 0===e&&(e=!1),CmpApiModel_js_1.CmpApiModel.disabled)throw new Error("CmpApi Disabled");CmpApiModel_js_1.CmpApiModel.cmpStatus=index_js_1.CmpStatus.LOADED,e?(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.VISIBLE,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.CMP_UI_SHOWN):void 0===CmpApiModel_js_1.CmpApiModel.tcModel?(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.DISABLED,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.TC_LOADED):(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.HIDDEN,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.USER_ACTION_COMPLETE),CmpApiModel_js_1.CmpApiModel.gdprApplies=null!==p,CmpApiModel_js_1.CmpApiModel.gdprApplies?(""===p?(CmpApiModel_js_1.CmpApiModel.tcModel=new core_1.TCModel,CmpApiModel_js_1.CmpApiModel.tcModel.cmpId=CmpApiModel_js_1.CmpApiModel.cmpId,CmpApiModel_js_1.CmpApiModel.tcModel.cmpVersion=CmpApiModel_js_1.CmpApiModel.cmpVersion):CmpApiModel_js_1.CmpApiModel.tcModel=core_1.TCString.decode(p),CmpApiModel_js_1.CmpApiModel.tcModel.isServiceSpecific=this.isServiceSpecific,CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion=Number(CmpApiModel_js_1.CmpApiModel.tcModel.policyVersion),CmpApiModel_js_1.CmpApiModel.tcString=p):CmpApiModel_js_1.CmpApiModel.tcModel=null,0===this.numUpdates?this.callResponder.purgeQueuedCalls():CmpApiModel_js_1.CmpApiModel.eventQueue.exec(),this.numUpdates++},p.prototype.disable=function(){CmpApiModel_js_1.CmpApiModel.disabled=!0,CmpApiModel_js_1.CmpApiModel.cmpStatus=index_js_1.CmpStatus.ERROR},p}();exports.CmpApi=CmpApi;
},{"./CallResponder.js":3,"./CmpApiModel.js":5,"./status/index.js":30,"@iabtechlabtcf/core":61}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CmpApiModel=void 0;var index_js_1=require("./status/index.js"),EventListenerQueue_js_1=require("./EventListenerQueue.js"),CmpApiModel=function(){function e(){}return e.reset=function(){delete this.cmpId,delete this.cmpVersion,delete this.eventStatus,delete this.gdprApplies,delete this.tcModel,delete this.tcString,delete this.tcfPolicyVersion,this.cmpStatus=index_js_1.CmpStatus.LOADING,this.disabled=!1,this.displayStatus=index_js_1.DisplayStatus.HIDDEN,this.eventQueue.clear()},e.apiVersion="2",e.eventQueue=new EventListenerQueue_js_1.EventListenerQueue,e.cmpStatus=index_js_1.CmpStatus.LOADING,e.disabled=!1,e.displayStatus=index_js_1.DisplayStatus.HIDDEN,e}();exports.CmpApiModel=CmpApiModel;
},{"./EventListenerQueue.js":7,"./status/index.js":30}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventListenerQueue=void 0;var GetTCDataCommand_js_1=require("./command/GetTCDataCommand.js"),EventListenerQueue=function(){function e(){this.eventQueue=new Map,this.queueNumber=0}return e.prototype.add=function(e){return this.eventQueue.set(this.queueNumber,e),this.queueNumber++},e.prototype.remove=function(e){return this.eventQueue.delete(e)},e.prototype.exec=function(){this.eventQueue.forEach((function(e,t){new GetTCDataCommand_js_1.GetTCDataCommand(e.callback,e.param,t,e.next)}))},e.prototype.clear=function(){this.queueNumber=0,this.eventQueue.clear()},Object.defineProperty(e.prototype,"size",{get:function(){return this.eventQueue.size},enumerable:!1,configurable:!0}),e}();exports.EventListenerQueue=EventListenerQueue;
},{"./command/GetTCDataCommand.js":14}],8:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SupportedVersions=void 0;var SupportedVersions=function(){function e(){}return e.has=function(e){return"string"==typeof e&&(e=Number(e)),this.set_.has(e)},e.set_=new Set([0,2,void 0,null]),e}();exports.SupportedVersions=SupportedVersions;
},{}],9:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.AddEventListenerCommand=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),GetTCDataCommand_js_1=require("./GetTCDataCommand.js"),AddEventListenerCommand=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.respond=function(){this.listenerId=CmpApiModel_js_1.CmpApiModel.eventQueue.add({callback:this.callback,param:this.param,next:this.next}),t.prototype.respond.call(this)},e}(GetTCDataCommand_js_1.GetTCDataCommand);exports.AddEventListenerCommand=AddEventListenerCommand;
},{"../CmpApiModel.js":5,"./GetTCDataCommand.js":14}],10:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Command=void 0;var Command=function(){function t(t,e,n,a){this.success=!0,Object.assign(this,{callback:t,listenerId:n,param:e,next:a});try{this.respond()}catch(t){this.invokeCallback(null)}}return t.prototype.invokeCallback=function(t){var e=null!==t;"function"==typeof this.next?this.callback(this.next,t,e):this.callback(t,e)},t}();exports.Command=Command;
},{}],11:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],12:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommandMap=void 0;var PingCommand_js_1=require("./PingCommand.js"),GetTCDataCommand_js_1=require("./GetTCDataCommand.js"),GetInAppTCDataCommand_js_1=require("./GetInAppTCDataCommand.js"),GetVendorListCommand_js_1=require("./GetVendorListCommand.js"),AddEventListenerCommand_js_1=require("./AddEventListenerCommand.js"),RemoveEventListenerCommand_js_1=require("./RemoveEventListenerCommand.js"),TCFCommand_js_1=require("./TCFCommand.js"),CommandMap=function(){function m(){}var n,e,C,a,o,d;return n=TCFCommand_js_1.TCFCommand.PING,e=TCFCommand_js_1.TCFCommand.GET_TC_DATA,C=TCFCommand_js_1.TCFCommand.GET_IN_APP_TC_DATA,a=TCFCommand_js_1.TCFCommand.GET_VENDOR_LIST,o=TCFCommand_js_1.TCFCommand.ADD_EVENT_LISTENER,d=TCFCommand_js_1.TCFCommand.REMOVE_EVENT_LISTENER,m[n]=PingCommand_js_1.PingCommand,m[e]=GetTCDataCommand_js_1.GetTCDataCommand,m[C]=GetInAppTCDataCommand_js_1.GetInAppTCDataCommand,m[a]=GetVendorListCommand_js_1.GetVendorListCommand,m[o]=AddEventListenerCommand_js_1.AddEventListenerCommand,m[d]=RemoveEventListenerCommand_js_1.RemoveEventListenerCommand,m}();exports.CommandMap=CommandMap;
},{"./AddEventListenerCommand.js":9,"./GetInAppTCDataCommand.js":13,"./GetTCDataCommand.js":14,"./GetVendorListCommand.js":15,"./PingCommand.js":16,"./RemoveEventListenerCommand.js":17,"./TCFCommand.js":18}],13:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.GetInAppTCDataCommand=void 0;var GetTCDataCommand_js_1=require("./GetTCDataCommand.js"),index_js_1=require("../response/index.js"),GetInAppTCDataCommand=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.prototype.respond=function(){this.throwIfParamInvalid(),this.invokeCallback(new index_js_1.InAppTCData(this.param))},n}(GetTCDataCommand_js_1.GetTCDataCommand);exports.GetInAppTCDataCommand=GetInAppTCDataCommand;
},{"../response/index.js":26,"./GetTCDataCommand.js":14}],14:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.GetTCDataCommand=void 0;var Command_js_1=require("./Command.js"),index_js_1=require("../response/index.js"),GetTCDataCommand=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.respond=function(){this.throwIfParamInvalid(),this.invokeCallback(new index_js_1.TCData(this.param,this.listenerId))},r.prototype.throwIfParamInvalid=function(){if(!(void 0===this.param||Array.isArray(this.param)&&this.param.every(Number.isInteger)))throw new Error("Invalid Parameter")},r}(Command_js_1.Command);exports.GetTCDataCommand=GetTCDataCommand;
},{"../response/index.js":26,"./Command.js":10}],15:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.GetVendorListCommand=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),Command_js_1=require("./Command.js"),core_1=require("@iabtechlabtcf/core"),GetVendorListCommand=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.respond=function(){var t,e=this,o=CmpApiModel_js_1.CmpApiModel.tcModel,r=o.vendorListVersion;void 0===this.param&&(this.param=r),(t=this.param===r&&o.gvl?o.gvl:new core_1.GVL(this.param)).readyPromise.then((function(){e.invokeCallback(t.getJson())}))},e}(Command_js_1.Command);exports.GetVendorListCommand=GetVendorListCommand;
},{"../CmpApiModel.js":5,"./Command.js":10,"@iabtechlabtcf/core":61}],16:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.PingCommand=void 0;var index_js_1=require("../response/index.js"),Command_js_1=require("./Command.js"),PingCommand=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.respond=function(){this.invokeCallback(new index_js_1.Ping)},t}(Command_js_1.Command);exports.PingCommand=PingCommand;
},{"../response/index.js":26,"./Command.js":10}],17:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveEventListenerCommand=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),Command_js_1=require("./Command.js"),RemoveEventListenerCommand=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.respond=function(){this.invokeCallback(CmpApiModel_js_1.CmpApiModel.eventQueue.remove(this.param))},t}(Command_js_1.Command);exports.RemoveEventListenerCommand=RemoveEventListenerCommand;
},{"../CmpApiModel.js":5,"./Command.js":10}],18:[function(require,module,exports){
"use strict";var TCFCommand;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TCFCommand=void 0,function(e){e.PING="ping",e.GET_TC_DATA="getTCData",e.GET_IN_APP_TC_DATA="getInAppTCData",e.GET_VENDOR_LIST="getVendorList",e.ADD_EVENT_LISTENER="addEventListener",e.REMOVE_EVENT_LISTENER="removeEventListener"}(TCFCommand=exports.TCFCommand||(exports.TCFCommand={}));
},{}],19:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,o)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./TCFCommand.js"),exports),__exportStar(require("./CommandCallback.js"),exports);
},{"./CommandCallback.js":11,"./TCFCommand.js":18}],20:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var i=Object.getOwnPropertyDescriptor(r,t);i&&!("get"in i?!r.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,i)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.API_KEY=void 0,__exportStar(require("./command/index.js"),exports),__exportStar(require("./response/index.js"),exports),__exportStar(require("./status/index.js"),exports),__exportStar(require("./CmpApi.js"),exports),__exportStar(require("./CmpApiModel.js"),exports),__exportStar(require("./CustomCommands.js"),exports);var CallResponder_js_1=require("./CallResponder.js");Object.defineProperty(exports,"API_KEY",{enumerable:!0,get:function(){return CallResponder_js_1.API_KEY}});
},{"./CallResponder.js":3,"./CmpApi.js":4,"./CmpApiModel.js":5,"./CustomCommands.js":6,"./command/index.js":19,"./response/index.js":26,"./status/index.js":30}],21:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.Disabled=void 0;var Response_js_1=require("./Response.js"),index_js_1=require("../status/index.js"),Disabled=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cmpStatus=index_js_1.CmpStatus.ERROR,e}return __extends(e,t),e}(Response_js_1.Response);exports.Disabled=Disabled;
},{"../status/index.js":30,"./Response.js":24}],22:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__read=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},__spreadArray=this&&this.__spreadArray||function(t,r,e){if(e||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.InAppTCData=void 0;var TCData_js_1=require("./TCData.js"),InAppTCData=function(t){function r(r){var e=t.call(this,r)||this;return delete e.outOfBand,e}return __extends(r,t),r.prototype.createVectorField=function(t){return __spreadArray([],__read(t),!1).reduce((function(t,r){return t+=r[1]?"1":"0"}),"")},r.prototype.createRestrictions=function(t){var r={};if(t.numRestrictions>0){var e=t.getMaxVendorId();t.getRestrictions().forEach((function(t){r[t.purposeId.toString()]="_".repeat(e)}));for(var n=function(e){var n=e+1;t.getRestrictions(n).forEach((function(t){var n=t.restrictionType.toString(),o=t.purposeId.toString(),a=r[o].substr(0,e),i=r[o].substr(e+1);r[o]=a+n+i}))},o=0;o<e;o++)n(o)}return r},r}(TCData_js_1.TCData);exports.InAppTCData=InAppTCData;
},{"./TCData.js":25}],23:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(o,t)};return function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function p(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(p.prototype=t.prototype,new p)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ping=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),Response_js_1=require("./Response.js"),Ping=function(e){function o(){var o=e.call(this)||this;return o.cmpLoaded=!0,o.cmpStatus=CmpApiModel_js_1.CmpApiModel.cmpStatus,o.displayStatus=CmpApiModel_js_1.CmpApiModel.displayStatus,o.apiVersion=String(CmpApiModel_js_1.CmpApiModel.apiVersion),CmpApiModel_js_1.CmpApiModel.tcModel&&CmpApiModel_js_1.CmpApiModel.tcModel.vendorListVersion&&(o.gvlVersion=+CmpApiModel_js_1.CmpApiModel.tcModel.vendorListVersion),o}return __extends(o,e),o}(Response_js_1.Response);exports.Ping=Ping;
},{"../CmpApiModel.js":5,"./Response.js":24}],24:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Response=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),Response=function(){this.cmpId=CmpApiModel_js_1.CmpApiModel.cmpId,this.cmpVersion=CmpApiModel_js_1.CmpApiModel.cmpVersion,this.gdprApplies=CmpApiModel_js_1.CmpApiModel.gdprApplies,this.tcfPolicyVersion=CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion};exports.Response=Response;
},{"../CmpApiModel.js":5}],25:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=s.next()).done;)i.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return i},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,s=t.length;n<s;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TCData=void 0;var CmpApiModel_js_1=require("../CmpApiModel.js"),Response_js_1=require("./Response.js"),TCData=function(e){function t(t,r){var o=e.call(this)||this;if(o.eventStatus=CmpApiModel_js_1.CmpApiModel.eventStatus,o.cmpStatus=CmpApiModel_js_1.CmpApiModel.cmpStatus,o.listenerId=r,CmpApiModel_js_1.CmpApiModel.gdprApplies){var n=CmpApiModel_js_1.CmpApiModel.tcModel;o.tcString=CmpApiModel_js_1.CmpApiModel.tcString,o.isServiceSpecific=n.isServiceSpecific,o.useNonStandardTexts=n.useNonStandardTexts,o.purposeOneTreatment=n.purposeOneTreatment,o.publisherCC=n.publisherCountryCode,o.outOfBand={allowedVendors:o.createVectorField(n.vendorsAllowed,t),disclosedVendors:o.createVectorField(n.vendorsDisclosed,t)},o.purpose={consents:o.createVectorField(n.purposeConsents),legitimateInterests:o.createVectorField(n.purposeLegitimateInterests)},o.vendor={consents:o.createVectorField(n.vendorConsents,t),legitimateInterests:o.createVectorField(n.vendorLegitimateInterests,t)},o.specialFeatureOptins=o.createVectorField(n.specialFeatureOptins),o.publisher={consents:o.createVectorField(n.publisherConsents),legitimateInterests:o.createVectorField(n.publisherLegitimateInterests),customPurpose:{consents:o.createVectorField(n.publisherCustomConsents),legitimateInterests:o.createVectorField(n.publisherCustomLegitimateInterests)},restrictions:o.createRestrictions(n.publisherRestrictions)}}return o}return __extends(t,e),t.prototype.createRestrictions=function(e){var t={};if(e.numRestrictions>0)for(var r=e.getMaxVendorId(),o=function(r){var o=r.toString();e.getRestrictions(r).forEach((function(e){var r=e.purposeId.toString();t[r]||(t[r]={}),t[r][o]=e.restrictionType}))},n=1;n<=r;n++)o(n);return t},t.prototype.createVectorField=function(e,t){return t?t.reduce((function(t,r){return t[String(r)]=e.has(Number(r)),t}),{}):__spreadArray([],__read(e),!1).reduce((function(e,t){return e[t[0].toString(10)]=t[1],e}),{})},t}(Response_js_1.Response);exports.TCData=TCData;
},{"../CmpApiModel.js":5,"./Response.js":24}],26:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,i){void 0===i&&(i=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,i,o)}:function(e,r,t,i){void 0===i&&(i=t),e[i]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./Disabled.js"),exports),__exportStar(require("./InAppTCData.js"),exports),__exportStar(require("./Ping.js"),exports),__exportStar(require("./Response.js"),exports),__exportStar(require("./TCData.js"),exports);
},{"./Disabled.js":21,"./InAppTCData.js":22,"./Ping.js":23,"./Response.js":24,"./TCData.js":25}],27:[function(require,module,exports){
"use strict";var CmpStatus;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CmpStatus=void 0,function(t){t.STUB="stub",t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"}(CmpStatus=exports.CmpStatus||(exports.CmpStatus={}));
},{}],28:[function(require,module,exports){
"use strict";var DisplayStatus;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DisplayStatus=void 0,function(s){s.VISIBLE="visible",s.HIDDEN="hidden",s.DISABLED="disabled"}(DisplayStatus=exports.DisplayStatus||(exports.DisplayStatus={}));
},{}],29:[function(require,module,exports){
"use strict";var EventStatus;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventStatus=void 0,function(t){t.TC_LOADED="tcloaded",t.CMP_UI_SHOWN="cmpuishown",t.USER_ACTION_COMPLETE="useractioncomplete"}(EventStatus=exports.EventStatus||(exports.EventStatus={}));
},{}],30:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,o)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./CmpStatus.js"),exports),__exportStar(require("./DisplayStatus.js"),exports),__exportStar(require("./EventStatus.js"),exports);
},{"./CmpStatus.js":27,"./DisplayStatus.js":28,"./EventStatus.js":29}],31:[function(require,module,exports){
"use strict";var __values=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cloneable=void 0;var Cloneable=function(){function e(){}return e.prototype.clone=function(){var e=this,r=new this.constructor;return Object.keys(this).forEach((function(t){var n=e.deepClone(e[t]);void 0!==n&&(r[t]=n)})),r},e.prototype.deepClone=function(e){var r,t,n=typeof e;if("number"===n||"string"===n||"boolean"===n)return e;if(null!==e&&"object"===n){if("function"==typeof e.clone)return e.clone();if(e instanceof Date)return new Date(e.getTime());if(void 0!==e[Symbol.iterator]){var o=[];try{for(var i=__values(e),l=i.next();!l.done;l=i.next()){var a=l.value;o.push(this.deepClone(a))}}catch(e){r={error:e}}finally{try{l&&!l.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return e instanceof Array?o:new e.constructor(o)}var u={};for(var f in e)e.hasOwnProperty(f)&&(u[f]=this.deepClone(e[f]));return u}},e}();exports.Cloneable=Cloneable;
},{}],32:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(i=0)),i;)try{if(r=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(6===a[0]&&i.label<s[1]){i.label=s[1],s=a;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(a);break}s[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GVL=void 0;var Cloneable_js_1=require("./Cloneable.js"),index_js_1=require("./errors/index.js"),Json_js_1=require("./Json.js"),index_js_2=require("./model/index.js"),GVL=function(e){function t(r){var n=e.call(this)||this;n.isReady_=!1,n.isLatest=!1;var s=t.baseUrl;if(n.lang_=t.DEFAULT_LANGUAGE,n.cacheLang_=t.DEFAULT_LANGUAGE,n.isVendorList(r))n.populate(r),n.readyPromise=Promise.resolve();else{if(!s)throw new index_js_1.GVLError("must specify GVL.baseUrl before loading GVL json");if(r>0){var o=r;t.CACHE.has(o)?(n.populate(t.CACHE.get(o)),n.readyPromise=Promise.resolve()):(s+=t.versionedFilename.replace("[VERSION]",String(o)),n.readyPromise=n.fetchJson(s))}else t.CACHE.has(t.LATEST_CACHE_KEY)?(n.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),n.readyPromise=Promise.resolve()):(n.isLatest=!0,n.readyPromise=n.fetchJson(s+t.latestFilename))}return n}return __extends(t,e),Object.defineProperty(t,"baseUrl",{get:function(){return this.baseUrl_},set:function(e){if(/^https?:\/\/vendorlist\.consensu\.org\//.test(e))throw new index_js_1.GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");e.length>0&&"/"!==e[e.length-1]&&(e+="/"),this.baseUrl_=e},enumerable:!1,configurable:!0}),t.emptyLanguageCache=function(e){var r=!1;return null==e&&t.LANGUAGE_CACHE.size>0?(t.LANGUAGE_CACHE=new Map,r=!0):"string"==typeof e&&this.consentLanguages.has(e.toUpperCase())&&(t.LANGUAGE_CACHE.delete(e.toUpperCase()),r=!0),r},t.emptyCache=function(e){var r=!1;return Number.isInteger(e)&&e>=0?(t.CACHE.delete(e),r=!0):void 0===e&&(t.CACHE=new Map,r=!0),r},t.prototype.cacheLanguage=function(){t.LANGUAGE_CACHE.has(this.cacheLang_)||t.LANGUAGE_CACHE.set(this.cacheLang_,{purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,dataCategories:this.dataCategories})},t.prototype.fetchJson=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=this.populate,[4,Json_js_1.Json.fetch(e)];case 1:return t.apply(this,[n.sent()]),[3,3];case 2:throw r=n.sent(),new index_js_1.GVLError(r.message);case 3:return[2]}}))}))},t.prototype.getJson=function(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,dataCategories:this.dataCategories,vendors:this.fullVendorList}))},t.prototype.changeLanguage=function(e){return __awaiter(this,void 0,void 0,(function(){var r,n,s,o,i,a;return __generator(this,(function(u){switch(u.label){case 0:r=e;try{r=t.consentLanguages.parseLanguage(e)}catch(e){throw new index_js_1.GVLError("Error during parsing the language: "+e.message)}if(n=e.toUpperCase(),r.toLowerCase()===t.DEFAULT_LANGUAGE.toLowerCase()&&!t.LANGUAGE_CACHE.has(n))return[2];if(r===this.lang_)return[3,5];if(this.lang_=r,!t.LANGUAGE_CACHE.has(n))return[3,1];for(o in s=t.LANGUAGE_CACHE.get(n))s.hasOwnProperty(o)&&(this[o]=s[o]);return[3,5];case 1:i=t.baseUrl+t.languageFilename.replace("[LANG]",this.lang_.toLowerCase()),u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this.fetchJson(i)];case 3:return u.sent(),this.cacheLang_=n,this.cacheLanguage(),[3,5];case 4:throw a=u.sent(),new index_js_1.GVLError("unable to load language: "+a.message);case 5:return[2]}}))}))},Object.defineProperty(t.prototype,"language",{get:function(){return this.lang_},enumerable:!1,configurable:!0}),t.prototype.isVendorList=function(e){return void 0!==e&&void 0!==e.vendors},t.prototype.populate=function(e){this.purposes=e.purposes,this.specialPurposes=e.specialPurposes,this.features=e.features,this.specialFeatures=e.specialFeatures,this.stacks=e.stacks,this.dataCategories=e.dataCategories,this.isVendorList(e)&&(this.gvlSpecificationVersion=e.gvlSpecificationVersion,this.tcfPolicyVersion=e.tcfPolicyVersion,this.vendorListVersion=e.vendorListVersion,this.lastUpdated=e.lastUpdated,"string"==typeof this.lastUpdated&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors_=e.vendors,this.fullVendorList=e.vendors,this.mapVendors(),this.isReady_=!0,this.isLatest&&t.CACHE.set(t.LATEST_CACHE_KEY,this.getJson()),t.CACHE.has(this.vendorListVersion)||t.CACHE.set(this.vendorListVersion,this.getJson())),this.cacheLanguage()},t.prototype.mapVendors=function(e){var t=this;this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach((function(e){t.byPurposeVendorMap[e]={legInt:new Set,consent:new Set,flexible:new Set}})),Object.keys(this.specialPurposes).forEach((function(e){t.bySpecialPurposeVendorMap[e]=new Set})),Object.keys(this.features).forEach((function(e){t.byFeatureVendorMap[e]=new Set})),Object.keys(this.specialFeatures).forEach((function(e){t.bySpecialFeatureVendorMap[e]=new Set})),Array.isArray(e)||(e=Object.keys(this.fullVendorList).map((function(e){return+e}))),this.vendorIds=new Set(e),this.vendors_=e.reduce((function(e,r){var n=t.vendors_[String(r)];return n&&void 0===n.deletedDate&&(n.purposes.forEach((function(e){t.byPurposeVendorMap[String(e)].consent.add(r)})),n.specialPurposes.forEach((function(e){t.bySpecialPurposeVendorMap[String(e)].add(r)})),n.legIntPurposes.forEach((function(e){t.byPurposeVendorMap[String(e)].legInt.add(r)})),n.flexiblePurposes&&n.flexiblePurposes.forEach((function(e){t.byPurposeVendorMap[String(e)].flexible.add(r)})),n.features.forEach((function(e){t.byFeatureVendorMap[String(e)].add(r)})),n.specialFeatures.forEach((function(e){t.bySpecialFeatureVendorMap[String(e)].add(r)})),e[r]=n),e}),{})},t.prototype.getFilteredVendors=function(e,t,r,n){var s=this,o=e.charAt(0).toUpperCase()+e.slice(1),i={};return("purpose"===e&&r?this["by"+o+"VendorMap"][String(t)][r]:this["by"+(n?"Special":"")+o+"VendorMap"][String(t)]).forEach((function(e){i[String(e)]=s.vendors[String(e)]})),i},t.prototype.getVendorsWithConsentPurpose=function(e){return this.getFilteredVendors("purpose",e,"consent")},t.prototype.getVendorsWithLegIntPurpose=function(e){return this.getFilteredVendors("purpose",e,"legInt")},t.prototype.getVendorsWithFlexiblePurpose=function(e){return this.getFilteredVendors("purpose",e,"flexible")},t.prototype.getVendorsWithSpecialPurpose=function(e){return this.getFilteredVendors("purpose",e,void 0,!0)},t.prototype.getVendorsWithFeature=function(e){return this.getFilteredVendors("feature",e)},t.prototype.getVendorsWithSpecialFeature=function(e){return this.getFilteredVendors("feature",e,void 0,!0)},Object.defineProperty(t.prototype,"vendors",{get:function(){return this.vendors_},enumerable:!1,configurable:!0}),t.prototype.narrowVendorsTo=function(e){this.mapVendors(e)},Object.defineProperty(t.prototype,"isReady",{get:function(){return this.isReady_},enumerable:!1,configurable:!0}),t.prototype.clone=function(){var e=new t(this.getJson());return this.lang_!==t.DEFAULT_LANGUAGE&&e.changeLanguage(this.lang_),e},t.isInstanceOf=function(e){return"object"==typeof e&&"function"==typeof e.narrowVendorsTo},t.LANGUAGE_CACHE=new Map,t.CACHE=new Map,t.LATEST_CACHE_KEY=0,t.DEFAULT_LANGUAGE="EN",t.consentLanguages=new index_js_2.ConsentLanguages,t.latestFilename="vendor-list.json",t.versionedFilename="archives/vendor-list-v[VERSION].json",t.languageFilename="purposes-[LANG].json",t}(Cloneable_js_1.Cloneable);exports.GVL=GVL;
},{"./Cloneable.js":31,"./Json.js":33,"./errors/index.js":60,"./model/index.js":85}],33:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Json=void 0;var Json=function(){function e(){}return e.absCall=function(e,t,n,r){return new Promise((function(o,s){var i=new XMLHttpRequest;i.withCredentials=n,i.addEventListener("load",(function(){if(i.readyState==XMLHttpRequest.DONE)if(i.status>=200&&i.status<300){var e=i.response;if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}o(e)}else s(new Error("HTTP Status: ".concat(i.status," response type: ").concat(i.responseType)))})),i.addEventListener("error",(function(){s(new Error("error"))})),i.addEventListener("abort",(function(){s(new Error("aborted"))})),null===t?i.open("GET",e,!0):i.open("POST",e,!0),i.responseType="json",i.timeout=r,i.ontimeout=function(){s(new Error("Timeout "+r+"ms "+e))},i.send(t)}))},e.post=function(e,t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=0),this.absCall(e,JSON.stringify(t),n,r)},e.fetch=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=0),this.absCall(e,null,t,n)},e}();exports.Json=Json;
},{}],34:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.TCModel=void 0;var Cloneable_js_1=require("./Cloneable.js"),index_js_1=require("./errors/index.js"),GVL_js_1=require("./GVL.js"),index_js_2=require("./model/index.js"),TCModel=function(e){function t(t){var n=e.call(this)||this;return n.isServiceSpecific_=!1,n.supportOOB_=!0,n.useNonStandardTexts_=!1,n.purposeOneTreatment_=!1,n.publisherCountryCode_="AA",n.version_=2,n.consentScreen_=0,n.policyVersion_=4,n.consentLanguage_="EN",n.cmpId_=0,n.cmpVersion_=0,n.vendorListVersion_=0,n.numCustomPurposes_=0,n.specialFeatureOptins=new index_js_2.Vector,n.purposeConsents=new index_js_2.Vector,n.purposeLegitimateInterests=new index_js_2.Vector,n.publisherConsents=new index_js_2.Vector,n.publisherLegitimateInterests=new index_js_2.Vector,n.publisherCustomConsents=new index_js_2.Vector,n.publisherCustomLegitimateInterests=new index_js_2.Vector,n.vendorConsents=new index_js_2.Vector,n.vendorLegitimateInterests=new index_js_2.Vector,n.vendorsDisclosed=new index_js_2.Vector,n.vendorsAllowed=new index_js_2.Vector,n.publisherRestrictions=new index_js_2.PurposeRestrictionVector,t&&(n.gvl=t),n.updated(),n}return __extends(t,e),Object.defineProperty(t.prototype,"gvl",{get:function(){return this.gvl_},set:function(e){GVL_js_1.GVL.isInstanceOf(e)||(e=new GVL_js_1.GVL(e)),this.gvl_=e,this.publisherRestrictions.gvl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cmpId",{get:function(){return this.cmpId_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>1))throw new index_js_1.TCModelError("cmpId",e);this.cmpId_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cmpVersion",{get:function(){return this.cmpVersion_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new index_js_1.TCModelError("cmpVersion",e);this.cmpVersion_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"consentScreen",{get:function(){return this.consentScreen_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new index_js_1.TCModelError("consentScreen",e);this.consentScreen_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"consentLanguage",{get:function(){return this.consentLanguage_},set:function(e){this.consentLanguage_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"publisherCountryCode",{get:function(){return this.publisherCountryCode_},set:function(e){if(!/^([A-z]){2}$/.test(e))throw new index_js_1.TCModelError("publisherCountryCode",e);this.publisherCountryCode_=e.toUpperCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vendorListVersion",{get:function(){return this.gvl?this.gvl.vendorListVersion:this.vendorListVersion_},set:function(e){if((e=Number(e)>>0)<0)throw new index_js_1.TCModelError("vendorListVersion",e);this.vendorListVersion_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"policyVersion",{get:function(){return this.gvl?this.gvl.tcfPolicyVersion:this.policyVersion_},set:function(e){if(this.policyVersion_=parseInt(e,10),this.policyVersion_<0)throw new index_js_1.TCModelError("policyVersion",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this.version_},set:function(e){this.version_=parseInt(e,10)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isServiceSpecific",{get:function(){return this.isServiceSpecific_},set:function(e){this.isServiceSpecific_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useNonStandardTexts",{get:function(){return this.useNonStandardTexts_},set:function(e){this.useNonStandardTexts_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"supportOOB",{get:function(){return this.supportOOB_},set:function(e){this.supportOOB_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"purposeOneTreatment",{get:function(){return this.purposeOneTreatment_},set:function(e){this.purposeOneTreatment_=e},enumerable:!1,configurable:!0}),t.prototype.setAllVendorConsents=function(){this.vendorConsents.set(this.gvl.vendors)},t.prototype.unsetAllVendorConsents=function(){this.vendorConsents.empty()},t.prototype.setAllVendorsDisclosed=function(){this.vendorsDisclosed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsDisclosed=function(){this.vendorsDisclosed.empty()},t.prototype.setAllVendorsAllowed=function(){this.vendorsAllowed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsAllowed=function(){this.vendorsAllowed.empty()},t.prototype.setAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.set(this.gvl.vendors)},t.prototype.unsetAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.empty()},t.prototype.setAllPurposeConsents=function(){this.purposeConsents.set(this.gvl.purposes)},t.prototype.unsetAllPurposeConsents=function(){this.purposeConsents.empty()},t.prototype.setAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.set(this.gvl.purposes)},t.prototype.unsetAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.empty()},t.prototype.setAllSpecialFeatureOptins=function(){this.specialFeatureOptins.set(this.gvl.specialFeatures)},t.prototype.unsetAllSpecialFeatureOptins=function(){this.specialFeatureOptins.empty()},t.prototype.setAll=function(){this.setAllVendorConsents(),this.setAllPurposeLegitimateInterests(),this.setAllSpecialFeatureOptins(),this.setAllPurposeConsents(),this.setAllVendorLegitimateInterests()},t.prototype.unsetAll=function(){this.unsetAllVendorConsents(),this.unsetAllPurposeLegitimateInterests(),this.unsetAllSpecialFeatureOptins(),this.unsetAllPurposeConsents(),this.unsetAllVendorLegitimateInterests()},Object.defineProperty(t.prototype,"numCustomPurposes",{get:function(){var e=this.numCustomPurposes_;if("object"==typeof this.customPurposes){var t=Object.keys(this.customPurposes).sort((function(e,t){return Number(e)-Number(t)}));e=parseInt(t.pop(),10)}return e},set:function(e){if(this.numCustomPurposes_=parseInt(e,10),this.numCustomPurposes_<0)throw new index_js_1.TCModelError("numCustomPurposes",e)},enumerable:!1,configurable:!0}),t.prototype.updated=function(){var e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));this.created=t,this.lastUpdated=t},t.consentLanguages=GVL_js_1.GVL.consentLanguages,t}(Cloneable_js_1.Cloneable);exports.TCModel=TCModel;
},{"./Cloneable.js":31,"./GVL.js":32,"./errors/index.js":60,"./model/index.js":85}],35:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TCString=void 0;var index_js_1=require("./encoder/index.js"),index_js_2=require("./model/index.js"),IntEncoder_js_1=require("./encoder/field/IntEncoder.js"),TCModel_js_1=require("./TCModel.js"),TCString=function(){function e(){}return e.encode=function(e,n){var r,t="";return e=index_js_1.SemanticPreEncoder.process(e,n),(r=Array.isArray(null==n?void 0:n.segments)?n.segments:new index_js_1.SegmentSequence(e,n)[""+e.version]).forEach((function(n,d){var s="";d<r.length-1&&(s="."),t+=index_js_1.SegmentEncoder.encode(e,n)+s})),t},e.decode=function(e,n){var r=e.split("."),t=r.length;n||(n=new TCModel_js_1.TCModel);for(var d=0;d<t;d++){var s=r[d],i=index_js_1.Base64Url.decode(s.charAt(0)).substr(0,index_js_1.BitLength.segmentType),o=index_js_2.SegmentIDs.ID_TO_KEY[IntEncoder_js_1.IntEncoder.decode(i,index_js_1.BitLength.segmentType).toString()];index_js_1.SegmentEncoder.decode(s,n,o)}return n},e}();exports.TCString=TCString;
},{"./TCModel.js":34,"./encoder/field/IntEncoder.js":45,"./encoder/index.js":51,"./model/index.js":85}],36:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Base64Url=void 0;var index_js_1=require("../errors/index.js"),Base64Url=function(){function e(){}return e.encode=function(e){if(!/^[0-1]+$/.test(e))throw new index_js_1.EncodingError("Invalid bitField");var r=e.length%this.LCM;e+=r?"0".repeat(this.LCM-r):"";for(var t="",n=0;n<e.length;n+=this.BASIS)t+=this.DICT[parseInt(e.substr(n,this.BASIS),2)];return t},e.decode=function(e){if(!/^[A-Za-z0-9\-_]+$/.test(e))throw new index_js_1.DecodingError("Invalidly encoded Base64URL string");for(var r="",t=0;t<e.length;t++){var n=this.REVERSE_DICT.get(e[t]).toString(2);r+="0".repeat(this.BASIS-n.length)+n}return r},e.DICT="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",e.REVERSE_DICT=new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["-",62],["_",63]]),e.BASIS=6,e.LCM=24,e}();exports.Base64Url=Base64Url;
},{"../errors/index.js":60}],37:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BitLength=void 0;var index_js_1=require("../model/index.js"),BitLength=function(){function e(){}var s,i,n,d,t,r,_,o,l,p,x,u,j,a,F,c,g,m;return s=index_js_1.Fields.cmpId,i=index_js_1.Fields.cmpVersion,n=index_js_1.Fields.consentLanguage,d=index_js_1.Fields.consentScreen,t=index_js_1.Fields.created,r=index_js_1.Fields.isServiceSpecific,_=index_js_1.Fields.lastUpdated,o=index_js_1.Fields.policyVersion,l=index_js_1.Fields.publisherCountryCode,p=index_js_1.Fields.publisherLegitimateInterests,x=index_js_1.Fields.publisherConsents,u=index_js_1.Fields.purposeConsents,j=index_js_1.Fields.purposeLegitimateInterests,a=index_js_1.Fields.purposeOneTreatment,F=index_js_1.Fields.specialFeatureOptins,c=index_js_1.Fields.useNonStandardTexts,g=index_js_1.Fields.vendorListVersion,m=index_js_1.Fields.version,e[s]=12,e[i]=12,e[n]=12,e[d]=6,e[t]=36,e[r]=1,e[_]=36,e[o]=6,e[l]=12,e[p]=24,e[x]=24,e[u]=24,e[j]=24,e[a]=1,e[F]=12,e[c]=1,e[g]=12,e[m]=6,e.anyBoolean=1,e.encodingType=1,e.maxId=16,e.numCustomPurposes=6,e.numEntries=12,e.numRestrictions=12,e.purposeId=6,e.restrictionType=2,e.segmentType=3,e.singleOrRange=1,e.vendorId=16,e}();exports.BitLength=BitLength;
},{"../model/index.js":85}],38:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],39:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SegmentEncoder=void 0;var Base64Url_js_1=require("./Base64Url.js"),BitLength_js_1=require("./BitLength.js"),index_js_1=require("./field/index.js"),index_js_2=require("./sequence/index.js"),index_js_3=require("../errors/index.js"),Fields_js_1=require("../model/Fields.js"),index_js_4=require("../model/index.js"),SegmentEncoder=function(){function e(){}return e.encode=function(e,n){var s,i=this;try{s=this.fieldSequence[String(e.version)][n]}catch(s){throw new index_js_3.EncodingError("Unable to encode version: ".concat(e.version,", segment: ").concat(n))}var r="";n!==index_js_4.Segment.CORE&&(r=index_js_1.IntEncoder.encode(index_js_4.SegmentIDs.KEY_TO_ID[n],BitLength_js_1.BitLength.segmentType));var t=(0,index_js_1.FieldEncoderMap)();return s.forEach((function(s){var d=e[s],o=t[s],_=BitLength_js_1.BitLength[s];void 0===_&&i.isPublisherCustom(s)&&(_=Number(e[Fields_js_1.Fields.numCustomPurposes]));try{r+=o.encode(d,_)}catch(e){throw new index_js_3.EncodingError("Error encoding ".concat(n,"->").concat(s,": ").concat(e.message))}})),Base64Url_js_1.Base64Url.encode(r)},e.decode=function(e,n,s){var i=this,r=Base64Url_js_1.Base64Url.decode(e),t=0;s===index_js_4.Segment.CORE&&(n.version=index_js_1.IntEncoder.decode(r.substr(t,BitLength_js_1.BitLength[Fields_js_1.Fields.version]),BitLength_js_1.BitLength[Fields_js_1.Fields.version])),s!==index_js_4.Segment.CORE&&(t+=BitLength_js_1.BitLength.segmentType);var d=this.fieldSequence[String(n.version)][s],o=(0,index_js_1.FieldEncoderMap)();return d.forEach((function(e){var s=o[e],d=BitLength_js_1.BitLength[e];if(void 0===d&&i.isPublisherCustom(e)&&(d=Number(n[Fields_js_1.Fields.numCustomPurposes])),0!==d){var _=r.substr(t,d);if(s===index_js_1.VendorVectorEncoder?n[e]=s.decode(_,n.version):n[e]=s.decode(_,d),Number.isInteger(d))t+=d;else{if(!Number.isInteger(n[e].bitLength))throw new index_js_3.DecodingError(e);t+=n[e].bitLength}}})),n},e.isPublisherCustom=function(e){return 0===e.indexOf("publisherCustom")},e.fieldSequence=new index_js_2.FieldSequence,e}();exports.SegmentEncoder=SegmentEncoder;
},{"../errors/index.js":60,"../model/Fields.js":65,"../model/index.js":85,"./Base64Url.js":36,"./BitLength.js":37,"./field/index.js":50,"./sequence/index.js":55}],40:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SemanticPreEncoder=void 0;var index_js_1=require("../errors/index.js"),index_js_2=require("../model/index.js"),SemanticPreEncoder=function(){function e(){}return e.process=function(e,s){var r=e.gvl;if(!r)throw new index_js_1.EncodingError("Unable to encode TCModel without a GVL");if(!r.isReady)throw new index_js_1.EncodingError("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");(e=e.clone()).consentLanguage=r.language.slice(0,2).toUpperCase(),(null==s?void 0:s.version)>0&&(null==s?void 0:s.version)<=this.processor.length?e.version=s.version:e.version=this.processor.length;var n=e.version-1;if(!this.processor[n])throw new index_js_1.EncodingError("Invalid version: ".concat(e.version));return this.processor[n](e,r)},e.processor=[function(e){return e},function(e,s){e.publisherRestrictions.gvl=s,e.purposeLegitimateInterests.unset([1,3,4,5,6]);var r=new Map;return r.set("legIntPurposes",e.vendorLegitimateInterests),r.set("purposes",e.vendorConsents),r.forEach((function(r,n){r.forEach((function(o,i){if(o){var t=s.vendors[i];if(!t||t.deletedDate)r.unset(i);else if(0===t[n].length)if("legIntPurposes"===n&&0===t.purposes.length&&0===t.legIntPurposes.length&&t.specialPurposes.length>0);else if(e.isServiceSpecific)if(0===t.flexiblePurposes.length)r.unset(i);else{for(var c=e.publisherRestrictions.getRestrictions(i),l=!1,d=0,u=c.length;d<u&&!l;d++)l=c[d].restrictionType===index_js_2.RestrictionType.REQUIRE_CONSENT&&"purposes"===n||c[d].restrictionType===index_js_2.RestrictionType.REQUIRE_LI&&"legIntPurposes"===n;l||r.unset(i)}else r.unset(i)}}))})),e.vendorsDisclosed.set(s.vendors),e}],e}();exports.SemanticPreEncoder=SemanticPreEncoder;
},{"../errors/index.js":60,"../model/index.js":85}],41:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BooleanEncoder=void 0;var BooleanEncoder=function(){function e(){}return e.encode=function(e){return String(Number(e))},e.decode=function(e){return"1"===e},e}();exports.BooleanEncoder=BooleanEncoder;
},{}],42:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DateEncoder=void 0;var IntEncoder_js_1=require("./IntEncoder.js"),index_js_1=require("../../errors/index.js"),DateEncoder=function(){function e(){}return e.encode=function(e,n){return IntEncoder_js_1.IntEncoder.encode(Math.round(e.getTime()/100),n)},e.decode=function(e,n){if(n!==e.length)throw new index_js_1.DecodingError("invalid bit length");var r=new Date;return r.setTime(100*IntEncoder_js_1.IntEncoder.decode(e,n)),r},e}();exports.DateEncoder=DateEncoder;
},{"../../errors/index.js":60,"./IntEncoder.js":45}],43:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldEncoderMap=void 0;var index_js_1=require("../../model/index.js"),BooleanEncoder_js_1=require("./BooleanEncoder.js"),DateEncoder_js_1=require("./DateEncoder.js"),FixedVectorEncoder_js_1=require("./FixedVectorEncoder.js"),IntEncoder_js_1=require("./IntEncoder.js"),LangEncoder_js_1=require("./LangEncoder.js"),PurposeRestrictionVectorEncoder_js_1=require("./PurposeRestrictionVectorEncoder.js"),VendorVectorEncoder_js_1=require("./VendorVectorEncoder.js");function FieldEncoderMap(){var e;return(e={})[index_js_1.Fields.version]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.created]=DateEncoder_js_1.DateEncoder,e[index_js_1.Fields.lastUpdated]=DateEncoder_js_1.DateEncoder,e[index_js_1.Fields.cmpId]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.cmpVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.consentScreen]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.consentLanguage]=LangEncoder_js_1.LangEncoder,e[index_js_1.Fields.vendorListVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.policyVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.isServiceSpecific]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.useNonStandardTexts]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.specialFeatureOptins]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeOneTreatment]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.publisherCountryCode]=LangEncoder_js_1.LangEncoder,e[index_js_1.Fields.vendorConsents]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.vendorLegitimateInterests]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.publisherRestrictions]=PurposeRestrictionVectorEncoder_js_1.PurposeRestrictionVectorEncoder,e.segmentType=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.vendorsDisclosed]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.vendorsAllowed]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.publisherConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.publisherLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.numCustomPurposes]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.publisherCustomConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.publisherCustomLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e}exports.FieldEncoderMap=FieldEncoderMap;
},{"../../model/index.js":85,"./BooleanEncoder.js":41,"./DateEncoder.js":42,"./FixedVectorEncoder.js":44,"./IntEncoder.js":45,"./LangEncoder.js":46,"./PurposeRestrictionVectorEncoder.js":47,"./VendorVectorEncoder.js":49}],44:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FixedVectorEncoder=void 0;var BooleanEncoder_js_1=require("./BooleanEncoder.js"),index_js_1=require("../../errors/index.js"),index_js_2=require("../../model/index.js"),FixedVectorEncoder=function(){function e(){}return e.encode=function(e,o){for(var n="",r=1;r<=o;r++)n+=BooleanEncoder_js_1.BooleanEncoder.encode(e.has(r));return n},e.decode=function(e,o){if(e.length!==o)throw new index_js_1.DecodingError("bitfield encoding length mismatch");for(var n=new index_js_2.Vector,r=1;r<=o;r++)BooleanEncoder_js_1.BooleanEncoder.decode(e[r-1])&&n.set(r);return n.bitLength=e.length,n},e}();exports.FixedVectorEncoder=FixedVectorEncoder;
},{"../../errors/index.js":60,"../../model/index.js":85,"./BooleanEncoder.js":41}],45:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IntEncoder=void 0;var index_js_1=require("../../errors/index.js"),IntEncoder=function(){function e(){}return e.encode=function(e,n){var t;if("string"==typeof e&&(e=parseInt(e,10)),(t=e.toString(2)).length>n||e<0)throw new index_js_1.EncodingError("".concat(e," too large to encode into ").concat(n));return t.length<n&&(t="0".repeat(n-t.length)+t),t},e.decode=function(e,n){if(n!==e.length)throw new index_js_1.DecodingError("invalid bit length");return parseInt(e,2)},e}();exports.IntEncoder=IntEncoder;
},{"../../errors/index.js":60}],46:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LangEncoder=void 0;var IntEncoder_js_1=require("./IntEncoder.js"),index_js_1=require("../../errors/index.js"),LangEncoder=function(){function e(){}return e.encode=function(e,n){var r=(e=e.toUpperCase()).charCodeAt(0)-65,o=e.charCodeAt(1)-65;if(r<0||r>25||o<0||o>25)throw new index_js_1.EncodingError("invalid language code: ".concat(e));if(n%2==1)throw new index_js_1.EncodingError("numBits must be even, ".concat(n," is not valid"));return n/=2,IntEncoder_js_1.IntEncoder.encode(r,n)+IntEncoder_js_1.IntEncoder.encode(o,n)},e.decode=function(e,n){if(n!==e.length||e.length%2)throw new index_js_1.DecodingError("invalid bit length for language");var r=e.length/2,o=IntEncoder_js_1.IntEncoder.decode(e.slice(0,r),r)+65,d=IntEncoder_js_1.IntEncoder.decode(e.slice(r),r)+65;return String.fromCharCode(o)+String.fromCharCode(d)},e}();exports.LangEncoder=LangEncoder;
},{"../../errors/index.js":60,"./IntEncoder.js":45}],47:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PurposeRestrictionVectorEncoder=void 0;var BitLength_js_1=require("../BitLength.js"),BooleanEncoder_js_1=require("./BooleanEncoder.js"),index_js_1=require("../../errors/index.js"),IntEncoder_js_1=require("./IntEncoder.js"),index_js_2=require("../../model/index.js"),PurposeRestrictionVectorEncoder=function(){function e(){}return e.encode=function(e){var n=IntEncoder_js_1.IntEncoder.encode(e.numRestrictions,BitLength_js_1.BitLength.numRestrictions);if(!e.isEmpty()){var t=function(n,t){for(var r=n+1;r<=t;r++)if(e.gvl.vendorIds.has(r))return r;return n};e.getRestrictions().forEach((function(r){n+=IntEncoder_js_1.IntEncoder.encode(r.purposeId,BitLength_js_1.BitLength.purposeId),n+=IntEncoder_js_1.IntEncoder.encode(r.restrictionType,BitLength_js_1.BitLength.restrictionType);for(var o=e.getVendors(r),i=o.length,s=0,d=0,_="",c=0;c<i;c++){var B=o[c];if(0===d&&(s++,d=B),c===i-1||o[c+1]>t(B,o[i-1])){var g=!(B===d);_+=BooleanEncoder_js_1.BooleanEncoder.encode(g),_+=IntEncoder_js_1.IntEncoder.encode(d,BitLength_js_1.BitLength.vendorId),g&&(_+=IntEncoder_js_1.IntEncoder.encode(B,BitLength_js_1.BitLength.vendorId)),d=0}}n+=IntEncoder_js_1.IntEncoder.encode(s,BitLength_js_1.BitLength.numEntries),n+=_}))}return n},e.decode=function(e){var n=0,t=new index_js_2.PurposeRestrictionVector,r=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.numRestrictions),BitLength_js_1.BitLength.numRestrictions);n+=BitLength_js_1.BitLength.numRestrictions;for(var o=0;o<r;o++){var i=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.purposeId),BitLength_js_1.BitLength.purposeId);n+=BitLength_js_1.BitLength.purposeId;var s=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.restrictionType),BitLength_js_1.BitLength.restrictionType);n+=BitLength_js_1.BitLength.restrictionType;var d=new index_js_2.PurposeRestriction(i,s),_=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.numEntries),BitLength_js_1.BitLength.numEntries);n+=BitLength_js_1.BitLength.numEntries;for(var c=0;c<_;c++){var B=BooleanEncoder_js_1.BooleanEncoder.decode(e.substr(n,BitLength_js_1.BitLength.anyBoolean));n+=BitLength_js_1.BitLength.anyBoolean;var g=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.vendorId),BitLength_js_1.BitLength.vendorId);if(n+=BitLength_js_1.BitLength.vendorId,B){var h=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.vendorId),BitLength_js_1.BitLength.vendorId);if(n+=BitLength_js_1.BitLength.vendorId,h<g)throw new index_js_1.DecodingError("Invalid RangeEntry: endVendorId ".concat(h," is less than ").concat(g));for(var L=g;L<=h;L++)t.add(L,d)}else t.add(g,d)}}return t.bitLength=n,t},e}();exports.PurposeRestrictionVectorEncoder=PurposeRestrictionVectorEncoder;
},{"../../errors/index.js":60,"../../model/index.js":85,"../BitLength.js":37,"./BooleanEncoder.js":41,"./IntEncoder.js":45}],48:[function(require,module,exports){
"use strict";var VectorEncodingType;Object.defineProperty(exports,"__esModule",{value:!0}),exports.VectorEncodingType=void 0,function(e){e[e.FIELD=0]="FIELD",e[e.RANGE=1]="RANGE"}(VectorEncodingType=exports.VectorEncodingType||(exports.VectorEncodingType={}));
},{}],49:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VendorVectorEncoder=void 0;var index_js_1=require("../../model/index.js"),index_js_2=require("../index.js"),IntEncoder_js_1=require("./IntEncoder.js"),BooleanEncoder_js_1=require("./BooleanEncoder.js"),FixedVectorEncoder_js_1=require("./FixedVectorEncoder.js"),VectorEncodingType_js_1=require("./VectorEncodingType.js"),index_js_3=require("../../errors/index.js"),VendorVectorEncoder=function(){function e(){}return e.encode=function(e){var n,d=[],r=[],t=IntEncoder_js_1.IntEncoder.encode(e.maxId,index_js_2.BitLength.maxId),o="",i=index_js_2.BitLength.maxId+index_js_2.BitLength.encodingType,_=i+e.maxId,s=2*index_js_2.BitLength.vendorId+index_js_2.BitLength.singleOrRange+index_js_2.BitLength.numEntries,c=i+index_js_2.BitLength.numEntries;return e.forEach((function(t,i){(o+=BooleanEncoder_js_1.BooleanEncoder.encode(t),(n=e.maxId>s&&c<_)&&t)&&(e.has(i+1)?0===r.length&&(r.push(i),c+=index_js_2.BitLength.singleOrRange,c+=index_js_2.BitLength.vendorId):(r.push(i),c+=index_js_2.BitLength.vendorId,d.push(r),r=[]))})),n?(t+=String(VectorEncodingType_js_1.VectorEncodingType.RANGE),t+=this.buildRangeEncoding(d)):(t+=String(VectorEncodingType_js_1.VectorEncodingType.FIELD),t+=o),t},e.decode=function(e,n){var d,r=0,t=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.maxId),index_js_2.BitLength.maxId);r+=index_js_2.BitLength.maxId;var o=IntEncoder_js_1.IntEncoder.decode(e.charAt(r),index_js_2.BitLength.encodingType);if(r+=index_js_2.BitLength.encodingType,o===VectorEncodingType_js_1.VectorEncodingType.RANGE){if(d=new index_js_1.Vector,1===n){if("1"===e.substr(r,1))throw new index_js_3.DecodingError("Unable to decode default consent=1");r++}var i=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.numEntries),index_js_2.BitLength.numEntries);r+=index_js_2.BitLength.numEntries;for(var _=0;_<i;_++){var s=BooleanEncoder_js_1.BooleanEncoder.decode(e.charAt(r));r+=index_js_2.BitLength.singleOrRange;var c=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.vendorId),index_js_2.BitLength.vendorId);if(r+=index_js_2.BitLength.vendorId,s){var j=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.vendorId),index_js_2.BitLength.vendorId);r+=index_js_2.BitLength.vendorId;for(var E=c;E<=j;E++)d.set(E)}else d.set(c)}}else{var g=e.substr(r,t);r+=t,d=FixedVectorEncoder_js_1.FixedVectorEncoder.decode(g,t)}return d.bitLength=r,d},e.buildRangeEncoding=function(e){var n=e.length,d=IntEncoder_js_1.IntEncoder.encode(n,index_js_2.BitLength.numEntries);return e.forEach((function(e){var n=1===e.length;d+=BooleanEncoder_js_1.BooleanEncoder.encode(!n),d+=IntEncoder_js_1.IntEncoder.encode(e[0],index_js_2.BitLength.vendorId),n||(d+=IntEncoder_js_1.IntEncoder.encode(e[1],index_js_2.BitLength.vendorId))})),d},e}();exports.VendorVectorEncoder=VendorVectorEncoder;
},{"../../errors/index.js":60,"../../model/index.js":85,"../index.js":51,"./BooleanEncoder.js":41,"./FixedVectorEncoder.js":44,"./IntEncoder.js":45,"./VectorEncodingType.js":48}],50:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var i=Object.getOwnPropertyDescriptor(r,t);i&&!("get"in i?!r.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,i)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./BooleanEncoder.js"),exports),__exportStar(require("./DateEncoder.js"),exports),__exportStar(require("./FieldEncoderMap.js"),exports),__exportStar(require("./FixedVectorEncoder.js"),exports),__exportStar(require("./IntEncoder.js"),exports),__exportStar(require("./LangEncoder.js"),exports),__exportStar(require("./PurposeRestrictionVectorEncoder.js"),exports),__exportStar(require("./VectorEncodingType.js"),exports),__exportStar(require("./VendorVectorEncoder.js"),exports);
},{"./BooleanEncoder.js":41,"./DateEncoder.js":42,"./FieldEncoderMap.js":43,"./FixedVectorEncoder.js":44,"./IntEncoder.js":45,"./LangEncoder.js":46,"./PurposeRestrictionVectorEncoder.js":47,"./VectorEncodingType.js":48,"./VendorVectorEncoder.js":49}],51:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,i){void 0===i&&(i=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,i,o)}:function(e,r,t,i){void 0===i&&(i=t),e[i]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./Base64Url.js"),exports),__exportStar(require("./BitLength.js"),exports),__exportStar(require("./EncodingOptions.js"),exports),__exportStar(require("./SegmentEncoder.js"),exports),__exportStar(require("./SemanticPreEncoder.js"),exports),__exportStar(require("./field/index.js"),exports),__exportStar(require("./sequence/index.js"),exports);
},{"./Base64Url.js":36,"./BitLength.js":37,"./EncodingOptions.js":38,"./SegmentEncoder.js":39,"./SemanticPreEncoder.js":40,"./field/index.js":50,"./sequence/index.js":55}],52:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldSequence=void 0;var index_js_1=require("../../model/index.js"),FieldSequence=function(){var e,s;this[1]=((e={})[index_js_1.Segment.CORE]=[index_js_1.Fields.version,index_js_1.Fields.created,index_js_1.Fields.lastUpdated,index_js_1.Fields.cmpId,index_js_1.Fields.cmpVersion,index_js_1.Fields.consentScreen,index_js_1.Fields.consentLanguage,index_js_1.Fields.vendorListVersion,index_js_1.Fields.purposeConsents,index_js_1.Fields.vendorConsents],e),this[2]=((s={})[index_js_1.Segment.CORE]=[index_js_1.Fields.version,index_js_1.Fields.created,index_js_1.Fields.lastUpdated,index_js_1.Fields.cmpId,index_js_1.Fields.cmpVersion,index_js_1.Fields.consentScreen,index_js_1.Fields.consentLanguage,index_js_1.Fields.vendorListVersion,index_js_1.Fields.policyVersion,index_js_1.Fields.isServiceSpecific,index_js_1.Fields.useNonStandardTexts,index_js_1.Fields.specialFeatureOptins,index_js_1.Fields.purposeConsents,index_js_1.Fields.purposeLegitimateInterests,index_js_1.Fields.purposeOneTreatment,index_js_1.Fields.publisherCountryCode,index_js_1.Fields.vendorConsents,index_js_1.Fields.vendorLegitimateInterests,index_js_1.Fields.publisherRestrictions],s[index_js_1.Segment.PUBLISHER_TC]=[index_js_1.Fields.publisherConsents,index_js_1.Fields.publisherLegitimateInterests,index_js_1.Fields.numCustomPurposes,index_js_1.Fields.publisherCustomConsents,index_js_1.Fields.publisherCustomLegitimateInterests],s[index_js_1.Segment.VENDORS_ALLOWED]=[index_js_1.Fields.vendorsAllowed],s[index_js_1.Segment.VENDORS_DISCLOSED]=[index_js_1.Fields.vendorsDisclosed],s)};exports.FieldSequence=FieldSequence;
},{"../../model/index.js":85}],53:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SegmentSequence=void 0;var index_js_1=require("../../model/index.js"),SegmentSequence=function(e,s){if(this[1]=[index_js_1.Segment.CORE],this[2]=[index_js_1.Segment.CORE],2===e.version)if(e.isServiceSpecific)this[2].push(index_js_1.Segment.PUBLISHER_TC);else{var i=!(!s||!s.isForVendors);i&&!0!==e[index_js_1.Fields.supportOOB]||this[2].push(index_js_1.Segment.VENDORS_DISCLOSED),i&&(e[index_js_1.Fields.supportOOB]&&e[index_js_1.Fields.vendorsAllowed].size>0&&this[2].push(index_js_1.Segment.VENDORS_ALLOWED),this[2].push(index_js_1.Segment.PUBLISHER_TC))}};exports.SegmentSequence=SegmentSequence;
},{"../../model/index.js":85}],54:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],55:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./FieldSequence.js"),exports),__exportStar(require("./SegmentSequence.js"),exports),__exportStar(require("./SequenceVersionMap.js"),exports);
},{"./FieldSequence.js":52,"./SegmentSequence.js":53,"./SequenceVersionMap.js":54}],56:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.DecodingError=void 0;var DecodingError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="DecodingError",o}return __extends(t,r),t}(Error);exports.DecodingError=DecodingError;
},{}],57:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.EncodingError=void 0;var EncodingError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="EncodingError",o}return __extends(t,r),t}(Error);exports.EncodingError=EncodingError;
},{}],58:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.GVLError=void 0;var GVLError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="GVLError",o}return __extends(t,r),t}(Error);exports.GVLError=GVLError;
},{}],59:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.TCModelError=void 0;var TCModelError=function(r){function t(t,o,e){void 0===e&&(e="");var n=r.call(this,"invalid value ".concat(o," passed for ").concat(t," ").concat(e))||this;return n.name="TCModelError",n}return __extends(t,r),t}(Error);exports.TCModelError=TCModelError;
},{}],60:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(r,e,t,o){void 0===o&&(o=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,o,i)}:function(r,e,t,o){void 0===o&&(o=t),r[o]=e[t]}),__exportStar=this&&this.__exportStar||function(r,e){for(var t in r)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||__createBinding(e,r,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./DecodingError.js"),exports),__exportStar(require("./EncodingError.js"),exports),__exportStar(require("./GVLError.js"),exports),__exportStar(require("./TCModelError.js"),exports);
},{"./DecodingError.js":56,"./EncodingError.js":57,"./GVLError.js":58,"./TCModelError.js":59}],61:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var i=Object.getOwnPropertyDescriptor(r,t);i&&!("get"in i?!r.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,i)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./encoder/index.js"),exports),__exportStar(require("./errors/index.js"),exports),__exportStar(require("./model/index.js"),exports),__exportStar(require("./Cloneable.js"),exports),__exportStar(require("./GVL.js"),exports),__exportStar(require("./Json.js"),exports),__exportStar(require("./TCModel.js"),exports),__exportStar(require("./TCString.js"),exports);
},{"./Cloneable.js":31,"./GVL.js":32,"./Json.js":33,"./TCModel.js":34,"./TCString.js":35,"./encoder/index.js":51,"./errors/index.js":60,"./model/index.js":85}],62:[function(require,module,exports){
"use strict";var __values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConsentLanguages=void 0;var ConsentLanguages=function(){function e(){}return e.prototype.has=function(t){return e.langSet.has(t)},e.prototype.parseLanguage=function(t){var n,r,o=(t=t.toUpperCase()).split("-")[0];if(t.length>=2&&2==o.length){if(e.langSet.has(t))return t;if(e.langSet.has(o))return o;var a=o+"-"+o;if(e.langSet.has(a))return a;try{for(var u=__values(e.langSet),i=u.next();!i.done;i=u.next()){var l=i.value;if(-1!==l.indexOf(t)||-1!==l.indexOf(o))return l}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}throw new Error("unsupported language ".concat(t))},e.prototype.forEach=function(t){e.langSet.forEach(t)},Object.defineProperty(e.prototype,"size",{get:function(){return e.langSet.size},enumerable:!1,configurable:!0}),e.langSet=new Set(["AR","BG","BS","CA","CS","DA","DE","EL","EN","ES","ET","EU","FI","FR","GL","HR","HU","IT","JA","LT","LV","MT","NL","NO","PL","PT-BR","PT-PT","RO","RU","SK","SL","SR-LATN","SR-CYRL","SV","TR","ZH"]),e}();exports.ConsentLanguages=ConsentLanguages;
},{}],63:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],64:[function(require,module,exports){
"use strict";var DeviceDisclosureStorageAccessType;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeviceDisclosureStorageAccessType=void 0,function(e){e.COOKIE="cookie",e.WEB="web",e.APP="app"}(DeviceDisclosureStorageAccessType=exports.DeviceDisclosureStorageAccessType||(exports.DeviceDisclosureStorageAccessType={}));
},{}],65:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Fields=void 0;var Fields=function(){function e(){}return e.cmpId="cmpId",e.cmpVersion="cmpVersion",e.consentLanguage="consentLanguage",e.consentScreen="consentScreen",e.created="created",e.supportOOB="supportOOB",e.isServiceSpecific="isServiceSpecific",e.lastUpdated="lastUpdated",e.numCustomPurposes="numCustomPurposes",e.policyVersion="policyVersion",e.publisherCountryCode="publisherCountryCode",e.publisherCustomConsents="publisherCustomConsents",e.publisherCustomLegitimateInterests="publisherCustomLegitimateInterests",e.publisherLegitimateInterests="publisherLegitimateInterests",e.publisherConsents="publisherConsents",e.publisherRestrictions="publisherRestrictions",e.purposeConsents="purposeConsents",e.purposeLegitimateInterests="purposeLegitimateInterests",e.purposeOneTreatment="purposeOneTreatment",e.specialFeatureOptins="specialFeatureOptins",e.useNonStandardTexts="useNonStandardTexts",e.vendorConsents="vendorConsents",e.vendorLegitimateInterests="vendorLegitimateInterests",e.vendorListVersion="vendorListVersion",e.vendorsAllowed="vendorsAllowed",e.vendorsDisclosed="vendorsDisclosed",e.version="version",e}();exports.Fields=Fields;
},{}],66:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],67:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],68:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.PurposeRestriction=void 0;var Cloneable_js_1=require("../Cloneable.js"),index_js_1=require("../errors/index.js"),RestrictionType_js_1=require("./RestrictionType.js"),PurposeRestriction=function(e){function t(t,r){var o=e.call(this)||this;return void 0!==t&&(o.purposeId=t),void 0!==r&&(o.restrictionType=r),o}return __extends(t,e),t.unHash=function(e){var r=e.split(this.hashSeparator),o=new t;if(2!==r.length)throw new index_js_1.TCModelError("hash",e);return o.purposeId=parseInt(r[0],10),o.restrictionType=parseInt(r[1],10),o},Object.defineProperty(t.prototype,"hash",{get:function(){if(!this.isValid())throw new Error("cannot hash invalid PurposeRestriction");return"".concat(this.purposeId).concat(t.hashSeparator).concat(this.restrictionType)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"purposeId",{get:function(){return this.purposeId_},set:function(e){this.purposeId_=e},enumerable:!1,configurable:!0}),t.prototype.isValid=function(){return Number.isInteger(this.purposeId)&&this.purposeId>0&&(this.restrictionType===RestrictionType_js_1.RestrictionType.NOT_ALLOWED||this.restrictionType===RestrictionType_js_1.RestrictionType.REQUIRE_CONSENT||this.restrictionType===RestrictionType_js_1.RestrictionType.REQUIRE_LI)},t.prototype.isSameAs=function(e){return this.purposeId===e.purposeId&&this.restrictionType===e.restrictionType},t.hashSeparator="-",t}(Cloneable_js_1.Cloneable);exports.PurposeRestriction=PurposeRestriction;
},{"../Cloneable.js":31,"../errors/index.js":60,"./RestrictionType.js":70}],69:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),__read=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,s,i=r.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)n.push(o.value)}catch(t){s={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(s)throw s.error}}return n},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,s=0,i=e.length;s<i;s++)!o&&s in e||(o||(o=Array.prototype.slice.call(e,0,s)),o[s]=e[s]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PurposeRestrictionVector=void 0;var PurposeRestriction_js_1=require("./PurposeRestriction.js"),RestrictionType_js_1=require("./RestrictionType.js"),Cloneable_js_1=require("../Cloneable.js"),PurposeRestrictionVector=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bitLength=0,e.map=new Map,e}return __extends(e,t),e.prototype.has=function(t){return this.map.has(t)},e.prototype.isOkToHave=function(t,e,r){var o,s=!0;if(null===(o=this.gvl)||void 0===o?void 0:o.vendors){var i=this.gvl.vendors[r];if(i)if(t===RestrictionType_js_1.RestrictionType.NOT_ALLOWED)s=i.legIntPurposes.includes(e)||i.purposes.includes(e);else if(i.flexiblePurposes.length)switch(t){case RestrictionType_js_1.RestrictionType.REQUIRE_CONSENT:s=i.flexiblePurposes.includes(e)&&i.legIntPurposes.includes(e);break;case RestrictionType_js_1.RestrictionType.REQUIRE_LI:s=i.flexiblePurposes.includes(e)&&i.purposes.includes(e)}else s=!1;else s=!1}return s},e.prototype.add=function(t,e){if(this.isOkToHave(e.restrictionType,e.purposeId,t)){var r=e.hash;this.has(r)||(this.map.set(r,new Set),this.bitLength=0),this.map.get(r).add(t)}},e.prototype.restrictPurposeToLegalBasis=function(t){var e=Array.from(this.gvl.vendorIds),r=t.hash,o=e[e.length-1],s=__spreadArray([],__read(Array(o).keys()),!1).map((function(t){return t+1}));if(this.has(r))for(var i=1;i<=o;i++)this.map.get(r).add(i);else this.map.set(r,new Set(s)),this.bitLength=0},e.prototype.getVendors=function(t){var e=[];if(t){var r=t.hash;this.has(r)&&(e=Array.from(this.map.get(r)))}else{var o=new Set;this.map.forEach((function(t){t.forEach((function(t){o.add(t)}))})),e=Array.from(o)}return e.sort((function(t,e){return t-e}))},e.prototype.getRestrictionType=function(t,e){var r;return this.getRestrictions(t).forEach((function(t){t.purposeId===e&&(void 0===r||r>t.restrictionType)&&(r=t.restrictionType)})),r},e.prototype.vendorHasRestriction=function(t,e){for(var r=!1,o=this.getRestrictions(t),s=0;s<o.length&&!r;s++)r=e.isSameAs(o[s]);return r},e.prototype.getMaxVendorId=function(){var t=0;return this.map.forEach((function(e){t=Math.max(Array.from(e)[e.size-1],t)})),t},e.prototype.getRestrictions=function(t){var e=[];return this.map.forEach((function(r,o){t?r.has(t)&&e.push(PurposeRestriction_js_1.PurposeRestriction.unHash(o)):e.push(PurposeRestriction_js_1.PurposeRestriction.unHash(o))})),e},e.prototype.getPurposes=function(){var t=new Set;return this.map.forEach((function(e,r){t.add(PurposeRestriction_js_1.PurposeRestriction.unHash(r).purposeId)})),Array.from(t)},e.prototype.remove=function(t,e){var r=e.hash,o=this.map.get(r);o&&(o.delete(t),0==o.size&&(this.map.delete(r),this.bitLength=0))},Object.defineProperty(e.prototype,"gvl",{get:function(){return this.gvl_},set:function(t){var e=this;this.gvl_||(this.gvl_=t,this.map.forEach((function(t,r){var o=PurposeRestriction_js_1.PurposeRestriction.unHash(r);Array.from(t).forEach((function(r){e.isOkToHave(o.restrictionType,o.purposeId,r)||t.delete(r)}))})))},enumerable:!1,configurable:!0}),e.prototype.isEmpty=function(){return 0===this.map.size},Object.defineProperty(e.prototype,"numRestrictions",{get:function(){return this.map.size},enumerable:!1,configurable:!0}),e}(Cloneable_js_1.Cloneable);exports.PurposeRestrictionVector=PurposeRestrictionVector;
},{"../Cloneable.js":31,"./PurposeRestriction.js":68,"./RestrictionType.js":70}],70:[function(require,module,exports){
"use strict";var RestrictionType;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RestrictionType=void 0,function(e){e[e.NOT_ALLOWED=0]="NOT_ALLOWED",e[e.REQUIRE_CONSENT=1]="REQUIRE_CONSENT",e[e.REQUIRE_LI=2]="REQUIRE_LI"}(RestrictionType=exports.RestrictionType||(exports.RestrictionType={}));
},{}],71:[function(require,module,exports){
"use strict";var Segment;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Segment=void 0,function(e){e.CORE="core",e.VENDORS_DISCLOSED="vendorsDisclosed",e.VENDORS_ALLOWED="vendorsAllowed",e.PUBLISHER_TC="publisherTC"}(Segment=exports.Segment||(exports.Segment={}));
},{}],72:[function(require,module,exports){
"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SegmentIDs=void 0;var Segment_js_1=require("./Segment.js"),SegmentIDs=function(){function e(){}return e.ID_TO_KEY=[Segment_js_1.Segment.CORE,Segment_js_1.Segment.VENDORS_DISCLOSED,Segment_js_1.Segment.VENDORS_ALLOWED,Segment_js_1.Segment.PUBLISHER_TC],e.KEY_TO_ID=((_a={})[Segment_js_1.Segment.CORE]=0,_a[Segment_js_1.Segment.VENDORS_DISCLOSED]=1,_a[Segment_js_1.Segment.VENDORS_ALLOWED]=2,_a[Segment_js_1.Segment.PUBLISHER_TC]=3,_a),e}();exports.SegmentIDs=SegmentIDs;
},{"./Segment.js":71}],73:[function(require,module,exports){
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__generator=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Vector=void 0;var Cloneable_js_1=require("../Cloneable.js"),index_js_1=require("../errors/index.js"),Vector=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bitLength=0,e.maxId_=0,e.set_=new Set,e}return __extends(e,t),e.prototype[Symbol.iterator]=function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=1,e.label=1;case 1:return t<=this.maxId?[4,[t,this.has(t)]]:[3,4];case 2:e.sent(),e.label=3;case 3:return t++,[3,1];case 4:return[2]}}))},e.prototype.values=function(){return this.set_.values()},Object.defineProperty(e.prototype,"maxId",{get:function(){return this.maxId_},enumerable:!1,configurable:!0}),e.prototype.has=function(t){return this.set_.has(t)},e.prototype.unset=function(t){var e=this;Array.isArray(t)?t.forEach((function(t){return e.unset(t)})):"object"==typeof t?this.unset(Object.keys(t).map((function(t){return Number(t)}))):(this.set_.delete(Number(t)),this.bitLength=0,t===this.maxId&&(this.maxId_=0,this.set_.forEach((function(t){e.maxId_=Math.max(e.maxId,t)}))))},e.prototype.isIntMap=function(t){var e=this,r="object"==typeof t;return r=r&&Object.keys(t).every((function(r){var n=Number.isInteger(parseInt(r,10));return n=(n=n&&e.isValidNumber(t[r].id))&&void 0!==t[r].name}))},e.prototype.isValidNumber=function(t){return parseInt(t,10)>0},e.prototype.isSet=function(t){var e=!1;return t instanceof Set&&(e=Array.from(t).every(this.isValidNumber)),e},e.prototype.set=function(t){var e=this;if(Array.isArray(t))t.forEach((function(t){return e.set(t)}));else if(this.isSet(t))this.set(Array.from(t));else if(this.isIntMap(t))this.set(Object.keys(t).map((function(t){return Number(t)})));else{if(!this.isValidNumber(t))throw new index_js_1.TCModelError("set()",t,"must be positive integer array, positive integer, Set<number>, or IntMap");this.set_.add(t),this.maxId_=Math.max(this.maxId,t),this.bitLength=0}},e.prototype.empty=function(){this.set_=new Set},e.prototype.forEach=function(t){for(var e=1;e<=this.maxId;e++)t(this.has(e),e)},Object.defineProperty(e.prototype,"size",{get:function(){return this.set_.size},enumerable:!1,configurable:!0}),e.prototype.setAll=function(t){this.set(t)},e}(Cloneable_js_1.Cloneable);exports.Vector=Vector;
},{"../Cloneable.js":31,"../errors/index.js":60}],74:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],75:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],76:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],77:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],78:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],79:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],80:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],81:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],82:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],83:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],84:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&!("get"in a?!r.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,a)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./ByPurposeVendorMap.js"),exports),__exportStar(require("./Declarations.js"),exports),__exportStar(require("./Feature.js"),exports),__exportStar(require("./GVLMapItem.js"),exports),__exportStar(require("./IDSetMap.js"),exports),__exportStar(require("./Purpose.js"),exports),__exportStar(require("./Stack.js"),exports),__exportStar(require("./Vendor.js"),exports),__exportStar(require("./VendorList.js"),exports),__exportStar(require("./DataCategory.js"),exports);
},{"./ByPurposeVendorMap.js":74,"./DataCategory.js":75,"./Declarations.js":76,"./Feature.js":77,"./GVLMapItem.js":78,"./IDSetMap.js":79,"./Purpose.js":80,"./Stack.js":81,"./Vendor.js":82,"./VendorList.js":83}],85:[function(require,module,exports){
"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var s=Object.getOwnPropertyDescriptor(r,t);s&&!("get"in s?!r.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,s)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(require("./ConsentLanguages.js"),exports),__exportStar(require("./Fields.js"),exports),__exportStar(require("./IntMap.js"),exports),__exportStar(require("./KeyMap.js"),exports),__exportStar(require("./PurposeRestriction.js"),exports),__exportStar(require("./PurposeRestrictionVector.js"),exports),__exportStar(require("./DeviceDisclosureStorageAccessType.js"),exports),__exportStar(require("./DeviceDisclosure.js"),exports),__exportStar(require("./RestrictionType.js"),exports),__exportStar(require("./Segment.js"),exports),__exportStar(require("./SegmentIDs.js"),exports),__exportStar(require("./Vector.js"),exports),__exportStar(require("./gvl/index.js"),exports);
},{"./ConsentLanguages.js":62,"./DeviceDisclosure.js":63,"./DeviceDisclosureStorageAccessType.js":64,"./Fields.js":65,"./IntMap.js":66,"./KeyMap.js":67,"./PurposeRestriction.js":68,"./PurposeRestrictionVector.js":69,"./RestrictionType.js":70,"./Segment.js":71,"./SegmentIDs.js":72,"./Vector.js":73,"./gvl/index.js":84}]},{},[1]);
