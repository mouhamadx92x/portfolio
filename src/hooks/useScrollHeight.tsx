import { useEffect, useState } from "react";

interface ScrollHeightProps {
    initialValue?: number;
}

const useScrollHeight = ({ initialValue = 300 }: ScrollHeightProps = {}) => {
    const [boxHeight, setBoxHeight] = useState<number>(initialValue);

    useEffect(() => {
        const handleScroll = () => {
            const newHeight = Math.max(300, 500 - window.scrollY / 2);
            setBoxHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return boxHeight;
};

export default useScrollHeight;
