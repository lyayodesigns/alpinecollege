/**
 * This page renders the Sanity Studio.
 * The [[...tool]] catch-all route handles all studio sub-routes.
 * It must be a client component since the Studio is a full React SPA.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
