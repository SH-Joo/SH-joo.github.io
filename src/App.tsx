import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PapersPage } from './components/PapersPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from "./components/BlogPostPage"; // ✅ 추가
import type { BlogPost } from "./data/blog";   

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'papers' | 'blog'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'papers':
        return <PapersPage />;
      case 'blog':
        return selectedPost ? (
          <BlogPostPage post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <BlogPage onSelectPost={(post) => setSelectedPost(post)} />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header
        currentPage={currentPage}
        onNavigate={(p) => {
          setCurrentPage(p);
          if (p !== 'blog') setSelectedPost(null);
        }}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
