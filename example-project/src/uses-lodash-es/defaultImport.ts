import partialRight from "lodash-es/partialRight";
import something from "../no-dependencies/index";

(() => {
  const sortaPrettyJson = partialRight(JSON.stringify, null, 12);

  console.log(sortaPrettyJson(something));
})();
