import { createAuthClient } from "@neondatabase/neon-js/auth";

const authClient = createAuthClient(
  import.meta.env.VITE_NEON_AUTH_URL
);

export { authClient };