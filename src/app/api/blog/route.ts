import { NextResponse } from "next/server";

const mockBlogPosts = [
  {
    id: "1",
    slug: "phat-trien-ben-vung-nong-nghiep",
    title: "Phát triển bền vững trong nông nghiệp xuất khẩu",
    excerpt: "Tìm hiểu về các phương pháp canh tác bền vững và xu hướng phát triển trong ngành nông nghiệp xuất khẩu.",
    content: `
      <p>Nông nghiệp bền vững là xu hướng tất yếu trong thời đại hiện nay...</p>
      <h2>Các phương pháp canh tác bền vững</h2>
      <p>1. Sử dụng phân bón hữu cơ...</p>
      <p>2. Áp dụng công nghệ tưới tiêu thông minh...</p>
      <h2>Xu hướng phát triển</h2>
      <p>Thị trường quốc tế ngày càng đòi hỏi cao về chất lượng sản phẩm...</p>
    `,
    coverImage: "/images/blog/sustainable-farming.jpg",
    date: "2025-06-01",
    author: {
      name: "Nguyễn Văn A",
      image: "/images/authors/nguyen-van-a.jpg"
    }
  },
  // Add more blog posts here
];

export async function GET(
  request: Request,
  { params }: { params: { slug?: string } }
) {
  if (params.slug) {
    const post = mockBlogPosts.find(p => p.slug === params.slug);
    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(post);
  }

  return NextResponse.json(mockBlogPosts);
}
