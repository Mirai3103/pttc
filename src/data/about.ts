export const aboutHero = {
  title: "Về Chúng Tôi",
  subtitle:
    "Đối tác tin cậy trong cung cấp giải pháp công nghệ, xúc tác và hóa chất chuyên dụng cho ngành hóa dầu Việt Nam.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCMP5pQw4u727_MSAZiJSMuAtZp213_uzSsxTi1iC4C1fN8BgzYjLBaMHD9ShGPKdFcz__9q9B7CWeBlQY4_tjvIVL8eAErrTM-XxwluMFTe5u2PbACD8oASL5m0QONcL0wVtEuVxuYi_HGIYGMtpS8lVCMtBWb5v6ogVtMNw-DiCPyxGeMPsT5ThOMBEpmUg-mB1y10S4pb7hoDXk3lJtevsfjKGwknUTqTvx3YuVdiRhzTI6kj3420_e2w0gs9t1_R4Nr-s1mdEY",
};

export const aboutIntro = {
  title: "Lịch sử & Vị thế",
  paragraphs: [
    "CÔNG TY CỔ PHẦN CÔNG NGHỆ HÓA DẦU VIỆT NAM (PTTC JSC) được thành lập với mục tiêu trở thành cầu nối vững chắc giữa các nhà cung cấp công nghệ hàng đầu thế giới và các nhà máy lọc hóa dầu tại Việt Nam.",
    "Trải qua quá trình phát triển, chúng tôi tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp tối ưu về xúc tác, hóa chất và vật liệu chuyên dụng. Với đội ngũ chuyên gia giàu kinh nghiệm, PTTC JSC không chỉ cung cấp sản phẩm mà còn mang đến những tư vấn kỹ thuật sâu sắc, giúp tối ưu hóa hiệu suất và đảm bảo an toàn vận hành cho các công trình công nghiệp quy mô lớn.",
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAeT7xuAD0bzbYCLe2MZfJwk_7Fifs-Ff-N38JJ5SHjz39xxlTYfqQFTHUEyoRmGnykvF6lXcjp2U3jhjRnRihkt3biTuxs-0hf0aSI3zgOejYWXcSX6xkQT_zXmMB0xoLR_9AN67InH0BBlWzekvrB-GIv3fUIUmOB2808OGC4mJJeBCwRC1mAKNU1Bs_wZQ7LUV0YynQTJl1_mHX-HXuSDB6hdg8Cj1HD23pZA5pQKQT_uSdVr51qX6uOqKf7fmx4l7R_o5ak98Y",
  imageAlt: "Kỹ sư xem xét bản thiết kế",
};

export interface MissionVisionItem {
  icon: string;
  title: string;
  description: string;
}

export const missionVision: MissionVisionItem[] = [
  {
    icon: "rocket_launch",
    title: "Sứ mệnh",
    description:
      "Cung cấp các sản phẩm và giải pháp công nghệ tiên tiến nhất, góp phần nâng cao hiệu quả sản xuất, đảm bảo an toàn và phát triển bền vững cho ngành công nghiệp hóa dầu tại Việt Nam. Chúng tôi cam kết đồng hành cùng sự thành công của đối tác và khách hàng.",
  },
  {
    icon: "visibility",
    title: "Tầm nhìn",
    description:
      "Trở thành nhà cung cấp và tư vấn kỹ thuật hàng đầu trong khu vực, thiết lập tiêu chuẩn mới về chất lượng dịch vụ và độ tin cậy trong lĩnh vực xúc tác, hóa chất và thiết bị công nghiệp nặng vào năm 2030.",
  },
];

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: "verified",
    title: "Uy tín",
    description: "Giữ vững cam kết với khách hàng, đối tác trong mọi hoàn cảnh.",
  },
  {
    icon: "workspace_premium",
    title: "Chất lượng",
    description: "Cung cấp sản phẩm và dịch vụ đạt tiêu chuẩn quốc tế khắt khe nhất.",
  },
  {
    icon: "lightbulb",
    title: "Sáng tạo",
    description: "Không ngừng đổi mới, tìm kiếm giải pháp công nghệ tối ưu hóa hiệu suất.",
  },
  {
    icon: "handshake",
    title: "Hợp tác",
    description: "Xây dựng mối quan hệ bền vững, cùng phát triển với các đối tác chiến lược.",
  },
];
