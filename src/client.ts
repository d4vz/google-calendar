import { OAuth } from "@raycast/api";

export const clientId = process.env.GOOGLE_CLIENT_ID as string;

export const client = new OAuth.PKCEClient({
  redirectMethod: OAuth.RedirectMethod.AppURI,
  providerName: "Google",
  providerId: "google",
  description: "Connect your Google account\n(Raycast Extension Demo)",
});
