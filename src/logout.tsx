import { useNavigation } from "@raycast/api";
import { useEffect } from "react";
import { client } from "./lib/client";

export default function Command() {
  const { pop } = useNavigation();

  useEffect(() => {
    client.removeTokens();
    pop();
  }, []);
}
