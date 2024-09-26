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
  localStorage.setItem("taskItems", JSON.stringify(localStorageItems));
  return localStorageItems
};

export const saveToLocalStorage = (value) => {
  const localStorageItems = JSON.parse(localStorage.getItem("taskItems"));
  localStorageItems.push(value);
  localStorage.setItem("taskItems", JSON.stringify(localStorageItems));
  return localStorageItems
};

