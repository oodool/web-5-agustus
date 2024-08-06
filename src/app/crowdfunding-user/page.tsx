'use client';
import React from 'react';

const CrowdfundingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-1/5 bg-white p-8 rounded shadow-md">
          <nav className="space-y-4">
            <h2 className="font-bold">Daftar Isi</h2>
            <ul className="space-y-2">
              <li className="text-gray-700">Subjudul 1</li>
              <li className="text-gray-700">Subjudul 2</li>
              <li className="text-gray-700">Subjudul 3</li>
              <li className="text-gray-700">Subjudul 4</li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <div className="flex">
            <div className="w-2/3">
              <h1 className="text-3xl font-bold mb-2">Title penelitian</h1>
              <h2 className="text-xl text-gray-600 mb-4">subtitle penelitian</h2>
              <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget placerat lectus, a efficitur eros. Morbi commodo, turpis ac convallis volutpat, enim purus ultrices quam, ultricies varius risus elit vel enim.
              </p>
              <div className="bg-gray-300 h-64 mb-4 flex items-center justify-center">
                (image)
              </div>
              <h3 className="text-2xl font-bold mb-2">subtitle penelitian</h3>
              <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget placerat lectus, a efficitur eros. Morbi commodo, turpis ac convallis volutpat, enim purus ultrices quam, ultricies varius risus elit vel enim.
              </p>
            </div>
            <div className="w-1/3 h-3/4 bg-white p-8 ml-8 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-2">Title penelitian</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="font-bold mb-2">Posisi dibutuhkan</p>
              <ul className="list-disc list-inside mb-4">
                <li>Lowongan A</li>
                <li>Lowongan B</li>
              </ul>
              <p className="font-bold mb-2">Masa kolaborasi</p>
              <p className="text-gray-600 mb-4">17 Juli - 17 Agustus</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Bantu kami</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrowdfundingPage;
