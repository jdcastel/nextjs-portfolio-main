"use effect"
import { LazyMotion, domAnimation } from "framer-motion";
import { HeadingDivider } from "components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";

export function ExperienceSection() {

	return (
		<LazyMotion features={domAnimation}>
			<section id="experience" className="section">
				<HeadingDivider title="My Experience" />
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="2010 - 2011"
						iconStyle={{ background: "rgb(16, 204, 82)", color: "#bbb" }}
						icon={<FaReact  size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Low Code Application Developer</h3>
						<h4 className="vertical-timeline-element-subtitle">Ontario Government Sep 2022 - Apr 2023</h4>
						<p>Developed a web-based project management application using the MERN stack that allowed clients to view the progress of pending tasks. Led a project team providing guidance and direction facilitating communication and collaboration to ensure timely and successful completion of the project. Collaborated with an agile team of developers and project managers to create a customized PowerApps application for over 1000 users. Contributed to the design and implementation of key features, such as data integration with existing systems and user-friendly interface design. Identified and resolved software bugs through rigorous testing and debugging. Improved the operational speed of applications by optimizing code and streamlining processes.</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="2008 - 2010"
						iconStyle={{ background: "rgb(16, 204, 82)", color: "#bbb" }}
						 icon={<FaReact  size={32} />}
					>
						<h3 className="vertical-timeline-element-title">Technical Support Specialist Volunteer</h3>
						<h4 className="vertical-timeline-element-subtitle">hispanotech.ca May 2022 - Sep 2022</h4>
						<p>Worked closely with other technical support specialists to troubleshoot and resolve complex software issues. Provided clear and concise instructions for users to navigate the software features and functions, resulting in increased user adoption and satisfaction. Developed comprehensive process documentation to increase team efficiency and facilitate future troubleshooting. Demonstrated technical proficiency and problem-solving skills in resolving complex software issues.n</p>
					</VerticalTimelineElement>
				</VerticalTimeline>

				{/* </div> */}
			</section>
		</LazyMotion>
	);
}
