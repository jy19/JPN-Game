//prob won't need

ReviewInfo = {};

var ah = ["あ", "い", "う", "え", "お"];
var kh = ["か", "き", "く", "け", "こ"];
var sh = ["さ", "し", "す", "せ", "そ"];
var th = ["た", "ち", "つ", "て", "と"];
var nh = ["な", "に", "ぬ", "ね", "の"];
var hh = ["は", "ひ", "ふ", "へ", "ほ"];
var mh = ["ま", "み", "む", "め", "も"];
var yh = ["や", " ", "ゆ", " ", "よ"];
var rh = ["ら", "り", "る", "れ", "ろ"];
var wh = ["わ", " ", " ", " ", "を"];
var nnh = ["ん", " ", " ", " ", " "];

var ak = ["ア", "イ", "ウ", "エ", "オ"];
var kk = ["カ", "キ", "ク", "ケ", "コ"];
var sk = ["サ", "シ", "ス", "セ", "ソ"];
var tk = ["タ", "チ", "ツ", "テ", "ト"];
var nk = ["ナ", "ニ", "ヌ", "ネ", "ノ"];
var hk = ["ハ", "ヒ", "フ", "ヘ", "ホ"];
var mk = ["マ", "ミ", "ム", "メ", "モ"];
var yk = ["ヤ", " ", "ユ", " ", "ヨ"];
var rk = ["ラ", "リ", "ル", "レ", "ロ"];
var wk = ["ワ", " ", " ", " ", "ヲ"];
var nnk = ["ン", " ", " ", " ", " "];

ReviewInfo.getAhRow = function() {
	return ah;
}

ReviewInfo.getKhRow = function() {
	return kh;
}

ReviewInfo.getShRow = function() {
	return sh;
}

ReviewInfo.getNhRow = function() {
	return nh;
}

ReviewInfo.getHhRow = function() {
	return hh;
}

ReviewInfo.getMhRow = function() {
	return mh;
}

ReviewInfo.getYhRow = function() {
	return yh;
}

ReviewInfo.getRhRow = function() {
	return rh;
}

ReviewInfo.getWhRow = function() {
	return wh;
}

ReviewInfo.getNnhRow = function() {
	return nnh;
}