import { MDXRemote as MDXRemoteLib } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface Props {
  source: string;
}

const components = {
  // Add custom components here if needed
};

export function MDXRemote({ source }: Props) {
  return (
    <MDXRemoteLib
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeHighlight, rehypeSlug],
        },
      }}
    />
  );
}
