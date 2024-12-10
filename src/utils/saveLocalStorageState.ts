export const saveLocalStorageState = (keyName: string, state: string) => {
    localStorage.setItem(keyName, JSON.stringify(state));
};
