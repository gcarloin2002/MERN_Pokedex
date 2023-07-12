import { useEffect, useState } from "react";
import "./styles/TopBar.css"

const TopBar = () => {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      setOpacity(1);
    }, []);

    return (
        <div className="TopBar" style={{ opacity }}>
            Search Bar
        </div>
    )
}




export default TopBar