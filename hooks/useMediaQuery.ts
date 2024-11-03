import { list } from "postcss";
import { useState, useEffect } from "react";

export function useMediaquery(query: string):boolean {
    const[matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if(media.matches !== matches){
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    },[matches, query]);
    
    return matches;
}