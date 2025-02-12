import slugify from "slugify";

const generateSlug = (title: string) =>
  slugify(title, { lower: true, strict: true, replacement: "-" });

export default generateSlug;
