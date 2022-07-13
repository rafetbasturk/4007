import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../components/Map";
import image from "../images/hero.jpeg"


const Home = () => {
  return (
    <main className="main">
      <div className="main__slide">
        <img
          className="main__image"
          src={image}
          alt="hero"
          width="100%"
          height="100%"
        />
      </div>

      <Wrapper apiKey="AIzaSyBiat57nJYu_iyHI4AjBjwntPazracE09Q" className="main__info">
        <Map />
      </Wrapper>
    </main>
  );
}

export default Home;