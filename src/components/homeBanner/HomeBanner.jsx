import { Link } from "react-router-dom"
import "./homeBanner.scss"

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
        <div className="homeBannerTitle">
            <h1>Great coffee made simple.</h1>
            <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <Link to="createyourplan"><button>Create your plan</button></Link>
        </div>
    </div>
  )
}

export default HomeBanner