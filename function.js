window.function = function (arrayRowID, rowID) {

  if (arrayRowID.value === undefined) return undefined;

  let findRowID = rowID.value ?? "";
  let tab = arrayRowID.value;

  if (findRowID == "")
    return "";

  return tab.indexOf(findRowID)+1;
}