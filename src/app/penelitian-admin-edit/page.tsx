'use Client;'
import React from 'react';
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
  // Sample data for the article
  const article = {
    title: 'Judul Penelitian 1',
    authors: [
      { name: 'Salam'},
      { name: 'Salim'}
    ],
    abstract:
      'Machine learning addresses the question of how to build computers that improve automatically through experience. It is one of today’s most rapidly growing technical fields, lying at the intersection of computer science and statistics, and at the core of artificial intelligence and data science. Recent progress in machine learning has been driven both by the development of new learning algorithms and theory and by the ongoing explosion in the availability of online data and low-cost computation. The adoption of data-intensive machine-learning methods can be found throughout science, technology and commerce, leading to more evidence-based decision-making across many walks of life, including health care, manufacturing, education, financial modeling, policing, and marketing.',
    publishedDate: '06/07/2024',
    journal: 'IEEE',
    doi: '06/07/2024',
    journalLink: 'contohresearch.com',
    rating: 'Sinta Q1',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <div className="text-lg text-gray-700 mb-4">
          {article.authors.map((author, index) => (
            <span key={index}>
              <a className="text-gray-700">
                {author.name}
              </a>
              {index < article.authors.length - 1 && ', '}
            </span>
          ))}
        </div>
        <div className="mb-4 text-right">
            <Button className="bg-red-500 text-white px-3 py-1 rounded mr-2">Download PDF</Button>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Abstract</h2>
          <p className="text-gray-700">{article.abstract}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Diterbitkan pada:</strong> {article.publishedDate}
          </p>
          <p className="text-gray-700">
            <strong>Jurnal publikasi:</strong> {article.journal}
          </p>
          <p className="text-gray-700">
            <strong>DOI:</strong> {article.doi}
          </p>
          <p className="text-gray-700">
            <strong>Link Jurnal:</strong>{' '}
            <a href={article.journalLink} className="text-blue-500 underline">
              {article.journalLink}
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Rating Jurnal:</strong> {article.rating}
          </p>
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Post Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
