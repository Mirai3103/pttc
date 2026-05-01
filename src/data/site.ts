export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Project {
  image: string;
  alt: string;
  status: string;
  statusTone: "primary" | "tint";
  title: string;
  description: string;
  year: string;
  location: string;
}

export interface Certificate {
  name: string;
  subtitle: string;
  logo?: string;
  fallback?: string;
}

export interface NewsItem {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
}

export const site = {
  brand: "PTTC JSC",
  logo: "/logo.jpg",
  copyright:
    "© 2024 CÔNG TY CỔ PHẦN CÔNG NGHỆ HÓA DẦU VIỆT NAM (PTTC JSC). All rights reserved.",
};

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Đối tác", href: "/doi-tac" },
  { label: "Tin tức", href: "/#tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const footerLinks: NavItem[] = [
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Điều khoản sử dụng", href: "#" },
  { label: "Chứng chỉ kỹ thuật", href: "#" },
  { label: "Sitemap", href: "#" },
];

export const projects: Project[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh5dxGmAH7LNbfwAP1rQmbw5gPwrN_bL06FXtc-q73SSHsSZvzcA3dTg4OopD8TpRjXeAhV6DEQH9Qstk-YgvUJTytMPh77e9GDikJDrcC6R9v9WFflVwxNyRrSl__XlMXcYDpYn21ADjwvifLIOizFzDpuW2oA0lhB8OfZhShATjdpgQmrhCFZj6PqSKi1c1sccuaO167QZSfg9yeFT3RfOIR165tGfvZNzooDqM_ETzJhhz6BZbAyGlM-3TibDGrFPntPnPOK68",
    alt: "Dự án Lọc hóa dầu",
    status: "Hoàn thành",
    statusTone: "primary",
    title: "Dự án Tối ưu hóa Xúc tác - Nhà máy Nghi Sơn",
    description:
      "Cung cấp và vận hành hệ thống xúc tác hiệu năng cao, giúp tăng 15% sản lượng xăng dầu.",
    year: "2023",
    location: "Thanh Hóa",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbRMMezfi9gXp1HuM7bAj1el6tqOcdgfEBCkOLOXD9r-OCHck4MPdgOpMU6erbG5yJOmgKirhJ4XOBu57GuSUJSdSgflp-LKPAkZ4kJA7iMSHoBkKrsjNskEJxG_AWHyZiVZKoOzAMzA9Rmu3HL9fL6eC4cexiYZ0VEkq7h38FvIQ7_pLLBRJzhI3ehMhJD_Vjl7Nwy1RH259OU2BtM2VKqsTPViDQomU1a9ihkFACFdp9YWkEVfC27fnPcdTF7WLhdPihz2Ma2e8",
    alt: "Hóa chất công nghiệp",
    status: "Hoàn thành",
    statusTone: "primary",
    title: "Hệ thống Cung ứng Hóa chất Lọc dầu Dung Quất",
    description:
      "Giải pháp lưu kho và vận chuyển hóa chất chuyên dụng đạt tiêu chuẩn an toàn quốc tế.",
    year: "2022",
    location: "Quảng Ngãi",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjkHP7w4bZpgGjrn3nTMf3yObK371AujX8TpbTmM4-IjNCTOVZYB9vR9VOnU6PhoNoqu8HstY482bNDrGONT7FEUP3o-mByp2iHZ0qaQeMQrFA-atelYos_TBGD9bWEJ4LAIQt6lFs5ylL-E_DinE3SOqcwSfFhzmb9xT9mJEr4OcA1Q51vzUOctpbHj2cVY_MmRVWsfFqtFcwEFmBr50q0NeCpQpxVE7c0VUG1L44G_koWPt_KZc-ZK_QbuqjsbvTSuvu-5MsOs",
    alt: "Năng lượng sạch",
    status: "Đang thực hiện",
    statusTone: "tint",
    title: "Tư vấn Công nghệ Hydrogen xanh Phú Mỹ",
    description:
      "Hợp tác nghiên cứu ứng dụng công nghệ tách chiết hydrogen hiệu suất cao từ phụ phẩm dầu khí.",
    year: "2024",
    location: "BR-VT",
  },
];

export const certificates: Certificate[] = [
  {
    name: "ISO 9001:2015",
    subtitle: "Hệ thống Quản lý Chất lượng",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzz4nQT2-69FsnPEXOieGVUpRMhNMxl9sf0FZvJxv-O2YRnJ4yPnU6zbjSdScPWa7b8pQFItdx0Ka6zsbldFPzchXh1ZDjvWqtQKyUBKpiRBkq9jr89aSy-U7KnOkO8zct6M7qWNX4B0AuJA69kioReODv6bz-_HjQj-evjcoCrjoDOs2RSRg7TCOaMjS5dnRuhX0naGBZ9-FbuRZJL4MNZ9VuA42xlu3DTfi9fqgh71uAOpn2hxcp4ToSC8aQd2TC8xD-u_YljHE",
  },
  {
    name: "ISO 14001:2015",
    subtitle: "Quản lý Môi trường",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuACiJYknCOV6vZWohGugHvv2f4fmEv51JX67eRPAMrsIzyLOREx6pznSii95WRS5chYS53qDtzAVkpilRI0pxSiOWX2SsTfLGzyQOUEbrx-dn67yDM-pp3h7eHgwArb8f83-ZMCCTjcRqkH0-zYt0MNArcdyjIHcXNgxCA2NN_2Why6qspq6Wp_iz3J1vJEiebA-ivjmeOp434XHyiurUIrz-LfhujAWaxECVYrxn49QezxgSkhZmUjx4xwO7E_8dYifWdCjWO_ol4",
  },
  {
    name: "ISO 45001:2018",
    subtitle: "An toàn & Sức khỏe Nghề nghiệp",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdB8xablXiNxAKCsEUoKN0OpecxPevMNeU110AOE-KnCIjX12LZhki3Xm78srRI2KQOXju1GYJoKgbT8Ccu-XZXX4Ro21kzJimFCR9b4yLdywrqwPsKLX8uBt4nAbShq7FGCL0mlaYMaWov5Xm1zygOkPU6vDLGsNv9M93p5_4Uxf7EC-BezNP2r_UbjzzQbF5J5oUIrgJjh-EYophDrxKUDdCqgi68ct2jzKiAR6KyVQl0cKvMMgAml2HfIrbeOSkTrpsyHAnQ4I",
  },
  {
    name: "ASME Certified",
    subtitle: "Tiêu chuẩn Kỹ thuật Cơ khí",
    fallback: "ASME",
  },
];

export const news: NewsItem[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLSW-21AfpUXVG9ZdefbidEa_O7rH_G9nwSqbgK8OaiWkdnAP7aB8wUhfKWQhFYjx9AF5wSezq8v41EeQirLRjdgXAKrgUCJdyaTgJD_43oMrd3Er78EVHp4gEv5tYUJoCxmim9uJbSO1F0ZdjIAxKqWxkXnaBOwN8tE9NiYvNnfkA52ZGO62KJlol3N8ArwOlY-ekcE1ox06YFNx1IBgMuohdvCrLARFuTy9gT1A-Voem64a24TFmY5tXXo36nRaj7t6QQCIf5RQ",
    alt: "PTTC JSC tại triển lãm",
    date: "Tháng 5, 2024",
    title: "PTTC JSC Tham Dự Triển Lãm Năng Lượng Tái Tạo Quốc Tế",
    description:
      "Chúng tôi giới thiệu các dòng sản phẩm xúc tác mới giúp giảm thiểu phát thải Carbon trong quá trình lọc dầu...",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs47Sxzz2-PpECtBFnMREwPzLAf-4X1WBpKQkb3pkR_KkIDF37mYIvgkJKYeWhrRwxLqvmQhrRE-l23zykvea8TMGNrLlSPMYBmJRWqxzhULS-FuERne1rFkhPU8ItoINm3L0g8-VYpVCWaArh9uYIJFLO39k8SHns0C1Lvm-wt0WCivtOuWWABxQyRjz5A3mfeeQQdzrGev3mrqAOnPsnTcpRtQ2PD5yB4x8Mx5G3H8KAdLVV_WD-4Ceh1GGQlrzhQsUisoSLutU",
    alt: "Xu hướng công nghệ xanh",
    date: "Tháng 4, 2024",
    title: "Báo Cáo: Xu Hướng Ứng Dụng Công Nghệ Xanh Trong Hóa Dầu",
    description:
      "Phân tích chuyên sâu về việc chuyển đổi từ hóa dầu truyền thống sang kinh tế tuần hoàn tại khu vực ASEAN...",
  },
];

export const partners: Partner[] = [
  { name: "SHELL" },
  { name: "TOTAL" },
  { name: "CHEVRON" },
  { name: "BP" },
  { name: "EXXON" },
];

export const hero = {
  eyebrow: "",
  title: "Giải Pháp Công Nghệ Hóa Dầu Hàng Đầu",
  subtitle:
    "Cung cấp xúc tác chuyên dụng và hóa chất công nghiệp với tiêu chuẩn kỹ thuật quốc tế. Đối tác tin cậy cho sự phát triển bền vững của ngành năng lượng.",
  cta: { label: "Khám Phá Ngay", href: "#san-pham" },
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lJyPiGHq7MpW80wHWTlt7kP7Yu6zHCZSUczP55ClDVV1xgiZgVJADCj5cmZVhzAXlC2xFB7TMCXy1DN5eM4O43gPNvd5gMilW6n2d1r01ekK-ZdZ7AkMuSMxI9psxs34AkJFQtKoi91W6aossAq4QZFSi7_BK8ELEcSINA3gPc9oM_AO1qjmOpQHVWm8qfrB32Is6O3ZMviqyCHEhde_s9PKucsRLkCAJphIxCMgZ-wYVXUYYe-j9DZ0lYtK_fhAtIN8DEJNCWk",
};
