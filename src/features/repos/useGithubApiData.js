import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRepos, setState } from "./reposSlice";

export const useGithubApiData = () => {
  const requestURL = 'https://api.github.com/users/MCesarczyk/repos?sort="updated"';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setState("loading"));
    const getRepos = async () => {
      try {
        const response = await fetch(requestURL);

        if (!response.ok) {
          throw new Error("No response");
        }

        const apiResponse = await response.json();
        dispatch(setRepos(apiResponse));
        dispatch(setState("success"));

      } catch (error) {
        dispatch(setState("error"));
        console.log(error.message);
      }
    };

    setTimeout(getRepos, 2_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};