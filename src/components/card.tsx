import { Character } from "entities/character";
import { useNav } from "hooks/nav-provider";
import { Button } from "./button";

export function Card({
  character,
  isFav,
}: {
  character: Character;
  isFav?: boolean;
}) {
  const { addFav, removeFav } = useNav();

  function handleFav() {
    if (isFav) {
      removeFav(character.id);
    } else {
      addFav(character.id);
    }
  }

  return (
    <article className="rounded-xl relative flex flex-col gap-2 pb-2 items-center bg-gray-200 border border-black">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-t-xl aspect-square w-full"
      />
      <p className="text-xl font-bold">{character.name}</p>
      <p>{character.species}</p>
      <Button
        className="border border-pink-400 self-center"
        onClick={handleFav}
      >
        {isFav ? "Quitar de" : "Agregar a"} Favoritos
      </Button>
    </article>
  );
}
