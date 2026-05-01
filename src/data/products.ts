export interface Category {
  label: string;
  icon: string;
  id: string;
  active?: boolean;
}

export interface Product {
  image: string;
  category: string;
  categoryId: string;
  title: string;
  description: string;
}

export interface SupportPoint {
  text: string;
}

export const categories: Category[] = [
  { id: "xuc-tat", label: "Xúc tác lọc hóa dầu", icon: "science", active: true },
  { id: "hoa-chat", label: "Hóa chất công nghiệp", icon: "water_drop" },
  { id: "thiet-bi", label: "Thiết bị phụ trợ", icon: "precision_manufacturing" },
  { id: "dich-vu", label: "Dịch vụ kỹ thuật", icon: "engineering" },
];

export const products: Product[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4pP3GkmOeCCBTkv-9rCiOtdlrTKfZGkp9QvKtDJd0MICWuN2aklNbzR_XJGv_o_dt6_8IX0GLMsXqp85MGY2RlYohRf9ae16iqMLGdUoMJ4IOQce7jTigsqzRMR_CzFO10W7jM5DD_R3t4Th5BOx-U7LJlTuWD84UQ2MUzatplZHgMcpChOJ0GuriS9DgzvZt8ft_PnY1mgW8l-JSCpkQRLXwOlT3gXsAO4EqcfXi20mStweiPZuuo-v6hokw7kgrkI242rxGyQ",
    category: "Xúc tác",
    categoryId: "xuc-tat",
    title: "Xúc tác FCC thế hệ mới",
    description:
      "Được thiết kế để tối ưu hóa hiệu suất cracking, tăng năng suất olefin nhẹ và giảm thiểu khí thải cốc trong điều kiện vận hành khắc nghiệt.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqX0hpQWB7yihi-6uJt9tqd6ccusqihnoReq_3o5PGTFk-CdwjNfeb-4PBq33nAzDHk5eqlc5kjqn-GvRLMbeLLpuMixnDqF0gjREa0OHE6dGz3o6D2l3KMV9d0c08EQivmabzhiurJ0UQrMiBEr8kY2XWgXL_dgdvDQCXxWMNwl2-hqvsRybVQ-iHtrXnrmF3n65ec7Lp9xaRJJhXNHIb3_iqxME_Oq1QKaIFzyCzQqa9JT4PRTTidRSFBgZpi4xKc7pNfigxakY",
    category: "Hóa chất",
    categoryId: "hoa-chat",
    title: "Hóa chất xử lý nước cooling",
    description:
      "Giải pháp chống ăn mòn và cáu cặn tiên tiến cho hệ thống làm mát công nghiệp, đảm bảo tuổi thọ thiết bị và hiệu quả trao đổi nhiệt.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSeflI4PJlV-GDx-cphy_OQnEBdz4bu4jTD__os17yxULlkkLg3YNCfHFx6p03ctdVtiej1RE6yT_MmQ5i4ccmcuStvpKEXPwtK_pjKmCraDaYpk74ZXoVCCvXHANV6WiL_P9SiO38NHPtUhQ3yl8F1tu9QlwcGJOimm5dXDDBXa2aKQgwc99PKO8xtVRiKdgPO-qd0lQJCFj67hwEW1a_i1hN5Dt24UYD0EWSbDcR7o6Gvl4gawOi5EiTITZqXFl2HWDszWsZOoc",
    category: "Thiết bị",
    categoryId: "thiet-bi",
    title: "Van điều khiển công suất cao",
    description:
      "Thiết bị van chuyên dụng chịu áp suất và nhiệt độ cao, tích hợp công nghệ điều khiển thông minh cho độ chính xác tuyệt đối.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsr8ucKdiueY-BhPC5n6_NInxqV5vI1ojCL19PX24yxyrJOFrEDgkwazjpqhNnUJgru5MsK3RCe5alWCKooPj5e2pAlCqtZtHOtXWtjviyOApicBt5BM4AO6Pwvp1p_SITUbh7zkFeH58jeRYaKqGOgCDQIVITiNmxdM78AQ0RvMjWZtww6QYCw9mdKLLjoZoEvk67V1HEI7vNBbSL-3YuYtZKG2V9MK-RWucUHxedvLwfPu2k0IP1P7Hg6q7HlPUWy_tw7mT1PZU",
    category: "Dịch vụ",
    categoryId: "dich-vu",
    title: "Phân tích kỹ thuật chuyên sâu",
    description:
      "Đánh giá hiệu năng xúc tác và chẩn đoán hệ thống thông qua các bài kiểm tra thực nghiệm và mô phỏng tại phòng thí nghiệm.",
  },
];

export const techSupport = {
  title: "Hỗ Trợ Kỹ Thuật Chuyên Gia",
  description:
    "Chúng tôi không chỉ cung cấp sản phẩm mà còn đồng hành cùng doanh nghiệp thông qua các dịch vụ tư vấn, triển khai và bảo trì. Đội ngũ kỹ sư giàu kinh nghiệm của PTTC JSC luôn sẵn sàng giải quyết các thách thức vận hành phức tạp nhất.",
  points: [
    "Tư vấn lựa chọn xúc tác và hóa chất tối ưu",
    "Hỗ trợ kỹ thuật tại hiện trường (On-site support)",
    "Đào tạo vận hành và chuyển giao công nghệ",
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUpiH_mGR5K5k8kQS7YNI6RQpmbwB_ebsfImRgj1savpcV6DLMxNaAXnk3kuonzX4MQJ6FRfrI-sdjnN-CF9X48p8qusJqkoG0HJZMZRfOP5AMkI_kp6x-x5PBkbgnqKy3QqM_D9KyshfK6VqJ-TobpDWlKES2U3Di12OZYGK_RpVg5DRhSam_UfLlMZaO_LiZk8KZYLx5a0IdWErA9F-ECniGWBPF7nQmTClasZecoAWuDUPVmxGc-SqNUuSttsjpXH3OOR0tFzs",
};
