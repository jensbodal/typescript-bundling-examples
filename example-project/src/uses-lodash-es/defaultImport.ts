import partialRight from "lodash-es/partialRight";
import something from "../no-dependencies/index";
import { barNoDependencies } from 'library-bar/lib/no-dependencies';

(() => {
  const sortaPrettyJson = partialRight(JSON.stringify, null, 12);

  console.log(sortaPrettyJson(something));
  console.log(barNoDependencies);
})();
