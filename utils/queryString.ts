export default function queryString(params: any) {
  if (Object.keys(params).length) {
    var query = "?";
    query += Object.keys(params)
      .map((key) => {
        return key + "=" + params[key];
      })
      .join("=");
    return query;
  }
  return "";
}
