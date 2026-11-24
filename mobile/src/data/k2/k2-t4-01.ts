import { defineK2 } from './k2';

/** Kertas 2 Tingkatan 4 · Set 01 (Bank Soalan Titik Sejarah + Skema Jawapan Cadangan). */
export default defineK2({
  id: 'k2-t4-01',
  scope: 'T4',
  set: 1,
  questions: [
    {
      n: 1, section: 'A', chapterId: 't4-b2',
      title: 'Nasionalisme di Barat',
      stimulus:
        'Baca petikan berikut dengan teliti.\n> Nasionalisme ialah perasaan cinta yang mendalam terhadap bangsa dan negara. Di Barat, semangat ini berkembang melalui penentangan terhadap pemerintahan beraja yang menindas dan perjuangan menuntut kemerdekaan daripada kuasa asing. Revolusi Amerika pada tahun 1776 ialah contoh perjuangan rakyat yang menuntut hak mereka dihormati.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua maksud nasionalisme.', marks: 2, ref: '2.1 · hlm. 22',
          points: [
            'Perasaan cinta yang mendalam terhadap bangsa dan negara.',
            'Semangat kebangsaan dalam perjuangan menentang penjajahan.',
            'Semangat membela bangsa dan negara.',
            'Gerakan untuk mencapai kebebasan politik, ekonomi dan sosial daripada penguasaan orang asing.',
          ],
        },
        {
          label: '(b)', question: 'Jelaskan latar belakang dan kesan Revolusi Amerika.', marks: 4, ref: '2.2 · hlm. 25',
          points: [
            'Tiga belas tanah jajahan British menentang akta cukai seperti Akta Gula, Akta Setem dan Akta Teh.',
            'Rakyat melaungkan slogan "tiada cukai tanpa perwakilan" kerana tiada wakil Amerika dalam Parlimen British.',
            'Kongres yang diketuai George Washington mengisytiharkan perang terhadap British.',
            'Perisytiharan Kemerdekaan Amerika ditulis oleh Thomas Jefferson pada Julai 1776.',
            'Perisytiharan itu menegaskan hak rakyat membentuk kerajaan baharu jika hak kehidupan, kebebasan dan kebahagiaan tidak dijamin.',
            'Perang tamat pada tahun 1783 apabila British mengakui kemerdekaan Amerika.',
            'Lahir negara Amerika Syarikat yang mengamalkan sistem demokrasi.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '2.2',
          question: 'Pada pendapat anda, mengapakah idea kedaulatan rakyat yang diperjuangkan dalam nasionalisme Barat penting kepada negara kita pada hari ini?',
          points: [
            'Rakyat berhak memilih pemimpin dan kerajaan melalui pilihan raya.',
            'Kerajaan bertanggungjawab kepada rakyat dan perlu menunaikan amanah.',
            'Hak asasi rakyat dijamin dalam batas undang-undang.',
            'Mengelakkan pemerintahan yang menindas atau berkuasa mutlak.',
            'Mendorong rakyat menimba ilmu dan berfikiran kritis terhadap isu negara.',
            'Memupuk rasa cinta dan tanggungjawab rakyat terhadap negara.',
          ],
        },
      ],
    },
    {
      n: 2, section: 'A', chapterId: 't4-b4',
      title: 'British Military Administration dan Malayan Union',
      stimulus:
        'Poster berikut berkaitan dengan keadaan negara kita selepas Perang Dunia Kedua.\n> BRITISH MILITARY ADMINISTRATION (BMA)\n> Bermula 12 September 1945, di bawah arahan Lord Mountbatten\n> "Mengembalikan kestabilan dan memulihkan kepercayaan rakyat"',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua usaha BMA untuk memulihkan keadaan negara.', marks: 2, ref: '4.1 · hlm. 94, 95',
          points: [
            'Membubarkan MPAJA pada 1 Disember 1945.',
            'Mengarahkan semua senjata dikembalikan.',
            'Mengambil alih pentadbiran negara.',
            'Memulihkan ladang getah dan lombong bijih timah.',
            'Memulihkan prasarana dan kemudahan kesihatan.',
          ],
        },
        {
          label: '(b)', question: 'Nyatakan dua masalah yang gagal diatasi oleh BMA.', marks: 2, ref: '4.1 · hlm. 94, 95',
          points: [
            'Kekurangan makanan dan ubat-ubatan.',
            'Penyakit beri-beri dan kebuluran.',
            'Menyorok barang dan pasar gelap.',
            'Rasuah dan peras ugut.',
            'Jenayah, kongsi gelap dan ketegangan kaum.',
            'Gagal mengumpul semula senjata.',
          ],
        },
        {
          label: '(c)', question: 'Nyatakan dua tujuan British memperkenalkan Malayan Union.', marks: 2, ref: '4.2 · hlm. 96',
          points: [
            'Melicinkan sistem pentadbiran.',
            'Meningkatkan pelaburan ekonomi.',
            'Mengukuhkan pertahanan.',
            'Mengekalkan orang asing sebagai tenaga kerja.',
          ],
        },
        {
          label: '(d)', kbat: true, marks: 4, ref: '4.2',
          question: 'Kegagalan BMA dan pengenalan Malayan Union mengajar rakyat supaya berwaspada terhadap kuasa asing. Pada pendapat anda, apakah langkah untuk memastikan kedaulatan negara terus terpelihara?',
          points: [
            'Setia kepada raja dan negara.',
            'Bersatu padu tanpa mengira kaum dan agama.',
            'Memahami sejarah dan Perlembagaan Persekutuan.',
            'Peka terhadap ancaman dan pengaruh luar yang merugikan negara.',
            'Menyokong pemimpin yang berwibawa dan dasar kerajaan.',
            'Mengukuhkan ekonomi supaya tidak bergantung kepada kuasa asing.',
            'Menyertai pasukan keselamatan atau pasukan sukarela.',
          ],
        },
      ],
    },
    {
      n: 3, section: 'A', chapterId: 't4-b6',
      title: 'Ancaman komunis dan Darurat',
      stimulus:
        'Infografik berikut berkaitan dengan ancaman komunis di negara kita.\n| Tarikh | Peristiwa\n| 30 April 1930 | Parti Komunis Malaya (PKM) ditubuhkan di Kuala Pilah\n| 16 Jun 1948 | Tiga pengurus ladang Eropah dibunuh di Sungai Siput, Perak\n| 18 Jun 1948 | Darurat dikuatkuasakan ke seluruh Tanah Melayu',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua cara pengaruh komunis memasuki negara kita.', marks: 2, ref: '6.1 · hlm. 146',
          points: [
            'Dibawa dari China melalui cawangan Parti Kuomintang pada awal 1920-an.',
            'Main School bergerak dalam kalangan orang Hailam di bawah Parti Komunis China.',
            'Comintern mengarahkan penubuhan Parti Komunis Nanyang (1928).',
            'Pemimpin komunis Indonesia seperti Tan Malaka dan Alimin menyebarkan fahaman komunis.',
          ],
        },
        {
          label: '(b)', question: 'Jelaskan tindakan komunis yang mengancam negara semasa Darurat.', marks: 4, ref: '6.2 · hlm. 150, 151',
          points: [
            'Melumpuhkan ekonomi dengan menyerang lombong bijih timah dan ladang getah.',
            'Merosakkan infrastruktur seperti landasan kereta api, telefon, telegraf dan paip air.',
            'Mengugut, menculik dan membunuh penduduk yang enggan bekerjasama.',
            'Membaling bom tangan di Sheum Circus, Kampar pada tahun 1949.',
            'Menyerang balai polis seperti Balai Polis Bukit Kepong pada tahun 1950.',
            'Membunuh Pesuruhjaya Tinggi Sir Henry Gurney pada 6 Oktober 1951.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '6.2',
          question: 'Pada pendapat anda, mengapakah rakyat perlu menghargai jasa anggota keselamatan yang berkorban semasa Darurat?',
          points: [
            'Mereka mempertahankan kedaulatan negara daripada ancaman komunis.',
            'Mereka sanggup mengorbankan nyawa demi keselamatan rakyat.',
            'Keamanan yang dinikmati hari ini ialah hasil pengorbanan mereka.',
            'Pengorbanan mereka menjadi contoh semangat patriotik.',
            'Menyedarkan generasi muda tentang bahaya fahaman ekstrem.',
            'Memupuk rasa terhutang budi dan taat setia kepada negara.',
          ],
        },
      ],
    },
    {
      n: 4, section: 'A', chapterId: 't4-b8',
      title: 'Perkembangan pilihan raya',
      stimulus:
        'Jadual berikut menunjukkan perkembangan pilihan raya di Persekutuan Tanah Melayu.\n| Tahun | Pilihan raya | Catatan\n| 1951 | Majlis Perbandaran George Town | Pilihan raya majlis perbandaran pertama\n| 1952 | Majlis Perbandaran Kuala Lumpur | UMNO-MCA memenangi 9 daripada 12 kerusi\n| 1954 | Pilihan raya negeri | Perikatan memenangi 226 daripada 268 kerusi\n| 1955 | Majlis Perundangan Persekutuan | Perikatan memenangi 51 daripada 52 kerusi',
      parts: [
        {
          label: '(a)', question: 'Nyatakan tiga kepentingan pilihan raya peringkat awal.', marks: 3, ref: '8.1 · hlm. 197, 203',
          points: [
            'Menyedarkan rakyat tentang amalan demokrasi.',
            'Memberikan pengalaman mengendalikan pilihan raya pada peringkat Persekutuan.',
            'Menjadi persediaan ke arah berkerajaan sendiri.',
            'Menunjukkan penerimaan masyarakat terhadap kerjasama antara kaum dalam politik.',
          ],
        },
        {
          label: '(b)', question: 'Nyatakan tiga syarat untuk menjadi pengundi dalam Pilihan Raya Majlis Perundangan Persekutuan 1955.', marks: 3, ref: '8.2 · hlm. 200',
          points: [
            'Warganegara Persekutuan Tanah Melayu.',
            'Berumur 21 tahun ke atas.',
            'Tinggal di Persekutuan dalam tempoh enam bulan sebelum 17 Oktober 1954 (28 Oktober 1954 bagi Terengganu).',
            'Mendaftar sebagai pengundi dalam tempoh pendaftaran yang bermula pada 18 Oktober 1954.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '8.2',
          question: 'Kemenangan besar Parti Perikatan dalam pilihan raya 1955 membuktikan kejayaan kerjasama kaum. Bagaimanakah semangat kerjasama tersebut boleh diamalkan oleh pelajar pada hari ini?',
          points: [
            'Bekerjasama dengan rakan pelbagai kaum dalam aktiviti kokurikulum.',
            'Menghormati agama, adat dan budaya rakan.',
            'Bertolak ansur ketika berbeza pendapat.',
            'Berkomunikasi dalam bahasa kebangsaan.',
            'Menyertai program perpaduan di sekolah dan komuniti.',
            'Mengelakkan perbuatan atau kata-kata yang menyentuh sensitiviti kaum.',
          ],
        },
      ],
    },
    {
      n: 5, section: 'B', chapterId: 't4-b3',
      title: 'Nasionalisme dan perang dunia',
      stimulus:
        'Carta aliran berikut berkaitan dengan nasionalisme di negara kita dan perang dunia.\n> Gerakan Islah dan Pan-Islamisme\n> Langkah British membendung pengaruh Islam\n> Perang Dunia Pertama (1914 hingga 1918)\n> Perang Dunia Kedua (1939 hingga 1945)',
      parts: [
        {
          label: '(a)', question: 'Jelaskan langkah British membendung pengaruh Islam dari Timur Tengah sebelum Perang Dunia.', marks: 4, ref: '3.1 · hlm. 52',
          points: [
            'British memperkenalkan Enakmen Undang-Undang Islam 1904 dengan persetujuan Raja-raja Melayu.',
            'Sesiapa yang mencetak dan mengedarkan tulisan tentang agama dan politik Islam tanpa izin sultan boleh dipenjarakan.',
            'Menubuhkan Jabatan Siasatan Jenayah (Criminal Intelligence Department).',
            'Menubuhkan Biro Siasatan Politik (Political Intelligence Bureau) untuk mengawal gerakan Islah.',
            'Memperkenalkan Publishing and Book Enactment 1915.',
            'Memperkenalkan The Seditious Publication (Prohibition) Enactment 1919.',
          ],
        },
        {
          label: '(b)', question: 'Huraikan faktor tercetusnya Perang Dunia Pertama dan kesannya terhadap negara kita.', marks: 8, ref: '3.2 · hlm. 54, 57',
          points: [
            'Persaingan kuasa imperialis merebut tanah jajahan untuk mendapatkan bahan mentah dan pasaran.',
            'Revolusi Industri mendorong keperluan bahan mentah seperti arang batu, petroleum dan bijih timah.',
            'Pembentukan pakatan ketenteraan Kuasa Tengah dan Pakatan Bertiga menyebabkan politik Eropah tidak stabil.',
            'Berlaku perlumbaan senjata moden.',
            'Krisis rantau Balkan akibat permusuhan Austria-Hungary dengan Serbia.',
            'Kemuncaknya ialah pembunuhan Archduke Ferdinand dan isterinya oleh seorang pemuda Serbia.',
            'Raja-raja Melayu diminta menandatangani perisytiharan perang yang menyokong British.',
            'Undang-undang perang seperti Trading With Enemy Enactment 1914 diluluskan.',
            'Pesuruhjaya Tinggi diberi kuasa meletakkan negeri Melayu di bawah undang-undang tentera.',
            'Hasil bijih timah dan getah digunakan untuk membiayai operasi perang British.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '3.3',
          question: 'Kemenangan Kuasa Bersekutu dalam Perang Dunia Kedua di Eropah menunjukkan kepentingan kerjasama dan kebijaksanaan merancang strategi. Pada pendapat anda, bagaimanakah semangat kerjasama dapat membantu negara menghadapi cabaran pada hari ini?',
          points: [
            'Kerjasama antara negara membolehkan ancaman keselamatan seperti keganasan dan jenayah rentas sempadan ditangani.',
            'Kerjasama serantau seperti ASEAN mewujudkan keamanan dan kestabilan.',
            'Pemimpin yang bermuafakat dapat merancang strategi pembangunan yang berkesan.',
            'Rakyat pelbagai kaum yang bersatu mampu menghadapi krisis seperti bencana alam dan wabak.',
            'Perkongsian kepakaran dan teknologi mempercepat kemajuan negara.',
            'Kerjasama mengelakkan konflik dan pertumpahan darah.',
            'Kesimpulannya, kerjasama dan muafakat menjadi kekuatan negara menghadapi cabaran semasa.',
          ],
        },
      ],
    },
    {
      n: 6, section: 'B', chapterId: 't4-b5',
      title: 'Penubuhan Persekutuan Tanah Melayu 1948',
      stimulus:
        'Garis masa berikut berkaitan dengan penubuhan Persekutuan Tanah Melayu.\n| Tarikh | Peristiwa\n| 1 April 1946 | Malayan Union\n| 25 Julai 1946 | Jawatankuasa Kerja\n| 21 Januari 1948 | Perjanjian ditandatangani\n| 1 Februari 1948 | Persekutuan Tanah Melayu',
      parts: [
        {
          label: '(a)', question: 'Jelaskan penubuhan dan cadangan Jawatankuasa Kerja.', marks: 6, ref: '5.1 · hlm. 126, 127',
          points: [
            'Jawatankuasa Kerja ditubuhkan pada 25 Julai 1946 untuk membincangkan asas Perjanjian Persekutuan Tanah Melayu.',
            'Dianggotai wakil Raja-raja Melayu, wakil UMNO dan pegawai kanan British.',
            'Mencadangkan penyatuan semua negeri Melayu dan dua buah Negeri-negeri Selat dalam satu pentadbiran.',
            'Mencadangkan kedudukan dan kedaulatan Raja-raja Melayu dipulihkan.',
            'Mencadangkan kedudukan istimewa orang Melayu dan kepentingan sah kaum lain dijaga.',
            'Mencadangkan Dewan Perundangan Negeri ditubuhkan bagi setiap negeri.',
            'Mencadangkan syarat kewarganegaraan yang ketat.',
          ],
        },
        {
          label: '(b)', question: 'Jelaskan faktor penubuhan Persekutuan Tanah Melayu 1948.', marks: 6, ref: '5.2 · hlm. 132, 133',
          points: [
            'Penentangan hebat orang Melayu terhadap Malayan Union.',
            'Gammans dan Rees Williams melaporkan bantahan kepada Parlimen British dan memberi amaran akan berlaku huru-hara.',
            'Raja-raja Melayu mencadangkan persekutuan bertaraf naungan semasa bertemu Malcolm MacDonald dan Sir Edward Gent pada 27 Mei 1946.',
            'Surat Sultan Perak yang menyatakan baginda menandatangani perjanjian kerana dipaksa dibacakan di Parlimen British.',
            'Sokongan pentadbir British seperti Sir Edward Gent dan Malcolm MacDonald.',
            'Konsep persekutuan dapat mewujudkan keamanan, kestabilan politik dan menarik pelaburan.',
            'British perlu melaksanakan dekolonisasi seperti saranan Piagam Atlantik.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '5.3',
          question: 'Persekutuan Tanah Melayu 1948 dibentuk melalui perundingan dan tolak ansur. Pada pendapat anda, mengapakah rakyat perlu mematuhi Perlembagaan Persekutuan pada hari ini?',
          points: [
            'Perlembagaan ialah undang-undang tertinggi yang menjadi asas pemerintahan negara.',
            'Mematuhi perlembagaan menjamin kestabilan politik dan keamanan.',
            'Perlembagaan melindungi kedudukan Raja-raja dan institusi negara.',
            'Perlembagaan menjamin hak dan kebebasan asasi semua kaum.',
            'Kepatuhan rakyat mengelakkan konflik dan perpecahan kaum.',
            'Perlembagaan memelihara kedaulatan negara daripada campur tangan asing.',
            'Kesimpulannya, mematuhi perlembagaan ialah tanggungjawab setiap warganegara demi kesejahteraan negara.',
          ],
        },
      ],
    },
    {
      n: 7, section: 'B', chapterId: 't4-b7',
      title: 'Usaha ke arah kemerdekaan',
      stimulus:
        'Situasi: Dalam satu forum sekolah, para pelajar membincangkan usaha pemimpin terdahulu menyatukan rakyat pelbagai kaum ke arah kemerdekaan.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan idea negara merdeka yang diperjuangkan oleh pertubuhan di negara kita.', marks: 4, ref: '7.1 · hlm. 172, 173',
          points: [
            'KMM memperjuangkan konsep Melayu Raya.',
            'API memperjuangkan kemerdekaan dengan slogan "Merdeka dengan Darah".',
            'Hizbul Muslimin mahu Tanah Melayu merdeka sebagai negara Islam.',
            'MCA mahu Tanah Melayu menjadi negara berdemokrasi penuh melalui kerjasama semua kaum.',
            'MIC memperjuangkan kewarganegaraan tunggal bagi mereka yang menganggap Tanah Melayu tanah air.',
            'IMP memperjuangkan idea "Tanah Melayu untuk Malayan".',
          ],
        },
        {
          label: '(b)', question: 'Huraikan peranan Jawatankuasa Hubungan Antara Kaum (CLC) ke arah perpaduan.', marks: 8, ref: '7.2 · hlm. 174, 175',
          points: [
            'CLC ditubuhkan pada Januari 1949 dengan menghimpunkan pemimpin pelbagai kaum.',
            'Moto CLC ialah "Kesamaan dan Keadilan untuk Penduduk Tanah Melayu".',
            'Dipengerusikan oleh E.E.C. Thuraisingham dengan Malcolm MacDonald sebagai penasihat.',
            'Mengkaji hubungan kaum secara mendalam.',
            'Mencadangkan pengalaman pilihan raya secara berperingkat sebagai persediaan berkerajaan sendiri.',
            'Memperakukan kedudukan istimewa orang Melayu dan mengiktiraf kepentingan sah kaum lain.',
            'Mencadangkan agensi untuk memajukan ekonomi orang Melayu, lalu RIDA ditubuhkan pada tahun 1950.',
            'Syarat kewarganegaraan bukan Melayu dilonggarkan untuk memupuk taat setia.',
            'Mencadangkan sistem pendidikan yang seragam.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '7.3',
          question: 'Sistem Ahli memberi peluang kepada pemimpin tempatan pelbagai kaum untuk mentadbir. Pada pendapat anda, apakah ciri pemimpin yang diperlukan oleh negara kita pada hari ini?',
          points: [
            'Berintegriti dan amanah dalam menjalankan tugas.',
            'Berpengetahuan dan berkemahiran dalam pentadbiran.',
            'Adil kepada semua kaum tanpa pilih kasih.',
            'Bertanggungjawab dan sanggup berkorban untuk rakyat.',
            'Berwawasan dan mampu merancang masa depan negara.',
            'Mendengar dan menyelesaikan masalah rakyat.',
            'Kesimpulannya, pemimpin yang berwibawa menjamin kestabilan dan kemajuan negara.',
          ],
        },
      ],
    },
    {
      n: 8, section: 'B', chapterId: 't4-b9',
      title: 'Rundingan kemerdekaan dan Suruhanjaya Reid',
      stimulus:
        'Baca petikan berikut.\n> Pada 1 Januari 1956, rombongan kemerdekaan yang terdiri daripada wakil Raja-raja Melayu dan Parti Perikatan berlepas ke London. Rundingan di Lancaster House membuka jalan kepada penggubalan perlembagaan bagi Persekutuan Tanah Melayu yang merdeka.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan faktor yang mendorong rundingan kemerdekaan.', marks: 4, ref: '9.1 · hlm. 216',
          points: [
            'Pengaruh luar seperti kemerdekaan Mesir, India, Burma dan Filipina.',
            'Jaminan British untuk membantu Persekutuan Tanah Melayu berkerajaan sendiri secepat mungkin.',
            'Pilihan Raya Umum 1955 menjadi asas pembentukan perlembagaan.',
            'Rundingan wakil Raja-raja Melayu dengan Parti Perikatan.',
            'Misi ke London disokong pelbagai pihak tanpa mengira ideologi.',
          ],
        },
        {
          label: '(b)(i)', question: 'Nyatakan anggota Suruhanjaya Reid dan negara asal mereka.', marks: 4, ref: '9.2 · hlm. 221',
          points: [
            'Lord Reid (Britain) sebagai pengerusi.',
            'Sir William Ivor Jennings (Britain).',
            'Sir William McKell (Australia).',
            'Hakim B. Malik (India).',
            'Hakim Abdul Hamid (Pakistan).',
          ],
        },
        {
          label: '(b)(ii)', question: 'Jelaskan terma rujukan Suruhanjaya Reid.', marks: 4, ref: '9.2 · hlm. 220',
          points: [
            'Mencadangkan perlembagaan bagi Persekutuan sebagai unit tunggal, bebas dan berkerajaan sendiri dalam Komanwel.',
            'Berdasarkan Demokrasi Berparlimen dengan dua Dewan Perundangan.',
            'Mewujudkan kerajaan pusat yang kuat dengan kerajaan negeri mempunyai autonomi tertentu.',
            'Melindungi kedudukan Raja-raja Melayu sebagai Raja Berperlembagaan.',
            'Mencadangkan jawatan ketua negara, iaitu Yang di-Pertuan Besar.',
            'Mengadakan satu bentuk kewarganegaraan bagi Persekutuan.',
            'Menjaga kedudukan istimewa orang Melayu dan kepentingan sah kaum lain.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '9.3',
          question: 'Penggubalan Perlembagaan Persekutuan Tanah Melayu berjaya kerana adanya toleransi antara kaum. Pada pendapat anda, bagaimanakah semangat toleransi dapat dikekalkan dalam masyarakat hari ini?',
          points: [
            'Menghormati kepercayaan, adat dan budaya kaum lain.',
            'Menyelesaikan perbezaan pendapat melalui perbincangan dan rundingan.',
            'Menghayati prinsip Rukun Negara dan mematuhi perlembagaan.',
            'Mengamalkan sikap saling membantu dalam kehidupan bermasyarakat.',
            'Menyertai aktiviti kemasyarakatan yang melibatkan pelbagai kaum.',
            'Mengelakkan penyebaran berita palsu yang menyentuh isu sensitif.',
            'Kesimpulannya, toleransi ialah asas keharmonian dan kestabilan negara.',
          ],
        },
      ],
    },
    {
      n: 9, section: 'B', chapterId: 't4-b10',
      title: 'Pemasyhuran kemerdekaan',
      stimulus: '> MERDEKA! MERDEKA! MERDEKA!\n> 31 Ogos 1957, Stadium Merdeka, Kuala Lumpur',
      parts: [
        {
          label: '(a)', question: 'Nyatakan maksud kemerdekaan.', marks: 4, ref: '10.1 · hlm. 234, 251',
          points: [
            'Bebas daripada cengkaman kuasa asing.',
            'Bebas menentukan pemerintahan dan hala tuju negara.',
            'Menurut Kamus Dewan, kemerdekaan ialah bebas daripada penjajahan, kurungan atau naungan.',
            'Negara merdeka ialah negara berdaulat yang mempunyai kuasa tertinggi.',
            'Kemerdekaan ialah rentetan perjuangan yang panjang.',
          ],
        },
        {
          label: '(b)', question: 'Huraikan persediaan yang dibuat untuk menyambut pemasyhuran kemerdekaan negara.', marks: 8, ref: '10.2 · hlm. 236, 252',
          points: [
            'Persediaan diatur melalui Jawatankuasa Persediaan Fizikal dan Jawatankuasa Sambutan.',
            'Pada 8 Julai 1957, Tunku Abdul Rahman berucap melalui Radio Malaya menyeru rakyat meraikan Hari Kemerdekaan.',
            'Stadium Merdeka direka oleh S.E. Jewkes dan siap dalam masa enam bulan.',
            'Stadium Merdeka mempunyai 22 ribu tempat duduk.',
            'Lagu Negaraku yang berasal daripada lagu Terang Bulan dipilih sebagai lagu kebangsaan.',
            'Penggunaan Jata Negara diperkenankan oleh Raja-raja Melayu pada 30 Mei 1957.',
            'Bunga raya dipilih sebagai bunga kebangsaan.',
            'Bangunan, jalan raya dan Padang Kelab Selangor dihiasi lampu, dan 75 ribu bendera ditempah khas.',
            'Kursus protokol selama tiga hari diadakan untuk 300 orang pegawai kerajaan.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '10.3',
          question: 'Pada pendapat anda, bagaimanakah generasi muda dapat mengisi kemerdekaan negara?',
          points: [
            'Menuntut ilmu setinggi mungkin untuk menyumbang kepada pembangunan negara.',
            'Menghayati sejarah perjuangan tokoh kemerdekaan.',
            'Menjaga perpaduan dan keharmonian kaum.',
            'Mematuhi undang-undang dan menghormati institusi negara.',
            'Menjadi warganegara yang berdisiplin, berakhlak mulia dan berdaya saing.',
            'Mengharumkan nama negara dalam bidang akademik, sukan dan inovasi.',
            'Kesimpulannya, generasi muda bertanggungjawab mempertahankan dan memajukan negara yang merdeka.',
          ],
        },
      ],
    },
  ],
});
