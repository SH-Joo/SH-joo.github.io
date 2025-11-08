import { Badge } from "./ui/badge";
import { FileText, BookOpen, Award, FileCode, Archive } from "lucide-react";
import { papers, Paper } from "../data/papers";
import oceanBg from "../images/wave.jpg";

export function PapersPage() {
  // Group papers by year
  const papersByYear = papers.reduce(
    (acc, paper) => {
      if (!acc[paper.year]) {
        acc[paper.year] = [];
      }
      acc[paper.year].push(paper);
      return acc;
    },
    {} as Record<string, Paper[]>,
  );

  const years = Object.keys(papersByYear).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  // Calculate statistics
  const totalPapers = papers.length;
  const journalPapers = papers.filter((p) => p.type === "journal").length;
  const conferencePapers = papers.filter((p) => p.type === "conference").length;
  const preprintPapers = papers.filter((p) => p.type === "preprint").length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001a3d] via-gray-900 to-gray-800">
      {/* Hero Header with Ocean Background */}
      <div className="relative overflow-hidden py-24 md:py-32">
        {/* Animated Ocean Background */}
        <div
          className="absolute inset-0 ocean-wave-animated opacity-30"
          style={{
            backgroundImage: `url(${oceanBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/75 via-[#001a3d]/85 to-gray-900"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="inline-block h-1.5 w-20 bg-gradient-to-r from-[#003876] via-blue-500 to-blue-400 rounded-full mb-6"></div>
          <h1 
            className="text-white mb-4 text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}
          >
            Publications
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Bridging AI and Engineering for Real-World Impact
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl -mt-12 relative z-20">
        {/* Stats Section */}
        <div className="mb-20 p-6 md:p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#003876]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Total */}
            <div className="group flex flex-col items-center justify-center p-5 md:p-6 bg-gradient-to-br from-sky-500/15 to-transparent hover:from-sky-500/25 rounded-2xl border border-sky-400/40 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20">
              <div className="mb-3 p-2.5 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-sky-400 to-blue-300 bg-clip-text text-transparent mb-2">
                {totalPapers}
              </div>
              <div className="text-gray-300 font-medium">
                Total
              </div>
            </div>

            {/* Journal */}
            <div className="group flex flex-col items-center justify-center p-5 md:p-6 bg-gradient-to-br from-cyan-500/10 to-transparent hover:from-cyan-500/20 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="mb-3 p-2.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {journalPapers}
              </div>
              <div className="text-gray-300 font-medium">
                Journal
              </div>
            </div>

            {/* Conference */}
            <div className="group flex flex-col items-center justify-center p-5 md:p-6 bg-gradient-to-br from-emerald-500/10 to-transparent hover:from-emerald-500/20 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="mb-3 p-2.5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileCode className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                {conferencePapers}
              </div>
              <div className="text-gray-300 font-medium">
                Conference
              </div>
            </div>

            {/* Preprints */}
            <div className="group flex flex-col items-center justify-center p-5 md:p-6 bg-gradient-to-br from-orange-500/10 to-transparent hover:from-orange-500/20 rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="mb-3 p-2.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Archive className="w-5 h-5 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {preprintPapers}
              </div>
              <div className="text-gray-300 font-medium">
                Preprints
              </div>
            </div>
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-20 pb-20">
          {years.map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003876] to-blue-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-[#003876] to-[#004a99] text-white rounded-2xl shadow-2xl font-bold text-xl">
                    {year}
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#003876] via-blue-500/30 to-transparent" />
              </div>

              <div className="space-y-6">
                {papersByYear[year].map((paper, index) => (
                  <div
                    key={`${year}-${index}`}
                    className="group relative p-6 md:p-7 bg-gradient-to-br from-gray-800/60 to-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-[#003876]/60 hover:from-gray-800/80 hover:to-gray-900/70 transition-all duration-500 overflow-hidden"
                  >
                    {/* Decorative gradient on hover */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#003876]/0 group-hover:from-[#003876]/10 to-transparent rounded-full blur-3xl transition-all duration-700 pointer-events-none"></div>
                    
                    <div className="relative">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2.5 mb-5">
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
                                style={{
                                  backgroundColor: badge.color,
                                }}
                                className="text-white border-0 hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer px-4 py-1.5 font-medium shadow-md"
                              >
                                {badge.text}
                              </Badge>
                            </a>
                          ) : (
                            <Badge
                              key={badgeIndex}
                              style={{
                                backgroundColor: badge.color,
                              }}
                              className="text-white border-0 px-4 py-1.5 font-medium shadow-md"
                            >
                              {badge.text}
                            </Badge>
                          ),
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-white mb-4 group-hover:text-blue-200 transition-colors duration-300 text-lg md:text-xl font-semibold leading-relaxed font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>
                        {paper.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-gray-300 mb-4 text-base font-serif" style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}>
                        {paper.author}
                      </p>

                      {/* Publication Info */}
                      <div className="space-y-2.5">
                        {/* Booktitle/Journal/Conference */}
                        {paper.booktitle && (
                          <div className="flex items-start gap-2.5 text-blue-300 bg-blue-950/30 rounded-xl p-3 border border-blue-700/30">
                            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                            <p className="text-sm font-medium font-serif">{paper.booktitle}</p>
                          </div>
                        )}
                        
                        {/* Additional Note */}
                        {paper.note && (
                          <div className="flex items-start gap-2.5 text-gray-400 bg-gray-900/30 rounded-xl p-3 border border-gray-700/30">
                            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                            <p className="text-sm">{paper.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
