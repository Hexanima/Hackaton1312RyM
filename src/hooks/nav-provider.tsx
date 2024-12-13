import { FAVS_KEY } from "../constants";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface NavService {
  page: number;
  favs: number[];
  next: () => void;
  prev: () => void;
  addFav: (id: number) => void;
  removeFav: (id: number) => void;
}

export const NavContext = createContext<NavService>({} as NavService);

export const useNav = () => useContext(NavContext);

export function NavProvider({ children }: PropsWithChildren) {
  const [page, setPage] = useState(1);
  const [favs, setFavs] = useState<number[]>([]);

  function prev() {
    if (page > 1) setPage(page - 1);
  }

  function next() {
    setPage(page + 1);
  }

  function addFav(id: number) {
    const newFavs = [...favs];
    newFavs.push(id);
    localStorage.setItem(FAVS_KEY, JSON.stringify(newFavs));
    setFavs(newFavs);
  }

  function removeFav(id: number) {
    const newFavs = favs.filter((fav) => fav == id);
    localStorage.setItem(FAVS_KEY, JSON.stringify(newFavs));
    setFavs(newFavs);
  }

  useEffect(() => {
    const storedFavsStr = localStorage.getItem(FAVS_KEY);
    if (storedFavsStr) {
      setFavs(JSON.parse(storedFavsStr));
    }
  }, []);

  const contextValues: NavService = {
    page,
    favs,
    next,
    prev,
    addFav,
    removeFav,
  };

  return (
    <NavContext.Provider value={contextValues}>{children}</NavContext.Provider>
  );
}
