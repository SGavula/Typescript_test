var rod_cis = prompt("Zadaj číslo svoje rodné číslo: ");
if (rod_cis != null) {
    var date = rod_cis.substring(4, 6);
    var month = rod_cis.substring(2, 4);
    var year = rod_cis.substring(0, 2);
    if (parseInt(date) > 31) {
        console.log("Zadali ste zle rodné číslo");
    }
    else if (parseInt(month) > 12) {
        console.log("Zadali ste zle rodné číslo");
    }
    else {
        console.log("Narodil si sa ".concat(date, ".").concat(month, ".20").concat(year));
    }
}
