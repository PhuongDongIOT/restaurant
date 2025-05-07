import { Metadata } from 'next';
import { fetchAndCacheProductDetail } from '@/lib/caches/products';
import ProductOverviewPage from '@/modules/products/pages/product-overview.page';

export const metadata: Metadata = {
  title: 'Bánh cuốn Anh Vũ - Thơm ngon trứ danh Hà Nội',
  description: 'Bánh cuốn Anh Vũ được làm từ bột gạo nguyên chất, tráng mỏng mềm mịn, kết hợp với chả quế và nước mắm pha chuẩn vị truyền thống.',
  openGraph: {
    title: 'Bánh cuốn Anh Vũ - Thơm ngon trứ danh Hà Nội',
    description: 'Thưởng thức hương vị bánh cuốn truyền thống tại Bánh cuốn Anh Vũ – mỏng nhẹ, mềm dai, ăn kèm chả quế & nước mắm chua ngọt.',
    url: 'https://banhcuonanhvu.com/product',
    siteName: 'Bánh cuốn Anh Vũ',
    images: [
      {
        url: 'https://banhcuonanhvu.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Bánh cuốn Anh Vũ kèm chả quế và nước mắm',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bánh cuốn Anh Vũ - Đặc sản Hà Nội đậm vị',
    description: 'Món bánh cuốn mềm mịn, thơm ngon – lựa chọn hoàn hảo cho bữa sáng Việt!',
    images: ['https://banhcuonanhvu.com/logo.png'],
  },
};

type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await fetchAndCacheProductDetail(id);  
  return (
    <ProductOverviewPage product={data} />
  );
}
