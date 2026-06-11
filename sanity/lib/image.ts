import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

type ImageSource = Parameters<typeof imageBuilder.image>[0];

export const urlFor = (source: ImageSource) =>
  imageBuilder.image(source);
