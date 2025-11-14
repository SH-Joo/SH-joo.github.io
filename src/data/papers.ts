export interface Paper {
  type: string;
  author: string;
  title: string;
  year: string;
  note?: string;
  booktitle?: string;
  doi?: string;
  award?: string;
  model?: string;
  SOTA?: string;
  project?: string;
  selected?: string;
  content?: {
    background?: string;
    motivation?: string;
    solution?: string;
  };
  badges?: Array<{
    text: string;
    color: string;
    url?: string;
  }>;
}

export const papers: Paper[] = [
  {
    type: "preprint",
    author: "Siheon Joo and Hongjo Kim",
    title: "SUPER Decoder Block for Reconstruction-Aware U-Net Variants",
    year: "2025",
    note: "Manuscript under review. Preprint available soon.",
    model: "SUPER Decoder Block",
    SOTA: "SUPER-CG - 2025 SOTA for Smartphone Image Denoising",
    selected: "",
    content: {
      background: "Skip-connected encoder–decoder architectures still suffer from information loss, limiting recovery of fine high-frequency details.",
      motivation: "Existing U-Net variants cannot guarantee perfect reconstruction and often suppress high-frequency components unintentionally.",
      solution: "SUPER introduces selectively suppressed perfect reconstruction, enriching representational diversity and improving thin-crack segmentation."
    },
    badges: [
      {
        text: "👑 SOTA (2025)",
        color: "#192d6e",
        url: ""
      },
      {
        text: "📄 Paper",
        color: "#de454a",
        url: ""
      },
      {
        text: "🔎 Under Review",
        color: "#3c4d4c",
        url: ""
      }
    ]
  }

  
  {
    type: "preprint",
    author: "Siheon Joo, Seokhwan Kim, and Hongjo Kim",
    title: "Frequency-Aware Crack Segmentation Network (FACS-Net) for Thin-Cracks via Topology Preservation",
    year: "2025",
    note: "Manuscript under review. Preprint available on SSRN",
    model: "FACS-Net",
    SOTA: "👑 FACS-Net - 2025 SOTA for Thin Crack Segmentation",
    project: "https://github.com/SH-Joo/FACS",
    selected: "/images/FACS_Logo.png",
    content: {
      background: "Early detection of micro-cracks is crucial, but vision models struggle to identify them due to spectral bias.",
      motivation: "Most benchmarks, including SOTA, do not account for spectral bias, leading to vulnerability in detecting thin cracks.",
      solution: "Achieved significant performance improvement over SOTA through a Frequency-Aware design and a Topology-Aware Loss."
    },
    badges: [
      {
        text: "👑 SOTA (2025)",
        color: "#192d6e",
        url: "https://github.com/SH-Joo/FACS"
      }, 
      {
        text: "🔗 Code",
        color: "#632c96",
        url: "https://github.com/SH-Joo/FACS"
      },
      {
        text: "📄 Paper",
        color: "#de454a",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5384487"
      },
      {
        text: "🔎 Under Review",
        color: "#3c4d4c"
      }
    ]
  },
  {
    type: "conference",
    author: "Siheon Joo, Haeun Jung, Kyoungmin Lee, Junghyun Lee, and Seonggeon Bae",
    title: "CPH White-Box Cartoon GAN: A Patch-Based Style-Swap Approach",
    booktitle: "IEEE International Conference on Electronics, Control, and Communication Engineering Technologies (ICECET)",
    year: "2024",
    doi: "10.1109/ICECET61485.2024.10698008",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ],
    
  },
  {
    type: "conference",
    author: "Siheon Joo, Kyoungmin Lee, Stellar Choi, Haeun Jung, and Seonggeon Bae",
    title: "Enhancing Super-Resolution: Filter Size Optimization in Deep Learning Architectures",
    booktitle: "International Conference on Small and Medium Business (ICSMB)",
    year: "2024",
    award: "Best Paper Award (ICSMB 2024)",
    note: "Fukuoka, Japan, Jan. 2024",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }, 
      {
        text: "🏆 Best Paper Award",
        color: "#ff7300"
      }
    ],
    TopJournal_Civil: "Automation_in_Construction"
  },
  {
    type: "conference",
    author: "Siheon Joo, Haeun Jung, Junghyun Lee, and Seonggeon Bae",
    title: "Style-Blend for Enhancing Color Style Transfer",
    booktitle: "International Workshop on AI Technology (IWAT)",
    year: "2024",
    note: "Jeju, Korea, May. 2024",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  },
  {
    type: "conference",
    author: "Kyoungmin Lee, Stellar Choi, Siheon Joo, Haeun Jung, and Seonggeon Bae",
    title: "A Study on High-Quality Style Transfer Using Edge-Enhanced Gaussian Smoothing Technique (EEGST) for Minimizing Perceptual Loss",
    booktitle: "IEEE ICECCE",
    year: "2023",
    doi: "10.1109/ICECCE61019.2023.10442483",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  },
  {
    type: "conference",
    author: "Kyoungmin Lee, Siheon Joo, Haeun Jung, and Seonggeon Bae",
    title: "A Study on Enhanced Generation Algorithm Through Structure-Preserving Style Transfer with SLIC",
    booktitle: "IEEE ICECET",
    year: "2024",
    doi: "10.1109/ICECET61485.2024.10698447",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  },
  {
    type: "conference",
    author: "Kyoungmin Lee, Siheon Joo, Stellar Choi, Haeun Jung, and Seonggeon Bae",
    title: "Improving Style Transfer Model and Minimizing Artifacts through Enhanced VGG Perceptual Loss",
    booktitle: "International Conference on Small and Medium Business (ICSMB)",
    year: "2024",
    note: "Fukuoka, Japan",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  },
  {
    type: "conference",
    author: "Stellar Choi, Siheon Joo, Kyoungmin Lee, Haeun Jung, and Seonggeon Bae",
    title: "A Study on Error Improvement in Black-and-White Line Art Images Using Proposed Alpha Mask Segmentation Applied to Pix2Pix",
    booktitle: "International Conference on Small and Medium Business (ICSMB)",
    year: "2024",
    note: "Fukuoka, Japan",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  },
  {
    type: "conference",
    author: "Kyoungmin Lee, Siheon Joo, Stellar Choi, Haeun Jung, and Seonggeon Bae",
    title: "A Study on Reducing Checkerboard Artifacts in Style Transfer Using Gaussian Smoothing",
    booktitle: "2023 한국인공지능학회 추계학술대회 (JKAIA)",
    year: "2023",
    badges: [
      {
        text: "Under Graduate",
        color: "#6bb0ab"
      }
    ]
  }
];
