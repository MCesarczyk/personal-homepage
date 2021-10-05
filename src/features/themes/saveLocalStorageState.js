export const saveLocalStorageState = (keyName, state) => {
    localStorage.setItem(keyName, JSON.stringify(state));
};