import { useContext } from "react"
import { SearchContext } from "./ButtonCollection"
import "./styles/SearchBar.css"

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useContext(SearchContext)

    return (
        <div className="SearchBar" style={{ opacity: props.opacity }}>
            <input className="inputTag" 
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                placeholder="Search..."
            />
            <div className="searchIcon">🔍︎</div>
        </div>
    )
}




export default SearchBar