// data/constants.ts
import { FoodItem, Feature, TeamMember, Slide } from "@/components/types";

export const FOOD_ITEMS: FoodItem[] = [
  {
    image: "https://via.placeholder.com/300x200?text=Salad+Rau+Củ",
    title: "Salad Rau Củ",
    description: "Rau tươi giòn, đầy vitamin, bé ăn là mê!",
  },
  {
    image: "https://via.placeholder.com/300x200?text=Cơm+Gà+Nướng",
    title: "Cơm Gà Nướng",
    description: "Gà nướng thơm lừng, mềm ngon, đủ chất.",
  },
  {
    image: "https://via.placeholder.com/300x200?text=Chè+Đậu+Xanh",
    title: "Chè Đậu Xanh",
    description: "Món tráng miệng ngọt ngào, bổ dưỡng.",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "🥕",
    title: "Thực Đơn Ngon Miệng",
    description:
      "Các món ăn đa dạng, đầy màu sắc và đủ dinh dưỡng, được thiết kế riêng cho các bạn nhỏ.",
  },
  {
    icon: "👆",
    title: "Đăng Ký Dễ Dàng",
    description:
      "Bố mẹ chỉ cần vài cú chạm là có thể chọn món và đăng ký suất ăn cho bé thật nhanh chóng.",
  },
  {
    icon: "📈",
    title: "Bé Khỏe Bé Lớn",
    description:
      "Theo dõi sự phát triển của bé qua biểu đồ chiều cao, cân nặng thật trực quan và dễ thương.",
  },
  {
    icon: "💌",
    title: "Lời Nhắn Yêu Thương",
    description:
      "Nhận thông báo và xem hình ảnh bữa ăn hàng ngày của bé từ nhà trường.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar: "👩‍🍳",
    title: "Các Cô Bếp",
    description: "Những đầu bếp tài ba luôn nấu những món ăn ngon nhất.",
  },
  {
    avatar: "👨‍🏫",
    title: "Thầy Cô Giáo",
    description: "Luôn đồng hành và chăm sóc bé trong giờ ăn.",
  },
  {
    avatar: "👨‍👩‍👧‍👦",
    title: "Bố Mẹ",
    description: "Luôn dành những điều tốt đẹp nhất cho các con yêu.",
  },
];

export const slides: Slide[] = [
  {
    title: "Bữa Ăn Vui Vẻ",
    subtitle: "Bé Khỏe Mạnh Hơn!",
    description:
      "Bố mẹ dễ dàng đăng ký bữa ăn ngon và đủ chất cho bé mỗi ngày.",
    image: "/fptschool.jpg",
  },
  {
    title: "Thực Đơn Đa Dạng",
    subtitle: "Dinh Dưỡng Cân Bằng!",
    description:
      "Khám phá các món ăn hấp dẫn được chế biến theo tiêu chuẩn dinh dưỡng.",
    image: "/thực đơn.png",
  },
  {
    title: "An Toàn Vệ Sinh",
    subtitle: "Chất Lượng Hàng Đầu!",
    description: "Cam kết thực phẩm sạch, an toàn cho sức khỏe của bé yêu.",
    image: "https://via.placeholder.com/400x300?text=Slide+3",
  },
  {
    title: "Dịch Vụ Tận Tâm",
    subtitle: "Phục Vụ Chu Đáo!",
    description: "Đội ngũ chuyên nghiệp luôn sẵn sàng hỗ trợ bố mẹ 24/7.",
    image: "https://via.placeholder.com/400x300?text=Slide+4",
  },
  {
    title: "Giá Cả Hợp Lý",
    subtitle: "Tiết Kiệm Chi Phí!",
    description:
      "Những bữa ăn chất lượng cao với mức giá phù hợp với mọi gia đình.",
    image: "https://via.placeholder.com/400x300?text=Slide+5",
  },
];
