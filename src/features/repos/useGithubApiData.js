import { useEffect, useState } from "react";

export const useGithubApiData = () => {
  const [repos, setRepos] = useState({
    status: "loading"
  });

  const requestURL = 'https://api.github.com/users/MCesarczyk/repos?sort="updated"';

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(requestURL);

        if (!response.ok) {
          throw new Error("No response");
        }

        const apiResponse = await response.json();

        setRepos(apiResponse);

      } catch (error) {
        setRepos({ status: "error" });
        console.log(error.message);
      }
    };

    setTimeout(getRepos, 2_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return repos;
};