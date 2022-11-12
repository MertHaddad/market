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



// export const buildURL = (baseURL, noPagination) => {
//   const allQueries = store.getState().query.value;
//   if (noPagination) {
//     let query = allQueries.find((x) => /manufacturer=/.test(x));
//     // let queries = allQueries.filter((query) => query !== paginationQuery);
//     console.log("no pagination");
//     console.log(query);
//     return  baseURL + "?"+query;
//     // if (queries.length) {
//     //   for (const query of queries) {
//     //     url += query + "&";
//     //   }

//     //   return url;
//     // } else return url;
//   } else {
//     let url = baseURL + "?";
//     if (allQueries.length) {
//       for (const query of allQueries) {
//         url += query + "&";
//       }
//       console.log("with pagination");

//       console.log(url);
//       return url;
//     } else return url;
//   }
// };