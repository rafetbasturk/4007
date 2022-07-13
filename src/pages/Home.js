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
      <section className="main__info">
        <div>
          <h2 className="main__name">
            Gözleri gökyüzüne dalanların, yeryüzünde olmayan hayallerine gidiyoruz…
          </h2>
          <p><span className="main__title">Yer:</span><span>ŞAHİNBEY KONGRE VE SANAT MERKEZİ</span></p>
          <p><span className="main__title">Tarih:</span><span>22-23-24 EYLÜL 2022</span></p>
        </div>
        <iframe
          className="main__map"
          title="map"
          width="100%"
          height="300"
          style={{ "border": 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=Şahinbey+Kongre+ve+Sanat+Merkezi/`}>
        </iframe>
      </section>
    </main>
  );
}

export default Home;