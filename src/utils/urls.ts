import { TODO_DESTINATION, type Destination } from "../data/executive";

const ASN_ORIGIN = "https://aiskillsnavigator.microsoft.com";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

export function isAvailableDestination(destination: Destination): destination is string {
  return destination !== TODO_DESTINATION;
}

export function buildAsnUrl(destination: string, slug: string, content: string): string {
  const url = new URL(destination, ASN_ORIGIN);

  if (url.origin !== ASN_ORIGIN) {
    return url.toString();
  }

  const incoming = new URLSearchParams(window.location.search);
  const defaults = {
    utm_source: "learning_landing_page",
    utm_medium: "referral",
    utm_campaign: slug,
    utm_content: content,
  };

  UTM_KEYS.forEach((key) => {
    url.searchParams.set(key, incoming.get(key) || defaults[key]);
  });

  return url.toString();
}