function convert() {
    var str = document.getElementById("english").value;
    var res = "";

    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'q':
                res += "/";
                break;
            case 'w':
                res += "'";
                break;
            case 'e':
                res += "ק";
                break;
            case 'r':
                res += "ר";
                break;
            case 't':
                res += "א";
                break;
            case 'y':
                res += "ט";
                break;
            case 'u':
                res += "ו";
                break;
            case 'i':
                res += "ן";
                break;
            case 'o':
                res += "ם";
                break;
            case 'p':
                res += "פ";
                break;
            case 'a':
                res += "ש";
                break;
            case 's':
                res += "ד";
                break;
            case 'd':
                res += "ג";
                break;
            case 'f':
                res += "כ";
                break;
            case 'g':
                res += "ע";
                break;
            case 'h':
                res += "י";
                break;
            case 'j':
                res += "ח";
                break;
            case 'k':
                res += "ל";
                break;
            case 'l':
                res += "ך";
                break;
            case ';':
                res += "ף";
                break;
            case "'":
                res += ",";
                break;
            case 'z':
                res += "ז";
                break;
            case 'x':
                res += "ס";
                break;
            case 'c':
                res += "ב";
                break;
            case 'v':
                res += "ה";
                break;
            case 'b':
                res += "נ";
                break;
            case 'n':
                res += "מ";
                break;
            case 'm':
                res += "צ";
                break;
            case ',':
                res += "ת";
                break;
            case '.':
                res += "ץ";
                break;
            case '/':
                res += ".";
                break;
            default:
                res += str[i];
        }
    }

    document.getElementById("hebrew").value = res;
}

function currentDay() {
    const currentDayIndex = new Date().getDate
    let currentDayName
    switch (currentDayIndex) {
        case 0:
            currentDayName = "שני";
        case 1:
            currentDayName = "שלישי";
        case 2:
            currentDayName = "רביעי";
        case 3:
            currentDayName = "חמישי";
        case 4:
            currentDayName = "שישי";
        case 5:
            currentDayName = "שבת";
        case 6:
            currentDayName = "ראשון";

    }
    document.getElementById("currentDay").value = currentDayName;
}

function numName() {
    switch (document.getElementById("num").value) {
        case 1:
            numName = "אחת";
        case 2:
            numName = "שתיים";
        case 3:
            numName = "שלוש";
        case 4:
            numName = "ארבע";
        case 5:
            numName = "חמש";
        case 6:
            numName = "שש";
        case 7:
            numName = "שבע";
        case 8:
            numName = "שמונה";
        case 9:
            numName = "תשע";
        case 10:
            numName = "עשר";
        case $ > 10:
            numName = "המספרים צריכים להיות בין 1 ל-10";
        default:
            numName = "";
    }
    document.getElementById("numName").value = numName;
}