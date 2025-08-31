import { useEffect, useState } from "react";
import { getTv } from "../api/tmdb-api";
import { TvDetailsProps } from "../types/interfaces";

const useTv = (id: string) => {
  const [tv, setTv] = useState<TvDetailsProps>();
  useEffect(() => {
    getTv(id).then((tv) => {
      setTv(tv);
    });
  }, [id]);
  return [tv, setTv] as const;
};

export default useTv;
