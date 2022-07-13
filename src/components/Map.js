import { useRef, useEffect } from "react";

const Map = () => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: { lat: 37.015023481850506, lng: 37.359000426534024 },
      zoom: 16,
    });
  });

  return (
    <section className="main__info">
      <div >
        <h2 className="main__name">
          Gözleri gökyüzüne dalanların, yeryüzünde olmayan hayallerine gidiyoruz…
        </h2>
        <p><span className="main__title">Yer:</span><span>ŞAHİNBEY KONGRE VE SANAT MERKEZİ</span></p>
        <p><span className="main__title">Tarih:</span><span>22-23-24 EYLÜL 2022</span></p>
      </div>
      <div ref={ref} className="main__map" />
    </section>
  );
}

export default Map;