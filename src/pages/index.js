import Blog from './blog';

export default function Home() {
  return (
    <div>
      {/* https://fe7mnau930.onrocket.site/travelmatic/?s=italy */}
      Tireless Traveler
    <iframe
      id="mapFrame"
      src="https://www.google.com/maps?q=Eiffel+Tower,Paris&output=embed"
      style="border: 0; width: 99vw; height: 50vh; margin: 0 auto"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
      <Blog />
    </div>
  );
}
