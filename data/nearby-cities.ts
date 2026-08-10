import { pakistanCities, type LocationCity } from "@/data/locations";

/**
 * Regional clusters for “local service area” sections on city pages.
 * A city page lists other cities in its cluster (excluding itself).
 */
const cityRegions: string[][] = [
  [
    "Islamabad",
    "Rawalpindi",
    "Wah Cantt",
    "Taxila",
    "Attock",
    "Jhelum",
    "Chakwal",
  ],
  ["Lahore", "Sheikhupura", "Kasur", "Okara", "Sahiwal"],
  ["Faisalabad", "Chiniot", "Jhang", "Toba Tek Singh", "Sargodha"],
  ["Multan", "Bahawalpur", "Khanewal", "Vehari", "Muzaffargarh", "Dera Ghazi Khan"],
  ["Gujranwala", "Sialkot", "Gujrat", "Wazirabad"],
  ["Karachi", "Hyderabad", "Thatta", "Dadu"],
  [
    "Peshawar",
    "Mardan",
    "Nowshera",
    "Charsadda",
    "Swabi",
    "Kohat",
    "Abbottabad",
    "Mingora",
  ],
  ["Sukkur", "Larkana", "Khairpur", "Nawabshah", "Mirpur Khas"],
  ["Quetta", "Gwadar", "Turbat", "Khuzdar"],
  ["Mirpur", "Muzaffarabad", "Kotli", "Rawalakot"],
  ["Gilgit", "Skardu"],
  ["Rahim Yar Khan", "Bahawalpur"],
];

const cityByName = new Map(
  pakistanCities.map((city) => [city.city.toLowerCase(), city] as const)
);

const MAJOR_FALLBACK = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Gujranwala",
];

export function getNearbyCitiesFor(cityName: string): LocationCity[] {
  const normalized = cityName.toLowerCase();
  const region = cityRegions.find((cities) =>
    cities.some((name) => name.toLowerCase() === normalized)
  );

  const names = (region ?? MAJOR_FALLBACK).filter(
    (name) => name.toLowerCase() !== normalized
  );

  return names
    .map((name) => cityByName.get(name.toLowerCase()))
    .filter((city): city is LocationCity => Boolean(city));
}
