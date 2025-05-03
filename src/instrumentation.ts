import * as Sentry from "@sentry/nextjs";

export async function register() {
  Sentry.init({
    dsn: "https://foo@bar.ingest.us.sentry.io/42",
  });
}
