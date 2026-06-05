import { defineField, defineType } from "sanity";

export const downloads = defineType({
  name: "downloads",
  title: "Downloads",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Brochure", value: "brochure" },
          { title: "Form", value: "form" },
          { title: "Syllabus", value: "syllabus" },
          { title: "Notice", value: "notice" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
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
          const maxBytes = 1 * 1024 * 1024; // 1 MB
          if (sizeInBytes > maxBytes) {
            const sizeMB = (sizeInBytes / 1024 / 1024).toFixed(2);
            return `File is ${sizeMB} MB — must be 1 MB or smaller.`;
          }
          return true;
        }),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
