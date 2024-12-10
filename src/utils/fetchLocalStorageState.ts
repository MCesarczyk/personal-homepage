export const fetchLocalStorageState = async (keyName: string, initialValue: string) => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }

        return await JSON.parse(localStorageState);
};
