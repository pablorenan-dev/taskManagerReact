export const verifyIfValueExistsInLocalStorage = () => {
  const localStorageItems = localStorage.getItem("taskItems");
  if (localStorageItems == null) {
    return true;
  } else {
    return false;
  }
};

export const saveToLocalStorageFirstTime = (value) => {
  const localStorageItems = [value];
  localStorage.setItem("taskItems", localStorageItems);
};

export const saveToLocalStorage = (value) => {
  const complementaryArray = [];
  const localStorageItems = localStorage.getItem("taskItems");
  complementaryArray.push(localStorageItems);
  complementaryArray.push(value);
  localStorage.setItem("taskItems", complementaryArray);
};
