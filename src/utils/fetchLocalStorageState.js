export const fetchLocalStorageState = async (keyName, initialValue) => {
        const localStorageState = await localStorage.getItem(keyName);
        if (localStorageState === null) {
            return await initialValue;
        }

        return await JSON.parse(localStorage.getItem(keyName));
};