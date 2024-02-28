import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

//const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });	
	return (
		<LazyMotion features={domAnimation}>
			<section id="project" className="section">
				 <HeadingDivider title="Latest projects" />
				<h1
				ref={textRef}
				tabIndex="0"
				className="my-5 text-xl"
				style={{
					transform: isTextInView ? "none" : "translateX(-200px)",
					opacity: isTextInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
				>soy projectos</h1>
			</section> 
		</LazyMotion>
	);
}
