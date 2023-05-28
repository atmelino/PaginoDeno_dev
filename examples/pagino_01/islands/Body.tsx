import { useEffect, useRef, useState } from "preact/hooks";
// import Pagino from '../Pagino.tsx';
//import { Pagino } from "../../../../PaginoDeno/mod.ts";
import { Pagino } from "../../../mod.ts";

export default function Body() {
  const [currentPage, setcurrentPage] = useState(1);

	function onChange(page: number) {
		setcurrentPage(page);
	}

  return (
    <>
      <div class="flex flex-col justify-center w-full pt-1">
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
      <div class=" font-bold text-xl">
        <h1>Selected Page: {currentPage}</h1>
      </div>
    </>
  );
}
