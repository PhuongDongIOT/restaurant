import { FC } from "react";

interface ArticleContentProps {
  title: string;
  content: string;
}

const ArticleContent: FC<ArticleContentProps> = ({ title, content }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-extrabold text-gray-900 leading-tight">{title}</h3>
      <div className="prose prose-lg text-gray-700 leading-relaxed mt-1" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticleContent;
