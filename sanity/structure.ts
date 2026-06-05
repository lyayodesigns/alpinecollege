import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Gallery")
        .schemaType("gallery")
        .child(S.documentTypeList("gallery").title("Gallery")),
      S.listItem()
        .title("Downloads")
        .schemaType("downloads")
        .child(S.documentTypeList("downloads").title("Downloads")),
      S.listItem()
        .title("News")
        .schemaType("news")
        .child(S.documentTypeList("news").title("News")),
    ]);
