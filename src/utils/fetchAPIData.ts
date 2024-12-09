export const fetchAPIData = async (apiURL: string) => {
    const response = await fetch(apiURL, {
        method: "GET",
        headers: process.env.NODE_ENV === "development" ? {
            "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
            "Content-Type": "application/json",
            "X-GitHub-Api-Version": "2022-11-28"
        } : {
            "Content-Type": "application/json",
            "X-GitHub-Api-Version": "2022-11-28"
        },
    });

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};
