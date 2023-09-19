import "./footer.scss"
import saytLogo2 from "../../assets/saytLogo2.svg"
import { Link } from "react-router-dom"
import { AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <img src={saytLogo2} alt="" />
        <div className="footer__sites">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/aboutus">ABOUT US</Link></span>
            <span><Link to="/createyourplan">CREATE YOUR PLAN</Link></span>
        </div>
        <div className="footer__logos">
            <a href="https://ru-ru.facebook.com/"><AiFillFacebook/></a>
            <a href="https://twitter.com/?lang=ru"><AiOutlineTwitter/></a>
            <a href="https://www.instagram.com/"><AiOutlineInstagram/></a>
        </div>
    </footer>
  )
}

export default Footer