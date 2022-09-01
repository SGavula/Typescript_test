let rod_cis: string | null = prompt("Zadaj číslo svoje rodné číslo: ");

if (rod_cis != null) {
  const date: string = rod_cis.substring(4, 6);
  const month: string = rod_cis.substring(2, 4);
  const year: string = rod_cis.substring(0, 2);

  if (parseInt(date) > 31) {
    console.log("Zadali ste zle rodné číslo");
  } else if (parseInt(month) > 12) {
    console.log("Zadali ste zle rodné číslo");
  } else {
    console.log(`Narodil si sa ${date}.${month}.20${year}`);
  }
}
