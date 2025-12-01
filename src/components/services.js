
export const baseUrl = "http://localhost:5000/api";

export const profile = {
  type: "Personal",
  refId: "WPFWAAUDLB",
  firstName: "hari",
  lastName: "Datha",
  email: "haridatha@yopmail.com",
  phone: "+91 8768768723",
  country: "India",
  username: "haridatha",
};
export const address = {
    userName: "haridatha",
    country: "India",
    state: "Telangana",
    city: "Karimnagar",
    addressLine1: "At Alor Road No-23",
    addressLine2: "Karimnagar",
    postalCode: "505415",
    email: "haridatha4@gmail.com"
}

// --- R2 Asset Configuration ---
export const clientNameOrPrefix = "test";
export const R2_BASE_URL = "https://pub-3cc8a24709204412981508017ac2b945.r2.dev/";
export function getR2AssetUrl(fileName) {
  if (!clientNameOrPrefix) return "";
  return `${R2_BASE_URL}${clientNameOrPrefix}/${fileName}`;
}

export const BUSINESS_LOGO = getR2AssetUrl("artha-dark-logo.svg");
export const WARNING_ICON = getR2AssetUrl("warning.svg");
export const ARTHA_IMAGE = getR2AssetUrl("arthaimage.svg");
export const ADDRESS_IMAGE = getR2AssetUrl("address-img.svg");

export const gitUrl = "https://github.com/HaridathaGoud";