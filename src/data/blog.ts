export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  file: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "홈페이지 개편!",
    date: "2025-11-07",
    description: "Figma Maker로 홈페이지를 개편했습니다.",
    file: "first.md",
    tags: ["Diary"],
  },
];