'use client';
import React from 'react';

const Form = () => {
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Tambah Konferensi yang Berafiliasi/Kerjasama</h1>
        <form>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Seminar</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Nama Seminar" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tema/Topik Seminar</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Nama Seminar" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tanggal & Waktu</label>
              <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Lokasi Seminar</span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="location" value="online" />
                  <span className="ml-2">Online</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input type="radio" className="form-radio" name="location" value="offline" />
                  <span className="ml-2">Offline</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lokasi Fisik / Link Platform Daring</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Alamat Seminar" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Link Pendaftaran</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Link" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Penyelenggara</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Nama institusi atau organisasi yang menyelenggarakan" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Penyelenggara</label>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Email Penyelenggara" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nomor Telepon Penyelenggara</label>
              <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan Nomor Telepon Penyelenggara" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat Penyelenggara</label>
              <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Alamat lengkap institusi/organisasi"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Konfirmasi</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  };
  
  export default Form;