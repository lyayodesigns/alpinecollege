import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) =>
                Rule.required().custom(async (value, context) => {
                  if (!value?.asset?._ref) return true;
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const client = (context as any).getClient({ apiVersion: "2024-01-01" });
                  const sizeInBytes: number | null = await client.fetch(
                    `*[_id == $ref][0].size`,
                    { ref: value.asset._ref }
                  );
                  if (typeof sizeInBytes !== "number") return true;
                  const maxBytes = 500 * 1024; // 500 KB
                  if (sizeInBytes > maxBytes) {
                    const sizeKB = (sizeInBytes / 1024).toFixed(0);
                    return `Image is ${sizeKB} KB — must be 500 KB or smaller.`;
                  }
                  return true;
                }),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "alt",
              title: "Image Alt Text",
              type: "string",
            }),
          ],
          preview: {
            select: { media: "image", title: "caption" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "images.0.image" },
  },
});
