import { useEffect, useRef, useState } from "preact/hooks";

/* Development Versions */
// Import from local storage
// import { Pagino } from "../../../mod.ts";
// Import from github
// import { Pagino } from "https://raw.githubusercontent.com/atmelino/PaginoDeno/main/mod.ts"

/* Production Versions */
// Import latest version from deno.land
import { Pagino } from "https://deno.land/x/paginodeno/mod.ts";
// Import specific version from deno.land
// import { Pagino } from "https://deno.land/x/paginodeno@v0.0.1-alpha/mod.ts";

export default function Body() {
  const [currentPage, setcurrentPage] = useState(1);

  function onChange(page: number) {
    setcurrentPage(page);
  }

  return (
    <>
      <div class="m-4 p-2 w-full flex-auto">
        <Pagino
          count={10}
          showFirst={true}
          showPrevious={true}
          showNext={true}
          showLast={true}
          page={1}
          siblingCount={1}
          boundaryCount={1}
          onChange={onChange}
        />
      </div>
      <div class="m-4 p-2 w-full flex-auto font-bold text-xl">
        <h1>Selected Page: {currentPage}</h1>
      </div>
    </>
  );
}
