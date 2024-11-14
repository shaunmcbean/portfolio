import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

// Skills section component
export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<SkillCard
							key={index}
							title={value.title}
							description={value.description}
							image={value.image}
							years={value.years}
							link={value.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

// Projects section component
export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>
				<h3 className="text-light ">(in progress)</h3>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<ProjectCard
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							link={value.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

// SkillCard Component - for the Skills section
export const SkillCard = ({ title, description, image, years, link }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 skill-card" style={{ width: '20rem' }}>
			<img src={image} className="card-img-top rounded" alt={title} />
			<div className="card-body">
				<h4 className="card-title text-primary">{title}</h4>
				<h6 className="card-years">{years}</h6>
				<p className="card-text">{description}</p>
				{link && (
					<Link href={link}>
						<a className="btn btn-outline-primary">Learn More</a>
					</Link>
				)}
			</div>
		</div>
	);
};

// ProjectCard Component - for the Projects section
export const ProjectCard = ({ title, description, icons, link }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 project-card" style={{ width: '25rem' }}>
			<div className="card-body">
				<h4 className="card-title text-primary">{title}</h4>
				<p className="card-text">{description}</p>
				<div className="d-flex justify-content-end">
					{icons &&
						icons.map((icon, index) => (
							<Link key={index} href={icon.link}>
								<a target="_blank" rel="noreferrer">
									<FontAwesomeIcon className="icon-style mx-1" icon={icon.icon} size="2x" />
								</a>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
