export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  file: string;
  tags: string[];
  logo: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "딥러닝은 왜 얇은 균열을 놓칠까? (FACS-Net & CT-Loss)",
    date: "2025-12-22",
    description: "Keywords: 미세 균열 인식, 주파수 편향",
    file: "/blog/251222_FACS-net.md",
    tags: ["첫학기", "미세 균열", "SOTA", "Automation in Construction (JCR 1/182)"],
    logo: "/blog/251222/logo.png"
  },
  
];