import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {

    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            document.addEventListener("click", handleClick);

            return () => {
                document.removeEventListener("click", handleClick);
            };
        }, 1000);
    });
};

export default useOutsideClick;