import { Card } from "components/card";
import { Character } from "entities/character";
import { apiFetch } from "utils/api-fetch";

import { useState, useEffect, Suspense } from "react";
import { useNav } from "hooks/nav-provider";
import { CharacterList } from "entities/character-list";
import { Navbar } from "components/nav-bar";

export function Home() {
  const [chars, setChars] = useState<Character[]>([]);
  const { favs, page } = useNav();

  useEffect(() => {
    async function loadChars() {
      const loadedChars: CharacterList = await apiFetch(
        `character?page=${page}`
      );
      setChars(loadedChars.results);
    }
    loadChars();
  }, [page]);
  return (
    <main className="flex flex-col items-center p-4">
      <Navbar />
      <section className="flex flex-col max-w-4xl gap-2 md:gap-4 p-4 w-full md:grid grid-cols-4">
        <Suspense>
          {chars.map((char) => (
            <Card
              key={char.id}
              character={char}
              isFav={favs.some((fav) => fav == char.id)}
            />
          ))}
        </Suspense>
      </section>
      <Navbar />
    </main>
  );
}
