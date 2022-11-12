import { store } from "../app/store";

export const buildURL = (baseURL, noPagination) => {
  const allQueries = store.getState().query.value;
  let queries;
  if (noPagination) {
    let paginationQuery = allQueries.find((x) => /_page=/.test(x));
    queries = allQueries.filter((query) => query !== paginationQuery);
  } else queries = allQueries;
  let url = baseURL + "?";
  if (queries.length) {
    for (const query of queries) {
      url += query + "&";
    }
    return url;
  } else return url;
};
