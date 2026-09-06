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
    "Mirpur",
    "Muzaffarabad",
    "Kotli",
    "Rawalakot",
    "Gilgit",
    "Skardu",
  ],
  [
    "Lahore",
    "Sheikhupura",
    "Kasur",
    "Gujranwala",
    "Gujrat",
    "Sahiwal",
    "Okara",
    "Sialkot",
    "Wazirabad",
  ],
  ["Faisalabad", "Chiniot", "Jhang", "Toba Tek Singh", "Sargodha"],
  [
    "Multan",
    "Khanewal",
    "Vehari",
    "Bahawalpur",
    "Muzaffargarh",
    "D.G. Khan",
    "Rahim Yar Khan",
  ],
  [
    "Peshawar",
    "Mardan",
    "Nowshera",
    "Charsadda",
    "Swabi",
    "Kohat",
    "Abbottabad",
    "Mingora",
    "Dera Ismail Khan",
  ],
  [
    "Karachi",
    "Hyderabad",
    "Dadu",
    "Thatta",
    "Sukkur",
    "Larkana",
    "Nawabshah",
    "Mirpur Khas",
    "Khairpur",
    "Jacobabad",
  ],
  [
    "Azad Jammu and Kashmir",
    "Mirpur",
    "Muzaffarabad",
    "Kotli",
    "Rawalakot",
  ],
  ["Gilgit-Baltistan", "Gilgit", "Skardu"],
  ["Balochistan", "Quetta", "Gwadar", "Turbat", "Khuzdar"],
];

const cityByName = new Map(
  pakistanCities.map((city) => [city.city.toLowerCase(), city] as const)
);

const MAJOR_FALLBACK = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Faisalabad",
  "Multan",
  "Peshawar",
];

function serviceAreaCity(name: string): LocationCity {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    slug: `service-area-${slug}`,
    label: `Software house and software development company in ${name}`,
    href: "#",
    city: name,
    blurb: `We serve businesses in ${name} from the nearest regional location hub.`,
  };
}

export function getNearbyCitiesFor(cityName: string): LocationCity[] {
  const normalized = cityName.toLowerCase();
  const region = cityRegions.find((cities) =>
    cities.some((name) => name.toLowerCase() === normalized)
  );

  const names = (region ?? MAJOR_FALLBACK).filter(
    (name) => name.toLowerCase() !== normalized
  );

  return names.map((name) => cityByName.get(name.toLowerCase()) ?? serviceAreaCity(name));
}
