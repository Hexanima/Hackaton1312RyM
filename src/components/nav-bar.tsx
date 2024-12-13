import { useNav } from "hooks/nav-provider";
import { Button } from "./button";

export function Navbar() {
  const { page, next, prev } = useNav();

  return (
    <section className="flex items-center justify-center gap-2">
      <Button className="border aspect-square" onClick={prev}>
        {"<"}
      </Button>
      <p className="text-center font-bold">{page}</p>
      <Button className="border aspect-square" onClick={next}>
        {">"}
      </Button>
    </section>
  );
}
