import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrMysql } from "react-icons/gr";

export function ExperienceSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="experience" className="section">
				<HeadingDivider title="My Experience" />
				{/* <div
				ref={textRef}
				tabIndex="0"
				className="my-5 text-xl"
				style={{
					transform: isTextInView ? "none" : "translateX(-200px)",
					opacity: isTextInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
				> */}
				<h1>hola</h1>
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: "rgb(33, 150, 243)", color: "#bbb" }}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
						date="2011 - present"
						iconStyle={{ background: "rgb(33, 150, 243)", color: "#bbb" }}
						icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Creative Director</h3>
						<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
						<p>
							Creative Direction, User Experience, Visual Design, Project Management, Team Leading
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="2010 - 2011"
						iconStyle={{ background: "rgb(33, 150, 243)", color: "#bbb" }}
						icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Art Director</h3>
						<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
						<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="2008 - 2010"
						iconStyle={{ background: "rgb(33, 150, 243)", color: "#bbb" }}
						 icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Web Designer</h3>
						<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
						<p>User Experience, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="2006 - 2008"
						iconStyle={{ background: "rgb(33, 150, 243)", color: "#bbb" }}
						 icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Web Designer</h3>
						<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
						<p>User Experience, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="April 2013"
						iconStyle={{ background: "rgb(233, 30, 99)", color: "#bbb" }}
						 icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">
							Content Marketing for Web, Mobile and Social Media
						</h3>
						<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
						<p>Strategy, Social Media</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="November 2012"
						iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
						 icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
						<h4 className="vertical-timeline-element-subtitle">Certification</h4>
						<p>Creative Direction, User Experience, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2002 - 2006"
						iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
						 icon={<GrMysql size={32} />}
					>
						<h3 className="vertical-timeline-element-title">
							Bachelor of Science in Interactive Digital Media Visual Imaging
						</h3>
						<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
						<p>Creative Direction, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
						 icon={<GrMysql size={32} />}
					/>
				</VerticalTimeline>

				{/* </div> */}
			</section>
		</LazyMotion>
	);
}
