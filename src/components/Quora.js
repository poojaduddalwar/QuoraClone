import Navbar from "./layouts/Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import './CssFolder/Quora.css'

const Quora = () => {
    return (
        <div className="quora">
            <Navbar />
            <div className="quora-contents">
                <div className="quora-content">
                    <Sidebar />
                    <Feed />
                    <Widget />
                </div>
            </div>
        </div>
    );
}

export default Quora;