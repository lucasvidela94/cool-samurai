import { defineCollection, z } from "astro:content";

// Colección "about-me"
const aboutMeCollection = defineCollection({
  type: "content",
  schema: z.object({
    nombre: z.string(),
    titulo: z.string(),
    resumen: z.string(),
    experiencia: z.number(),
    habilidades: z.array(z.string()),
    enlaces: z.object({
      linkedin: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
    }),
  }),
});

// Colección "experience"
const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    empresa: z.string(),
    cargo: z.string(),
    fechaInicio: z.date(),
    fechaFin: z.date().optional(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()),
  }),
});

// Colección "side-projects"
const sideProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()),
    enlaces: z.object({
      repositorio: z.string().optional(),
      sitioWeb: z.string().optional(),
    }),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  "about-me": aboutMeCollection,
  blog: blogCollection,
  experience: experienceCollection,
  "side-projects": sideProjectsCollection,
};
