import "./homesection2.scss"
import HomeSectionImg3 from "../../assets/HomeSectionImg3.svg"

const HomeSection2 = () => {
  return (
    <div className='HomeSection2'>
        <div className="HomeSection2Child">
            <img src={HomeSectionImg3} alt="" />
            <strong>Gran Espresso</strong>
            <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
        </div>
        <div className="HomeSection2Child">
            <img src={HomeSectionImg3} alt="" />
            <strong>Planalto</strong>
            <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
        </div>
        <div className="HomeSection2Child">
            <img src={HomeSectionImg3} alt="" />
            <strong>Piccollo</strong>
            <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
        </div>
        <div className="HomeSection2Child">
            <img src={HomeSectionImg3} alt="" />
            <strong>Danche</strong>
            <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
        </div>
    </div>
  )
}

export default HomeSection2