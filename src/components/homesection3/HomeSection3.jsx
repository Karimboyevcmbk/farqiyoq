import "./homeSection3.scss"
import Line from "../../assets/line.svg"

const HomeSection3 = () => {
  return (
    <div className="homeSection3">
        <h3>How it works</h3>
        <div className="homeSection3__rasm">
            <div className="dumaloq"></div>
            <div className="dumaloq"></div>
            <div className="dumaloq"></div>
            <div className="line"></div>
        </div>
        <div className="homeSection3__title">
            <div className="homeSection3__title-child">
                <p>01</p>
                <h4>Pick you coffee</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem magni optio! Quia officia corporis dolorum in pariatur laborum voluptatibus iste cum? Nisi at explicabo autem consequuntur illo, quo cumque.</span>
            </div>
            <div className="homeSection3__title-child">
                <p>02</p>
                <h4>Choose the frequency</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem magni optio! Quia officia corporis dolorum in pariatur laborum voluptatibus iste cum? Nisi at explicabo autem consequuntur illo, quo cumque.</span>
            </div>
            <div className="homeSection3__title-child">
                <p>03</p>
                <h4>Receive and enjoy!</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem magni optio! Quia officia corporis dolorum in pariatur laborum voluptatibus iste cum? Nisi at explicabo autem consequuntur illo, quo cumque.</span>
            </div>
        </div>
        <a href="/createyourplan"><button className="bilmadm">Create your plan</button></a>
    </div>
  )
}

export default HomeSection3