import TestComponent from "../components/TestComponent"
import DexButton from "../components/DexButton"
import "./Home.css"

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div className="DexButtons">
                <DexButton number="1"/>
                <DexButton number="2"/>
                <DexButton number="3"/>
                <DexButton number="4"/>
                <DexButton number="5"/>
                <DexButton number="5"/>
                <DexButton number="5"/>
               
            </div>
            
        </div>
        
    )
}

export default Home