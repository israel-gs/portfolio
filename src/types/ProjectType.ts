import { TechnologyName } from "./TechnologyName";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  playStoreUrl?: string;
  siteUrl?: string;
  technologies?: TechnologyName[];
};
