"use client";
import Weather from "@/app/components/Weather";
import withGeolocalization from "@/app/components/WithGeolocalization";
export default function Home() {
  const WeatherWithLocation = withGeolocalization(Weather);
  return (
    <main className=" min-h-screen">
      <WeatherWithLocation />
    </main>
  );
}
