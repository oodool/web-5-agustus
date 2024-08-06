'use client';
import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-1">
        {/* Sidebar */}

        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="bg-white p-4 shadow-md">
            <h1 className="text-2xl font-bold p-4 mb-4">Daftar Konferensi yang Berafiliasi/Kerjasama</h1>
            <div className="mb-8 p-4">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Tambah Seminar</Button>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 font-semibold text-gray-700">Judul Konferensi</th>
                  <th className="text-left py-2 px-4 font-semibold text-gray-700">Lokasi</th>
                  <th className="text-left py-2 px-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                  <div>
                    <div className="font-semibold">Konferensi 1: Judul Konferensi</div>
                    <div className="text-sm text-gray-500">29 Juli 2024- 31 Juli 2024</div>
                  </div>
                  </td>
                  <td className="py-2 px-4">Lokasi konferensi</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                    <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                  <div>
                    <div className="font-semibold">Konferensi 1: Judul Konferensi</div>
                    <div className="text-sm text-gray-500">29 Juli 2024- 31 Juli 2024</div>
                  </div>
                  </td>
                  <td className="py-2 px-4">Lokasi konferensi</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                    <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                  <div>
                    <div className="font-semibold">Konferensi 1: Judul Konferensi</div>
                    <div className="text-sm text-gray-500">29 Juli 2024- 31 Juli 2024</div>
                  </div>
                  </td>
                  <td className="py-2 px-4">Lokasi konferensi</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                    <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                  <div>
                    <div className="font-semibold">Konferensi 1: Judul Konferensi</div>
                    <div className="text-sm text-gray-500">29 Juli 2024- 31 Juli 2024</div>
                  </div>
                  </td>
                  <td className="py-2 px-4">Lokasi konferensi</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                    <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                  <div>
                    <div className="font-semibold">Konferensi 1: Judul Konferensi</div>
                    <div className="text-sm text-gray-500">29 Juli 2024- 31 Juli 2024</div>
                  </div>
                  </td>
                  <td className="py-2 px-4">Lokasi konferensi</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                    <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Pagination */}
            <Pagination className="p-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
