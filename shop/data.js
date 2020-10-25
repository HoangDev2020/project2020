let productions = [
    {
        name: 'Nón bảo hiểm 3/4 Napoli SH free size',
        cost: '299.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2Tl-HZhZq7Dm7O18TtTyPB-VXfFNX1iT4x7tHkAhlXjvRHDVPg1bG08qU4eebO0iRhzBj02cE&usqp=CAc',
    },
    {
        name: 'Áo thun shen',
        cost: '190.000đ',
        img: 'https://aolmht.com/wp-content/uploads/2018/04/%C3%81o-thun-Shen-%C3%81o-thun-%C4%91en-3D-Shen-TD01-800x800.jpg',
    },
    {
        name: 'Quần nỉ mông thú Carter',
        cost: '42.000đ',
        img: 'https://shoptretho.com.vn/upload/image/product/20151119/quan-ni-mong-thu-carter-4.jpg',
    },
    {
        name: 'Giầy Gucci ong màu trắng gót vàng',
        cost: '1.450.000đ',
        img: 'https://capvirgo.com/wp-content/uploads/2019/11/i1571677266_2898_1.jpg',
    },
    {
        name: 'Kính cơn',
        cost: '880.000đ',
        img: 'https://muanhanh24h.com.vn/images/product/kinh-con-1577252134_vu%E1%BB%91ng.jpg',
    },
    {
        name: 'Túi xách nữ B.O.Y 20',
        cost: '59.000đ',
        img: 'https://vn-test-11.slatic.net/original/b74eb1517d2d6e279b8f59f0e1b1164c.jpg',
    },
    {
        name: 'Đồng hồ nữ đeo tay tặng kèm lắc tay thời trang',
        cost: '379.000đ',
        img: 'https://salt.tikicdn.com/cache/w390/ts/product/61/84/ae/3fae945727c09c19414b91cd8b8f4f8e.jpg',
    },
    {
        name: 'Đồng hồ nam máy cơ Tevise chạy full kim Automatic',
        cost: '495.000đ',
        img: 'https://media3.scdn.vn/img3/2019/5_22/b9GdGW_simg_de2fe0_500x500_maxb.jpg',
    },
    {
        name: 'Đồng hồ Smartwatch Xiaomi Mi-band 3(đen)',
        cost: '350.000đ',
        img: 'https://phucanhcdn.com/media/product/33141-------ng-h-----smartwatch-xiaomi-mi-band-3----en-.jpg',
    },
    {
        name: 'Đồng hồ Calvin Klein Minimal K3M2T126',
        cost: '5.540.000đ',
        img: 'https://donghoduyanh.com/images/products/2020/03/17/large/dong_ho_calvin_klein_minimal_k3m2t126.jpg',
    },
    {
        name: 'Đồng hồ nam Sunrise DM771SWA chính hãng',
        cost: '986.000đ',
        img: 'https://i-shop.vnecdn.net/resize/560/560/images/2019/07/05/5d1f172351404-IMG_2026_1-copy.jpg',
    },
    {
        name: 'Đồng hồ nam Tevise 9006G máy cơ mặt rồng (Mặt vàng dây vàng)',
        cost: '388.000đ',
        img: 'https://vn-test-11.slatic.net/p/8/dong-ho-co-tevise-may-atomatic-mat-rong-day-vang-mat-vang-8808-1932774-c6e5f8be83ff82e03f3fe908935e20b2-catalog.jpg_720x720q80.jpg_.webp',
    },
    {
        name: 'PC Gaming i5 10400F | GTX 1660 6GB | 16GB | 240GB',
        cost: '15.100.000đ',
        img: 'https://minhancomputer.com/media/product/1730_viettech_x9_10400f.jpg',
    },
    {
        name: 'PC Gaming i5 10400 | GTX 1660 Super 6GB | 16GB | 240GB',
        cost: '15.980.000đ',
        img: 'https://minhancomputer.com/media/product/1916_r5_3600_omg.jpg',
    },
    {
        name: 'RAM Laptop Samsung 8GB DDR4 2666MHz SODIMM - Hàng Nhập Khẩu',
        cost: '820.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTD7twJRj_ntmzqwX5Lg_LY9FMU0aP6nHH5FFO8TFnR2-UwXevKs202J3TxeEtWXqBqmJsaLBk&usqp=CAc',
    },
    {
        name: 'RAM Laptop DDR3L 8Gb Bus 1600',
        cost: '890.000đ',
        img: 'https://saigonlaps.com/wp-content/uploads/2019/02/RAM-DDR3-4G-Laptop-Kingmax-2.jpg',
    },
    {
        name: 'Chip máy tính I5-4570',
        cost: '1.850.000đ',
        img: 'https://vitinhminhson.com/wp-content/uploads/2019/02/i5-4570.jpg',
    },
    {
        name: 'CPU chip máy tính Core i3 3220',
        cost: '290.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT_tzeVB6B4EZjFHE7vat3557tVqlAqpLA6g&usqp=CAU',
    },
    {
        name: 'Quạt Cây Hanil 5 Cánh EFLA-5128R',
        cost: '2.199.000đ',
        img: 'https://img.websosanh.vn/v2/users/review/images/danh-gia-quat-cay-hanil/hc35x607e9j0p.jpg',
    },
    {
        name: 'Đèn học để bàn chống cận cap cấp',
        cost: '180.000đ',
        img: 'https://cdn.chanhtuoi.com/uploads/2018/08/w400/den-hoc-chong-can-01.jpg.webp',
    },
    {
        name: 'Bàn làm việc cao cấp BAH004',
        cost: '1.749.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjbtDzQL_hcPPZrToJqUg_V4z3garVsfiWmui0cNaw3YkzYuubZiAB-pQdsQ&usqp=CAc',
    },
    {
        name: 'Bàn ủi khô Panasonic NI-317TVRA',
        cost: '320.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ2Ek7leNcH3wsIZB_UHUzP67PfGDgPEYmCzP5hPmKHwiYJHnHHA2DhKV-EA&usqp=CAc',
    },
    {
        name: 'MÓC KHÓA MŨ NÓN SƠN - NSMĐ',
        cost: '90.000đ',
        img: 'https://media3.scdn.vn/img3/2018/12_26/ispTAO_simg_de2fe0_500x500_maxb.jpg',
    },
    {
        name: 'Quạt điều hòa phun lạnh hơi nước',
        cost: '999.000đ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7HXqk4TUVRA07dMssRZA9VG3jJCaodOLgIJk9eMBwXR7pfaH4Pciz6n-G_g&usqp=CAc',
    },
    {
        name: 'Dầu gội Pantene phục hồi hư tổn 650ml',
        cost: '115.000đ',
        img: 'https://cdn.tgdd.vn/Products/Images/2483/193850/bhx/dau-goi-pantene-cham-soc-hu-ton-650g-2-org.jpg',
    },
    {
        name: 'CẶP DẦU GỘI XẢ GRAPEFRUIT BƯỞI TRỊ RỤNG TÓC CAO CẤP',
        cost: '320.000đ',
        img: 'http://myphamhangnga.com/wp-content/uploads/2019/10/a3b84829f0baf25d65f6c4c0914ad6a6_result.jpg',
    },
    {
        name: 'Dầu Gội Lifebuoy Tóc Dày Óng Ả',
        cost: '88.000đ',
        img: 'https://salt.tikicdn.com/cache/w1200/ts/product/83/35/8b/488292345eadbb044442215996f4331a.jpg',
    },
    {
        name: 'Dầu gội TreSemme Keratin Smooth vào nếp suôn mượt 650g',
        cost: '185.000đ',
        img: 'https://product.hstatic.net/200000061028/product/upload_ca34bd3a888342f58accc41649fc0f94.jpg',
    },
    {
        name: 'Dầu Gội Thái Dương 7 200ml Không Gàu, Không Ngứa',
        cost: '98.000đ',
        img: 'https://dailyvita.vn/upload/news/content/2020/03/thai-duong-jpg-1584068045-13032020095405.jpg',
    },
    {
        name: 'Dầu gội chống gàu Selsun 100ml',
        cost: '75.000đ',
        img: 'https://product.hstatic.net/1000041114/product/selsun-100-01_596f1a3c7df64b5dafbe26ab21bd3367_master.jpg',
    },
];




