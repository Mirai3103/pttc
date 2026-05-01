export interface ContactInfo {
  icon: string;
  title: string;
  lines: string[];
  link?: { label: string; href: string };
}

export const contactHero = {
  title: "Liên hệ với chúng tôi",
  subtitle:
    "Chúng tôi luôn sẵn sàng hỗ trợ đối tác và khách hàng bằng các giải pháp công nghệ hóa dầu tiên tiến và dịch vụ tư vấn kỹ thuật chuyên sâu.",
  bgImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD5GXJyvdlfdu9swjkeZkLw125ozPawNDHki_QhDlGuWmIIy6z-Xr6aL4CurQO7HreKWVHVVVKa2LDMp8EOW0qQYqawXVy8KFznN2gLF-9BIMFaIjXVexA0RqaUtM85VQpNrwsj9OAjhM7QwSm_3C5Kku-n_HH64pO3Qd0Cez8meZaLlzyDc4STwNy7oQfPMvM15UPgYsaAlPFNAjE9FrOhTO3Mytqz1TpKgXud6NvEgefgFCeGtqSQ6mLgrsqnSRXquLG4cCj9UXA",
};

export const contactInfoCards: ContactInfo[] = [
  {
    icon: "location_on",
    title: "Trụ sở chính",
    lines: [
      "Lô E5.10 Ngọc Bảo Viên, Nghĩa Lộ",
      "Tp. Quảng Ngãi, Việt Nam",
    ],
  },
  {
    icon: "call",
    title: "Điện thoại & Zalo",
    lines: ["0974.609.103 (Mr. Duy)", "Hỗ trợ qua Zalo"],
    link: { label: "Gọi ngay", href: "tel:0974609103" },
  },
  {
    icon: "mail",
    title: "Email",
    lines: ["admin@pttc.com.vn"],
    link: { label: "Gửi email", href: "mailto:admin@pttc.com.vn" },
  },
  {
    icon: "warehouse",
    title: "Kho hàng",
    lines: [
      "Kho 1: Lô 8-9 khu A, CCN Đồng Dinh, Nghĩa Hành, Quảng Ngãi",
      "Kho 2: Khu CN Tịnh Phong, Tỉnh Quảng Ngãi",
    ],
  },
  {
    icon: "schedule",
    title: "Giờ làm việc",
    lines: ["Thứ 2 – Thứ 6: 07:30 – 17:00", "Thứ 7 & Chủ nhật: Nghỉ"],
  },
  {
    icon: "public",
    title: "Mạng xã hội",
    lines: ["Fanpage Facebook chính thức"],
    link: { label: "Xem Fanpage", href: "https://www.facebook.com/profile.php?id=100063621908124" },
  },
];

export const contactFormSubjects = [
  { value: "product", label: "Yêu cầu sản phẩm" },
  { value: "tech", label: "Hỗ trợ kỹ thuật" },
  { value: "partner", label: "Hợp tác kinh doanh" },
  { value: "logistics", label: "Vận tải & Logistics" },
];

export const contactMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.97107692993!2d108.7987836148463!3d15.104922689482857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169ad3b7ecafa71%3A0xd8037b5fff0862ab!2sPhuoc+Thinh+business+company!5e0!3m2!1sen!2s!4v1540990089330";

export const contactCTA = {
  title: "Cần tư vấn và báo giá nhanh chóng?",
  body: "Liên hệ ngay với chúng tôi qua điện thoại hoặc Fanpage Facebook để được hỗ trợ tận tình.",
  phone: "0974.609.103",
  phoneHref: "tel:0974609103",
  facebookHref: "https://www.facebook.com/profile.php?id=100063621908124",
};
