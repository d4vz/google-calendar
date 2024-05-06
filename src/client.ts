import { OAuth, getPreferenceValues } from "@raycast/api";

// "1027777289546-dqcvms1bih7g1d0v6nu88fieavd1ku31.apps.googleusercontent.com";

const preferences = getPreferenceValues();

export const clientId = preferences.clientId;

export const client = new OAuth.PKCEClient({
  redirectMethod: OAuth.RedirectMethod.AppURI,
  providerName: "Google",
  providerId: "google",
  description: "Connect your Google account\n(Raycast Extension Demo)",
});
