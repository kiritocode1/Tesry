import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
	return (
		<div className="max-w-5xl mx-auto px-8">
			<HoverEffect items={projects} />
		</div>
	);
}
export const projects = [
	{
		title: "Designer Portfolio",
		description:
			"Design Implementation of a portfolio website for a designer. The website is built using React and Tailwind CSS.",
		link: "https://kathawalearyan.in.net/",
	},
	{
		title: "Ai Live Image Creator",
		description:
			"An AI-powered image creator that uses GANs to generate images based on user input. Shows implementation using websockets and Next.js , trainsed using Pytorch and Falai. ",
		link: "https://www.linkedin.com/posts/kiritocode1_backend-ai-nextjs-activity-7151258822383218688-C6Na?utm_source=share&utm_medium=member_desktop",
	},
	{
		title: "Memories Ai Mental Health Helper",
		description:
			"A multinational technology company that specializes in Internet-related services and products.",
		link: "https://memories-ai-helper.vercel.app",
	},
	{
		title: "Image Search Algorthm using Vector databases",
		description:
			"An image search algorithm that uses vector databases to search for similar images. Shows implementation using weaviate and Next.js.",
		link: "https://github.com/kiritocode1/weaviate-vec-ai-project-image-search",
	},
];
