import {} from "react-icons"
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
export default function ReactIcons() {
    return (
        <div className="App">
            <h1 className="title">React Icons</h1>

            <ul>
                <li><FaFacebook/></li>
                <li><FaWhatsapp/> </li>
                <li><FaTwitter/> </li>
                <li><FaInstagram/> </li>
                <li><FaTelegram/> </li>
            </ul>
        </div>
    );
}