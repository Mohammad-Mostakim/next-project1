"use client"
import { useEffect, useRef } from 'react';
const useScriptRef = (): React.MutableRefObject<boolean> => {
    const scripted = useRef<boolean>(false);

    useEffect(() => {
        scripted.current = true;

        return () => {
            scripted.current = false;
        };
    }, []);

    return scripted;
};

export default useScriptRef;
