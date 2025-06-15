
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const components: Components = {
    h1: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h1 id={id} className="scroll-mt-20">{children}</h1>;
    },
    h2: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h2 id={id} className="scroll-mt-20">{children}</h2>;
    },
    h3: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h3 id={id} className="scroll-mt-20">{children}</h3>;
    },
    h4: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h4 id={id} className="scroll-mt-20">{children}</h4>;
    },
    h5: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h5 id={id} className="scroll-mt-20">{children}</h5>;
    },
    h6: ({ children }) => {
      const text = children?.toString() || '';
      const id = generateId(text);
      return <h6 id={id} className="scroll-mt-20">{children}</h6>;
    },
  };

  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  );
};
