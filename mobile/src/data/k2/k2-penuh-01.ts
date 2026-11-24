import { defineK2 } from './k2';

/** Kertas 2 Format Penuh · Set 01 (Bank Soalan Titik Sejarah + Skema Jawapan Cadangan). */
export default defineK2({
  id: 'k2-penuh-01',
  scope: 'T4T5',
  set: 1,
  questions: [
    {
      n: 1, section: 'A', chapterId: 't4-b1',
      title: 'Ciri negara bangsa kerajaan Alam Melayu',
      stimulus:
        'Baca petikan berikut.\n> Kerajaan Alam Melayu seperti Funan, Champa, Kedah Tua, Gangga Nagara, Srivijaya, Angkor dan Majapahit memperlihatkan ciri negara bangsa yang berkembang mengikut peredaran masa dan keperluan. Ciri tersebut kemudiannya diwarisi dan diperkukuh oleh Kesultanan Melayu Melaka.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua contoh yang membuktikan ciri negara bangsa dalam kerajaan Alam Melayu.', marks: 2, ref: '1.1 · hlm. 4',
          points: [
            'Raja Champa dianggap suci dan dikaitkan dengan Dewa Siva.',
            'Kerajaan Majapahit mengamalkan undang-undang Kutara Manawa.',
            'Wilayah pengaruh Funan meliputi Sungai Mekong, Teluk Cam Ranh, selatan Myanmar dan Segenting Kra.',
            'Rakyat Srivijaya membuktikan kesetiaan melalui upacara persetiaan dan meminum air sumpah.',
          ],
        },
        {
          label: '(b)', question: 'Jelaskan bukti kedaulatan Kesultanan Melayu Melaka.', marks: 4, ref: '1.2 · hlm. 6',
          points: [
            'Kedaulatan ialah lambang kekuasaan tertinggi sultan.',
            'Sultan mempunyai hak mutlak untuk mengawal rakyat dan wilayah.',
            'Kedaulatan Melaka diakui oleh kerajaan lain.',
            'Melaka bebas daripada campur tangan kuasa asing.',
            'Kedaulatan Melaka diiktiraf oleh kerajaan Dinasti Ming.',
            'Dinasti Ming menghantar utusan seperti Laksamana Cheng Ho untuk mengeratkan hubungan dengan Melaka.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '1.1',
          question: 'Ciri negara bangsa kerajaan Alam Melayu berkembang mengikut peredaran masa dan keperluan. Pada pendapat anda, mengapakah sesebuah negara perlu menyesuaikan diri dengan perubahan zaman?',
          points: [
            'Negara kekal relevan dan tidak ketinggalan.',
            'Negara mampu bersaing di peringkat antarabangsa.',
            'Keperluan rakyat yang berubah dapat dipenuhi.',
            'Kemajuan teknologi dapat dimanfaatkan.',
            'Cabaran baharu dapat ditangani dengan berkesan.',
            'Kelangsungan negara terjamin.',
          ],
        },
      ],
    },
    {
      n: 2, section: 'A', chapterId: 't4-b10',
      title: 'Pengertian dan sambutan kemerdekaan',
      stimulus: '> MERDEKA!\n> 31 Ogos 1957 bersamaan 5 Safar 1377 Hijrah',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua pandangan Soekarno tentang kemerdekaan.', marks: 2, ref: '10.1 · hlm. 234, 235',
          points: [
            'Kemerdekaan bererti bebas selama-lamanya.',
            'Kemerdekaan merangkumi kebebasan untuk berfikir.',
            'Kemerdekaan bermaksud bebas bertindak daripada politik penindasan dan rejim autokratik.',
            'Rakyat yang dijajah menganggap hilangnya dominasi asing sebagai pembebasan.',
            'Kemerdekaan membentuk masyarakat baharu yang demokratik tanpa kelas dan kasta.',
          ],
        },
        {
          label: '(b)', question: 'Nyatakan pandangan Tun Temenggong Jugah anak Barieng dan Tun Fuad Stephens tentang kemerdekaan.', marks: 2, ref: '10.1 · hlm. 234, 235',
          points: [
            'Menurut Tun Jugah, keselamatan negeri akan lebih terjamin dan kuat.',
            'Menurut Tun Jugah, penduduk peribumi Sarawak sanggup berkorban mempertahankan negara.',
            'Menurut Tun Jugah, kemerdekaan membantu mengatasi ancaman komunis.',
            'Menurut Tun Fuad Stephens, keselamatan sosial Borneo Utara dan penduduk peribumi lebih terjamin.',
            'Menurut Tun Fuad Stephens, pembangunan pesat mampu menaikkan semangat baharu masyarakat.',
          ],
        },
        {
          label: '(c)', question: 'Nyatakan dua pengumuman melalui Radio Malaya menjelang kemerdekaan.', marks: 2, ref: '10.2 · hlm. 232, 236',
          points: [
            'Pada 8 Julai 1957, Tunku Abdul Rahman menyeru rakyat meraikan Hari Kemerdekaan dengan meriah.',
            "Pada 3 Ogos 1957, Dato' Abdul Razak Hussein memaklumkan atur cara sambutan kemerdekaan.",
            'Tumpuan upacara ialah di Padang Kelab Selangor dan Stadium Merdeka.',
          ],
        },
        {
          label: '(d)', kbat: true, marks: 4, ref: '10.2',
          question: 'Jawatankuasa Derma Perayaan Kemerdekaan ditubuhkan untuk mengutip derma bagi membantu perbelanjaan sambutan merdeka. Pada pendapat anda, mengapakah semangat gotong-royong penting untuk menjayakan sesuatu acara negara?',
          points: [
            'Meringankan beban kos penganjuran.',
            'Kerja dapat disiapkan dengan lebih cepat.',
            'Mengeratkan hubungan dalam kalangan rakyat.',
            'Menyemai rasa kepunyaan terhadap acara negara.',
            'Memupuk perpaduan rakyat pelbagai kaum.',
            'Menonjolkan imej negara yang bersatu padu.',
          ],
        },
      ],
    },
    {
      n: 3, section: 'A', chapterId: 't5-b1',
      title: 'Kedaulatan negara',
      stimulus:
        'Infografik berikut berkaitan dengan kedaulatan negara.\n| Asal istilah | Perkataan\n| Bahasa Yunani | supernuus atau superanus\n| Bahasa Arab | daulah\n| Bahasa Melayu | daulat\n| Tarikh | Peristiwa\n| 31 Ogos 1957 | Kemerdekaan Tanah Melayu\n| 17 September 1957 | Anggota ke-82 PBB\n| 16 September 1963 | Pembentukan Malaysia',
      parts: [
        {
          label: '(a)', question: 'Nyatakan dua jenis kedaulatan.', marks: 2, ref: '1.1 · hlm. 6, 7',
          points: ['Kedaulatan tradisional.', 'Kedaulatan moden.', 'Kedaulatan undang-undang.', 'Kedaulatan antarabangsa.'],
        },
        {
          label: '(b)', question: 'Jelaskan pemerintahan dan sempadan sebagai ciri negara yang berdaulat.', marks: 4, ref: '1.2 · hlm. 8, 10',
          points: [
            'Pemerintahan diwujudkan untuk menjaga kestabilan politik, keamanan, pertahanan dan ekonomi.',
            'Malaysia mengamalkan sistem Raja Berperlembagaan dan Demokrasi Berparlimen.',
            'Ketua Utama Negara ialah Yang di-Pertuan Agong, manakala Ketua Kerajaan ialah Perdana Menteri yang dibantu oleh Jemaah Menteri.',
            'Sempadan ialah garis pemisah antara negeri atau negara.',
            'Malaysia berkongsi sempadan darat, air dan udara dengan Singapura, Thailand, Indonesia, Brunei dan Filipina.',
            'Sempadan Malaysia diakui oleh masyarakat antarabangsa, khasnya PBB.',
            'Penetapan sempadan memudahkan urusan pemerintahan, pentadbiran, pertahanan dan pembangunan ekonomi.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '1.1',
          question: 'Kedaulatan undang-undang menjadi prinsip keempat dalam Rukun Negara. Pada pendapat anda, mengapakah rakyat perlu mematuhi undang-undang negara?',
          points: [
            'Menjamin keadilan dalam kehidupan bermasyarakat.',
            'Mewujudkan negara yang aman dan stabil.',
            'Melindungi hak setiap individu.',
            'Mengurangkan kadar jenayah.',
            'Membina budaya hormat-menghormati.',
            'Meningkatkan imej negara di mata dunia.',
          ],
        },
      ],
    },
    {
      n: 4, section: 'A', chapterId: 't5-b10',
      title: 'Tuntutan wilayah dan kewangan Islam',
      stimulus:
        'Jadual berikut menunjukkan tuntutan wilayah yang melibatkan Malaysia.\n| Wilayah | Pihak terlibat | Keputusan Mahkamah Antarabangsa\n| Pulau Sipadan dan Ligitan | Malaysia dan Indonesia | 2002, hak milik Malaysia\n| Pulau Batu Putih | Malaysia dan Singapura | 2008, hak milik Singapura',
      parts: [
        {
          label: '(a)', question: 'Nyatakan tiga maklumat tentang tuntutan Malaysia terhadap Kepulauan Spratly.', marks: 3, ref: '10.1 · hlm. 227',
          points: [
            'Tuntutan Malaysia bermula pada tahun 1979.',
            'Malaysia memasukkan sebahagian Kepulauan Spratly ke dalam wilayahnya.',
            'Kawasan itu merangkumi Pulau Kecil Amboyna, Terumbu Ubi, Terumbu Semarang Barat dan Layang-Layang.',
            'Tuntutan ini termaktub dalam Akta Zon Ekonomi Eksklusif 1984.',
            'Isu Spratly dibangkitkan dalam Forum ASEAN-China pada tahun 1995.',
            'Tuntutan turut melibatkan China, Vietnam, Brunei dan Filipina.',
          ],
        },
        {
          label: '(b)', question: 'Nyatakan tiga peranan Malaysia dalam mengantarabangsakan sistem kewangan Islam.', marks: 3, ref: '10.2 · hlm. 232, 233',
          points: [
            'Terlibat membangunkan sistem kewangan Islam sejak tahun 2001.',
            'Membangunkan sistem kewangan Islam yang progresif dan komprehensif.',
            'Menduduki kedudukan utama dalam pelbagai indeks global kewangan Islam.',
            'Menjadi pasaran sukuk terbesar di dunia.',
            'Menjadi negara utama pelaburan dana Islam.',
            'Menubuhkan INCEIF untuk menyokong perkembangan kewangan Islam.',
          ],
        },
        {
          label: '(c)', kbat: true, marks: 4, ref: '10.1',
          question: 'Malaysia menerima keputusan Mahkamah Antarabangsa walaupun Pulau Batu Putih diputuskan sebagai hak milik Singapura. Pada pendapat anda, mengapakah keputusan badan antarabangsa perlu dihormati?',
          points: [
            'Mengekalkan hubungan baik dengan negara jiran.',
            'Membuktikan negara mematuhi undang-undang antarabangsa.',
            'Mengelakkan konflik bersenjata.',
            'Menjaga imej dan kredibiliti negara.',
            'Memelihara keamanan serantau.',
            'Selaras dengan pendekatan menyelesaikan pertikaian secara aman.',
          ],
        },
      ],
    },
    {
      n: 5, section: 'B', chapterId: 't4-b2',
      title: 'Perkembangan idea nasionalisme',
      stimulus:
        'Carta aliran berikut berkaitan dengan perkembangan idea nasionalisme.\n> Penentangan terhadap pemerintahan beraja\n> Revolusi Keagungan (1688)\n> Revolusi Amerika (1776)\n> Revolusi Perancis (1789)\n> Nasionalisme di Asia',
      parts: [
        {
          label: '(a)', question: 'Nyatakan latar belakang Revolusi Keagungan di England.', marks: 4, ref: '2.2 · hlm. 24, 25',
          points: [
            'Revolusi berlaku kerana keinginan menegakkan kedaulatan parlimen dan hak asasi rakyat.',
            'Raja James II membelakangkan parlimen semasa menggubal undang-undang.',
            'Ahli parlimen bangkit menentang raja berkuasa mutlak dengan sokongan Mary II dan William of Orange.',
            'Raja James II melarikan diri ke Perancis.',
            'Peralihan kuasa berlaku secara aman tanpa pertumpahan darah.',
            'Bill of Rights digubal untuk memberikan keutamaan kepada parlimen.',
          ],
        },
        {
          label: '(b)', question: 'Huraikan perkembangan nasionalisme di empayar Uthmaniyah dan Mesir.', marks: 8, ref: '2.3 · hlm. 27',
          points: [
            'Nasionalisme lahir daripada kesedaran mempertahankan pemerintahan dan agama Islam yang diancam imperialisme Barat.',
            'Kesedaran ini mencetuskan gerakan Pan-Islamisme dan gerakan Islah.',
            'Gerakan Islah dipelopori oleh Sayyid Jamal al-Din al-Afghani dan Sheikh Muhammad Abduh.',
            'Imperialisme Barat menyebabkan pertembungan budaya yang mengubah tradisi masyarakat tempatan.',
            'Gerakan Islah menyeru umat Islam berpegang pada al-Quran dan Hadis.',
            'Gerakan Islah menyeru masyarakat memperbaik kehidupan untuk melepaskan diri daripada penjajahan.',
            'Pada tahun 1883, al-Afghani menubuhkan kumpulan al-Urwah al-Wuthqa.',
            'Akhbar al-Urwah al-Wuthqa menyebarkan idea penyatuan umat Islam seluruh dunia.',
            'Khalifah Abdul Hamid II menggerakkan idea Pan-Islamisme.',
            'Pada tahun 1914, empayar Uthmaniyah mengeluarkan fatwa menyeru umat Islam bangkit menentang penjajah.',
            'Gerakan ini mendapat sokongan umat Islam termasuk di Tanah Melayu.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '2.1',
          question: 'Nasionalisme bermaksud perasaan cinta yang mendalam terhadap bangsa dan negara. Pada pendapat anda, bagaimanakah murid dapat menzahirkan semangat nasionalisme dalam kehidupan seharian?',
          points: [
            'Menghormati bendera dan lagu kebangsaan.',
            'Mengutamakan barangan buatan Malaysia.',
            'Menguasai dan memartabatkan bahasa kebangsaan.',
            'Belajar bersungguh-sungguh untuk menyumbang kepada negara.',
            'Menyertai aktiviti patriotik di sekolah.',
            'Bergaul mesra dengan rakan pelbagai kaum.',
            'Menjaga nama baik negara.',
            'Kesimpulannya, semangat nasionalisme boleh disemai melalui tindakan kecil setiap hari.',
          ],
        },
      ],
    },
    {
      n: 6, section: 'B', chapterId: 't4-b3',
      title: 'Perang Dunia Pertama dan Perjanjian Versailles',
      stimulus:
        'Garis masa berikut berkaitan dengan Perang Dunia Pertama.\n| Tarikh | Peristiwa\n| 28 Julai 1914 | Austria-Hungary mengisytiharkan perang terhadap Serbia\n| 4 Ogos 1914 | Britain menyertai perang\n| Oktober 1914 | Empayar Uthmaniyah menyertai Kuasa Tengah\n| April 1917 | Amerika Syarikat menyertai Pakatan Bertiga',
      parts: [
        {
          label: '(a)', question: 'Jelaskan Persidangan Damai Paris dan Perjanjian Versailles.', marks: 6, ref: '3.2 · hlm. 56, 58',
          points: [
            'Persidangan Damai Paris diadakan pada 18 Januari 1919 untuk membincangkan syarat perdamaian.',
            'Syarat perdamaian bertujuan memastikan Jerman tidak lagi mengancam keamanan Eropah.',
            'Persidangan melahirkan Deklarasi 14 Perkara Woodrow Wilson.',
            'Deklarasi ini menekankan penentuan nasib negara oleh rakyat sendiri dan sempadan berasaskan bangsa.',
            'Perjanjian Versailles ditandatangani pada 28 Jun 1919.',
            'Jerman bertanggungjawab terhadap kemusnahan dan perlu membayar pampasan.',
            'Jerman perlu mengehadkan saiz angkatan tentera.',
            'Jerman perlu menyerahkan wilayah dan tanah jajahan.',
            'Perjanjian menetapkan penubuhan Liga Bangsa-Bangsa.',
          ],
        },
        {
          label: '(b)', question: 'Jelaskan ketidakpuasan hati terhadap Perjanjian Versailles sebagai faktor tercetusnya Perang Dunia Kedua.', marks: 6, ref: '3.3 · hlm. 56, 58',
          points: [
            'Jerman menganggap Perjanjian Versailles tidak adil.',
            'Perjanjian itu menjejaskan kedaulatan Jerman.',
            'Jerman kehilangan tanah jajahan.',
            'Pampasan perang yang tinggi menyebabkan kemelesetan ekonomi dan inflasi yang teruk.',
            'Hitler memulihkan nasionalisme Jerman dengan mengetepikan Perjanjian Versailles.',
            'Hitler membina semula angkatan tentera dan menduduki semula Rhineland.',
            'Itali tidak berpuas hati kerana tidak diberikan tanah jajahan baharu seperti Perancis dan Poland.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '3.1',
          question: 'Kegagalan penentangan bersenjata Tok Janggut menyebabkan masyarakat menggunakan akhbar dan majalah untuk meniupkan kesedaran kebangsaan. Pada pendapat anda, mengapakah sesuatu perjuangan memerlukan strategi yang sesuai dengan keadaan?',
          points: [
            'Mengelakkan korban nyawa yang sia-sia.',
            'Matlamat dapat dicapai dengan lebih berkesan.',
            'Strategi dapat disesuaikan dengan kekuatan pihak lawan.',
            'Mendapat sokongan yang lebih luas daripada masyarakat.',
            'Menjimatkan tenaga, masa dan sumber.',
            'Perjuangan dapat diteruskan dalam jangka panjang.',
            'Kesimpulannya, perjuangan yang bijaksana lebih berpeluang berjaya.',
          ],
        },
      ],
    },
    {
      n: 7, section: 'B', chapterId: 't4-b4',
      title: 'Penentangan terhadap Malayan Union',
      stimulus: 'Situasi: Anda sedang menyiapkan folio tentang perkembangan politik di Tanah Melayu selepas Perang Dunia Kedua.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan peranan akhbar Melayu dalam menentang Malayan Union.', marks: 4, ref: '4.3 · hlm. 102, 123',
          points: [
            'Akhbar Majlis menyiarkan berita Malayan Union pada 12 Oktober 1945.',
            'Utusan Melayu, Majlis dan Warta Negara menyuarakan bantahan dengan keras.',
            'Akhbar mengecam dan mengutuk Malayan Union kerana merugikan orang Melayu.',
            'Akhbar menyeru orang Melayu mengadakan perhimpunan besar-besaran.',
            'Akhbar sentiasa melaporkan perkembangan penentangan orang Melayu.',
          ],
        },
        {
          label: '(b)', question: 'Huraikan misi Sir Harold MacMichael mendapatkan tandatangan Raja-raja Melayu.', marks: 8, ref: '4.2 · hlm. 98',
          points: [
            'H.C. Willan dihantar terlebih dahulu untuk meninjau sokongan Raja-raja Melayu.',
            'MacMichael tiba di Port Swettenham dengan kapal Royalist pada 11 Oktober 1945.',
            'Beliau ditemani oleh A.T. Newboult sebagai jurubahasa.',
            'Sultan Johor menurunkan tandatangan pada 20 Oktober 1945.',
            'Sultan Perak cuba melengah-lengahkan masa sebelum terpaksa menandatangani pada 22 November 1945.',
            'Sultan Kedah bertegas enggan dan berlaku perdebatan sebelum baginda menandatangani pada 2 Disember 1945.',
            'Raja Perlis dan Yang di-Pertuan Besar Negeri Sembilan menandatangani setelah didesak.',
            'Sultan Terengganu pada mulanya enggan kerana perjanjian bertentangan dengan Undang-Undang Tubuh Negeri Terengganu.',
            'MacMichael mengugut untuk tidak mengiktiraf Raja-raja Melayu yang enggan menurunkan tandatangan.',
            'Dalam tempoh dua bulan, beliau mendapatkan tandatangan sembilan orang Raja Melayu.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '4.1',
          question: 'BMA membubarkan MPAJA pada 1 Disember 1945, tetapi gagal mengumpulkan semula senjata yang pernah diberikan kepada mereka. Pada pendapat anda, mengapakah pemilikan senjata api perlu dikawal ketat oleh kerajaan?',
          points: [
            'Mencegah jenayah bersenjata.',
            'Menjaga keselamatan orang awam.',
            'Mengelakkan senjata jatuh ke tangan pengganas.',
            'Mengurangkan risiko kemalangan.',
            'Mengekalkan keamanan dan kestabilan negara.',
            'Memudahkan pihak berkuasa menguatkuasakan undang-undang.',
            'Kesimpulannya, kawalan senjata api penting untuk kesejahteraan rakyat.',
          ],
        },
      ],
    },
    {
      n: 8, section: 'B', chapterId: 't5-b2',
      title: 'Sejarah Perlembagaan Persekutuan',
      stimulus:
        'Baca petikan berikut.\n> Perlembagaan Persekutuan berasaskan nilai tradisi Kesultanan Melayu dan beberapa prinsip undang-undang Inggeris yang disesuaikan dengan nilai tempatan. Sejarah penggubalan undang-undang negara bermula pada tahun 1877 dan mencapai kemuncaknya dengan Perlembagaan Persekutuan Tanah Melayu 1957.',
      parts: [
        {
          label: '(a)', question: 'Nyatakan undang-undang Inggeris yang diperkenalkan di Negeri-negeri Selat, Sarawak dan Sabah.', marks: 4, ref: '2.1 · hlm. 23, 24',
          points: [
            'Charter of Justice diperkenalkan di Negeri-negeri Selat, contohnya Charter of Justice 1807.',
            'Charter of Justice diambil daripada undang-undang yang digubal di England.',
            'Charter of Justice II (1826) menyatukan mahkamah di Singapura, Melaka dan Pulau Pinang.',
            'Charter of Justice III (1855) mewujudkan mahkamah Singapura dan Melaka serta mahkamah Pulau Pinang.',
            'Sarawak menggunakan The Sarawak Application of Laws Ordinance 1949 berdasarkan The Common Law of England.',
            'Sabah menggunakan Sabah Application of Laws Ordinance 1951.',
          ],
        },
        {
          label: '(b)(i)', question: 'Nyatakan perkembangan penggubalan undang-undang di negara kita sebelum tahun 1948.', marks: 4, ref: '2.2 · hlm. 25, 26',
          points: [
            'Mesyuarat pertama Majlis Negeri Perak pada tahun 1877 dipengerusikan oleh Raja Muda Yusuf.',
            'Majlis Negeri Perak menggubal undang-undang bagi negeri Perak.',
            'Peranan yang sama kemudiannya dimainkan oleh Majlis Negeri di negeri Melayu lain.',
            'Undang-undang di Negeri-negeri Selat digubal oleh Majlis Undangan Negeri.',
            'Undang-undang di NNMB digubal oleh Majlis Persekutuan.',
            'Undang-undang di NNMTB digubal oleh Majlis Negeri.',
          ],
        },
        {
          label: '(b)(ii)', question: 'Jelaskan kuasa Yang di-Pertuan Agong dan raja sebagai ciri tradisional Perlembagaan Persekutuan.', marks: 4, ref: '2.3 · hlm. 28',
          points: [
            'Yang di-Pertuan Agong ialah pemerintah tertinggi negara.',
            'Yang di-Pertuan Agong berkuasa mengampun dan menangguhkan hukuman.',
            'Yang di-Pertuan Agong berkuasa melantik jawatan utama negara.',
            'Raja ialah ketua negeri dan kuasa eksekutif dilaksanakan melalui nasihat Majlis Mesyuarat Negeri.',
            'Raja berkuasa mengampun dan melantik jawatan utama negeri.',
            'Raja ialah tonggak kehormatan dan keadilan yang mengurniakan anugerah dan bintang kehormat.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '2.2',
          question: 'Sejak negara mencapai kemerdekaan, ahli Parlimen memainkan peranan meminda perlembagaan bagi menegakkan kedaulatan negara. Pada pendapat anda, mengapakah pindaan perlembagaan perlu dibuat melalui proses yang sah?',
          points: [
            'Menjamin kesahan dan kewibawaan undang-undang.',
            'Mengelakkan penyalahgunaan kuasa.',
            'Memastikan pindaan dibahaskan oleh wakil rakyat.',
            'Pindaan dapat disesuaikan dengan keperluan semasa secara teratur.',
            'Hak rakyat dan institusi negara terpelihara.',
            'Mengekalkan kestabilan politik negara.',
            'Kesimpulannya, proses yang sah menjamin keluhuran perlembagaan.',
          ],
        },
      ],
    },
    {
      n: 9, section: 'B', chapterId: 't5-b3',
      title: 'Raja Berperlembagaan',
      stimulus: '> RAJA BERPERLEMBAGAAN DAN DEMOKRASI BERPARLIMEN\n> Tonggak kestabilan dan teras perpaduan negara',
      parts: [
        {
          label: '(a)', question: 'Nyatakan maklumat tentang Durbar Negeri-negeri Melayu Bersekutu.', marks: 4, ref: '3.2 · hlm. 42, 43',
          points: [
            'Durbar dibentuk pada tahun 1897 seiring dengan penubuhan NNMB.',
            'Durbar ialah majlis persidangan Raja-raja Melayu Perak, Selangor, Pahang dan Negeri Sembilan.',
            'Durbar membincangkan hal ehwal pentadbiran Kerajaan Persekutuan dengan British.',
            'Durbar dipengerusikan oleh Pesuruhjaya Tinggi British.',
            'Ahlinya termasuk Residen British dan Setiausaha NNMB.',
            'Durbar pertama diadakan di Kuala Kangsar, Perak.',
          ],
        },
        {
          label: '(b)', question: 'Huraikan kedudukan pemerintahan beraja di negeri Melayu dari zaman British hingga pembentukan Persekutuan Tanah Melayu 1948.', marks: 8, ref: '3.1 · hlm. 39, 40',
          points: [
            'British hanya mampu memperkenalkan Sistem Residen di NNMB dan Sistem Penasihat di NNMTB.',
            'Di NNMB, raja kekal pemerintah berdaulat walaupun perlu menerima nasihat Residen British.',
            'Di NNMTB, kedudukan raja lebih kukuh kerana pentadbiran dilaksanakan oleh pembesar yang dilantik raja.',
            'Undang-Undang Tubuh Kerajaan Johor 1895 dan Undang-Undang Bagi Diri Kerajaan Terengganu 1911 menyerlahkan ciri Raja Berperlembagaan.',
            'Perjanjian dengan British tidak memindahkan kedaulatan dan negeri Melayu hanya menjadi negeri naungan.',
            'Semasa pendudukan Jepun, raja diiktiraf sebagai ketua agama Islam dan memperoleh pendapatan seperti sebelum perang.',
            'Pengiktirafan ini diisytiharkan dalam persidangan di Singapura pada Januari 1943.',
            'Kedudukan raja diletakkan di bawah pengawasan Gabenor Jepun.',
            'Melalui Malayan Union, raja kehilangan kuasa kerana kuasa pemerintahan diambil oleh Raja England.',
            'Kedaulatan raja dikembalikan melalui Perjanjian Persekutuan Tanah Melayu 1948.',
          ],
        },
        {
          label: '(c)', kbat: true, rubric: true, marks: 8, ref: '3.3',
          question: 'Sebagai Ketua Utama Negara, Yang di-Pertuan Agong menjadi punca kedaulatan, ketaatan, perpaduan, kebesaran dan kemuliaan negara. Pada pendapat anda, bagaimanakah rakyat dapat menzahirkan taat setia kepada Raja dan Negara?',
          points: [
            'Menghayati prinsip Kesetiaan kepada Raja dan Negara dalam Rukun Negara.',
            'Menghormati lagu kebangsaan dan lambang negara.',
            'Mematuhi undang-undang negara.',
            'Tidak menghina institusi beraja.',
            'Menyertai sambutan Hari Keputeraan Yang di-Pertuan Agong.',
            'Bersedia mempertahankan kedaulatan negara.',
            'Kesimpulannya, taat setia rakyat menjadi asas kestabilan negara.',
          ],
        },
      ],
    },
  ],
});
