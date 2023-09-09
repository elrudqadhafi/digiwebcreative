# Wep-Pro tech

Ini adalah proyek yang menggunakan React dengan Vite. Proyek ini dilengkapi dengan dukungan HMR (Hot Module Replacement) dan aturan ESLint untuk memastikan kualitas kode.

### Deskripsi

Ini adalah proyek yang dibuat bertujuan untuk menawarkan jasa pembuatan website kepada pelaku pengembang bisnis ataupun personal yang ingin membangun branding digital.

### Script

`"dev": "vite",` <br />
`"build": "vite build",` <br />
`"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",` <br />
`"preview": "vite preview"`

Anda dapat menjalankan skrip-skrip ini menggunakan perintah `npm run` diikuti dengan nama skrip.

## Installation

Buat Sebuah Folder Di Komputer Kamu, Lalu buka terminal didalam folder tersebut.
Lalu lakukan : <br />
`npm create vite@latest web-pro-tech -- --template react` <br />
`cd nama-aplikasi` <br />
`code .` - untuk membuka text editor (Vs Code)

Install Dependencies Lainnya : <br />
`npm install react-router-dom` <br />
`npm install react-bootstrap bootstrap` <br />
`npm install animate.css --save` <br />
`npm install --save aos@next`

Masukkan ini kedalam File main.jsx Kamu : <br />
`import 'bootstrap/dist/css/bootstrap.min.css';` <br />
`import 'animate.css';` <br />
`import AOS from 'aos';import 'aos/dist/aos.css'; AOS.init();`

## Cara penggunaan

`npm install`

- perintah yang digunakan dalam lingkungan Node.js untuk menginstal paket atau modul JavaScript dari registry paket npm (Node Package Manager).

`npm Run Dev`

- akan memulai server pengembangan lokal di http://localhost:5173/ yang dapat Anda gunakan untuk pengujian dan pengembangan.
- Skrip ini akan memulai server pengembangan menggunakan Vite.

`npm run build`

- langkah untuk mengoptimalkan, menggabungkan, dan memproses kode sumber agar lebih efisien dan siap untuk digunakan dalam lingkungan produksi. Ini mengurangi ukuran berkas, mempercepat waktu pemuatan, dan meningkatkan kinerja aplikasi. Proses ini juga memungkinkan pemisahan kode pengembangan dan produksi serta manajemen dependensi yang lebih baik.

`npm run lint`

- Skrip ini menjalankan ESLint untuk menganalisis dan memeriksa lint pada file JavaScript dan JSX. Ini menerapkan standar penulisan kode dan mendeteksi potensi masalah dalam kode Anda. Opsi yang diberikan pada perintah ini menentukan untuk melakukan lint pada file dengan ekstensi .js dan .jsx, melaporkan direktif penonaktifan yang tidak digunakan, dan menyuppress peringatan.

`npm run preview`

- Skrip ini akan memulai server pratinjau menggunakan Vite. Ini memungkinkan Anda untuk melihat pratinjau build produksi dari proyek Anda secara lokal sebelum dideploy.

## Tech

Aplikasi yang dibangun menggunakan :

- [Visual Studio Code](https://code.visualstudio.com) - Adalah editor kode ringan, cepat, dan dapat diperluas yang digunakan untuk menulis, mengedit, dan mengelola kode sumber dalam berbagai bahasa pemrograman. Ia juga mendukung debugging, integrasi Git, dan memiliki berbagai ekstensi untuk meningkatkan fungsionalitasnya.
- [Google Chrome](https://www.google.com) - Adalah browser web cepat yang tersedia tanpa biaya yang merupakan tools penting dalam membuat sebuah halaman website.
- [React Js](https://react.dev) - Adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna dalam aplikasi web. Ia fokus pada komponen yang dapat diatur ulang, memudahkan pengembangan antarmuka interaktif dan efisien.
- [Vite Js](https://vitejs.dev) - Adalah alat pengembangan web yang cepat untuk membangun aplikasi modern menggunakan JavaScript dan TypeScript. Ia menggunakan ESM (ECMAScript Modules) untuk performa optimal dan waktu pengembangan yang singkat.
- [React Bootstrap](https://react-bootstrap.netlify.app) - Adalah pustaka komponen UI yang memadukan kerangka kerja React dengan gaya desain dan komponen visual dari Bootstrap, memudahkan pengembangan antarmuka web yang responsif dan menarik secara visual.
- [React-Router-Dom](https://reactrouter.com) - Adalah pustaka navigasi yang digunakan dalam aplikasi React untuk mengelola aliran halaman dan URL, memungkinkan pengembangan aplikasi web dengan berbagai tampilan halaman yang responsif dan mudah dinavigasi.
- [Animate CSS](https://animate.style) - Adalah koleksi animasi CSS yang siap pakai untuk memberikan efek visual dan transisi menarik pada elemen-elemen di situs web atau aplikasi. Ini memungkinkan Anda dengan mudah menambahkan animasi dengan hanya menambahkan kelas CSS pada elemen yang ingin dianimasikan.
- [Animate On Scroll](https://michalsnik.github.io/aos) - Adalah pustaka JavaScript ringan yang memberikan efek animasi saat elemen muncul pada saat digulir pada halaman web. Ini menambahkan tampilan menarik dan dinamis saat pengguna berinteraksi dengan konten yang muncul saat mereka menggulir ke bawah.

## Requirement

- [Node.js](https://nodejs.org/) v18.16.0 ot later.
- [React Bootstrap](https://react-bootstrap.netlify.app) v2.9.0-beta.1 (Bootstrap 5) or later.
