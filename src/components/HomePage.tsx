import { Mail, Github, GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import profileImage from "../images/profile_image.jpg";
import oceanBg from "../images/wave.jpg";
import { papers } from "../data/papers";

export function HomePage() {
  const selectedPapers = papers.filter(paper => paper.selected);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001a3d] via-gray-900 to-gray-800">
      {/* Hero Section - Profile Focused with Ocean Background */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Animated Ocean Background */}
        <div
          className="absolute inset-0 ocean-wave-animated"
          style={{
            backgroundImage: `url(${oceanBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/75 via-[#001a3d]/70 to-gray-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003876] to-blue-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#003876]/50 shadow-2xl ring-8 ring-white/5 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Siheon Joo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/40 rounded-full backdrop-blur-sm">
                  <span className="text-emerald-200 text-sm font-medium tracking-wide">
                    Integrated MS-Ph.D Candidate
                  </span>
                </div>
              </div>

              <h1 
                className="text-white mb-6 text-6xl md:text-7xl font-bold tracking-tight"
                style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}
              >
                Siheon Joo
              </h1>
              <p className="text-gray-200 mb-3 text-xl font-medium">
                Computer Vision & Smart Infrastructure
              </p>
              <p className="text-gray-300 mb-2 text-lg">
                Smart Infrastructure Lab (SIL)
              </p>
              <p className="text-gray-400 mb-10 text-base">
                Yonsei University, Seoul, Korea
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="mailto:sh.joo@yonsei.ac.kr"
                  className="group flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#003876] to-[#004a99] hover:from-[#004a99] hover:to-[#005bbd] border border-[#003876] rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-sm"
                >
                  <Mail className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Email</span>
                </a>
                <a
                  href="https://github.com/SH-Joo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-6 py-3 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm text-sm"
                >
                  <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">GitHub</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=9v82QXYAAAAJ&hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-6 py-3 bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm text-sm"
                >
                  <GraduationCap className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Scholar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-28 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <div className="inline-block h-1.5 w-20 bg-gradient-to-r from-[#003876] via-blue-500 to-blue-400 rounded-full mb-6"></div>
            <h2 className="text-white mb-4 text-4xl font-bold font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>About Me</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am an MS/PhD candidate at the{" "}
              <strong>
                Smart Infrastructure Lab (SIL), Yonsei
                University
              </strong>
              .
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              My primary research interests lie in{" "}
              <strong>
                Computer Vision, Pattern Recognition, Signal
                Processing, and Smart Infrastructure
              </strong>
              .
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am particularly passionate about enabling
              artificial intelligence to learn fine, intricate
              patterns that are traditionally challenging for
              models to capture.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Leveraging this capability, I aim to address
              high-precision challenges across civil engineering
              and other application domains, delivering
              solutions that are both technically robust and
              practically impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Papers Section */}
      <section className="py-28 bg-gradient-to-b from-gray-800/50 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-16">
            <div className="inline-block h-1.5 w-20 bg-gradient-to-r from-[#003876] via-blue-500 to-blue-400 rounded-full mb-6"></div>
            <h2 className="text-white mb-4 text-4xl font-bold font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>Selected Papers</h2>
            <p className="text-gray-300 text-xl">
              Recent research highlights and publications
            </p>
          </div>

          <div className="space-y-6">
            {selectedPapers.map((paper, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-[#003876]/70 hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-500"
              >
                {/* 상단: 제목/메타 */}
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {paper.badges?.map((badge, badgeIndex) =>
                      badge.url ? (
                        <a
                          key={badgeIndex}
                          href={badge.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Badge
                            style={{ backgroundColor: badge.color }}
                            className="text-white border-0 hover:opacity-80 transition-opacity cursor-pointer px-3 py-1"
                          >
                            {badge.text}
                          </Badge>
                        </a>
                      ) : (
                        <Badge
                          key={badgeIndex}
                          style={{ backgroundColor: badge.color }}
                          className="text-white border-0 px-3 py-1"
                        >
                          {badge.text}
                        </Badge>
                      )
                    )}
                  </div>

                  <h3 className="text-white text-2xl font-semibold group-hover:text-blue-300 transition-colors font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-lg font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>{paper.author}</p>
                  <p className="text-gray-400">{paper.note} ({paper.year})</p>
                </div>

                {/* 하단: 좌(내용요약) / 우(로고) */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
                  {/* 내용요약 */}
                  <div className="flex-1 space-y-4 mt-2 pt-4 md:mt-0 md:pt-0 border-t md:border-t-0 border-gray-700/50">
                    {paper.content?.background && (
                      <div>
                        <h4 className="text-sky-400 font-semibold mb-2 text-sm">Background</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {paper.content.background}
                        </p>
                      </div>
                    )}
                    {paper.content?.motivation && (
                      <div>
                        <h4 className="text-sky-400 font-semibold mb-2 text-sm">Motivation</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {paper.content.motivation}
                        </p>
                      </div>
                    )}
                    {paper.content?.solution && (
                      <div>
                        <h4 className="text-sky-400 font-semibold mb-2 text-sm">Solution</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {paper.content.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 로고(크기 제한된 버블 + 다이얼로그) */}
                  {paper.selected && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          className="flex-shrink-0 w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden shadow-2xl
                                     hover:scale-105 transition-transform duration-300 cursor-pointer
                                     bg-white/5 backdrop-blur-sm border border-gray-700/50 p-4 self-stretch md:self-auto"
                          aria-label={`${paper.model ?? "Selected"} Logo preview`}
                        >
                          <img
                            src={paper.selected}
                            alt={`${paper.model ?? "Selected"} Logo`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      </DialogTrigger>

                      <DialogContent className="max-w-2xl w-full bg-gray-900/95 border border-gray-700">
                        <DialogTitle className="sr-only">{paper.model ?? "Selected"} Logo</DialogTitle>
                        <DialogDescription className="sr-only">
                          Full size view of logo
                        </DialogDescription>
                        <div className="flex items-center justify-center p-6">
                          <img
                            src={paper.selected}
                            alt={`${paper.model ?? "Selected"} Logo`}
                            className="max-h-[50vh] w-auto object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedPapers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Loading publications...</p>
            </div>
          )}

          <div className="mt-20 text-center">
            <p className="text-gray-300 text-xl font-medium">
              View all publications in the Papers section
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
