import { useEffect, useRef, useState } from "preact/hooks";
// import Pagino from '../Pagino.tsx';
//import { Pagino } from "../../../../PaginoDeno/mod.ts";
import { Pagino } from "../../../mod.ts";

export default function Body() {
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  function onChange() { }

  return (
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
  );
}
