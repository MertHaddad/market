import { store } from "../app/store";

export const buildURL = (baseURL) => {
  const queries = store.getState().query.value;
  let url = baseURL+"?";
  if (queries.length) {
    for (const query of queries) {
      url += query + "&";
    }
    return url;
  } else return url;
};
