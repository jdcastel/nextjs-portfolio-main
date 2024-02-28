"use client";

import { WelcomeSection, AboutSection, ExperienceSection, TechnologiesSection, ProjectsSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
}
