export enum TechnologyName {
  flutter = "Flutter",
  reactjs = "React.js",
  nextjs = "Next.js",
  astro = "Astro",
  dart = "Dart",
  typescript = "Typescript",
  git = "Git",
  tailwindcss = "Tailwind CSS",
  javascript = "JavaScript",
}

const TechnologyColor = {
  [TechnologyName.astro]: "bg-[#FF9C9C] text-black",
  [TechnologyName.dart]: "bg-[#052449] text-white",
  [TechnologyName.flutter]: "bg-[#CAEEFE] text-black",
  [TechnologyName.git]: "bg-[#FF9C9C] text-black",
  [TechnologyName.nextjs]: "bg-nextjs",
  [TechnologyName.reactjs]: "bg-white text-black",
  [TechnologyName.tailwindcss]: "bg-tailwindcss",
  [TechnologyName.typescript]: "bg-typescript",
  [TechnologyName.javascript]: "bg-[#FFFED6] text-black",
};

export const getTechnologyColor = (technologyName: TechnologyName) => {
  return TechnologyColor[technologyName];
};
