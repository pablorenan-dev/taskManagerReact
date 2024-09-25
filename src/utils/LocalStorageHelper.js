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

export const createTaskOnScreen = () => {
  const ul = document.querySelector("ul");
  const tasks = localStorage.getItem("taskItems");
  tasks.forEach((item) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      
      `
    );
  });
};
