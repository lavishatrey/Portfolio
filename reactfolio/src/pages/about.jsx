import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								{/* Education Section */}
								{INFO.about.education && INFO.about.education.length > 0 && (
									<div className="education-section">
										<h3 className="education-title">Education</h3>
										<ul className="education-list">
											{INFO.about.education.map((edu, index) => (
												<li key={index} className="education-item">
													<strong>{edu.institution}</strong> — {edu.degree}
													<br />
													<small>
														{edu.location} | {edu.duration}
													</small>
													{edu.details && (
														<>
															<br />
															<span>{edu.details}</span>
														</>
													)}
												</li>
											))}
										</ul>
									</div>
								)}

								{/* Skills Section */}
								{INFO.about.technicalSkills && (
									<div className="skills-section">
										<h3 className="skills-title">Technical Skills</h3>
										<ul className="skills-list">
											<li>
												<strong>Languages:</strong>{" "}
												{INFO.about.technicalSkills.languages.join(", ")}
											</li>
											<li>
												<strong>Problem Solving:</strong>{" "}
												{INFO.about.technicalSkills.problemSolving.join(", ")}
											</li>
											<li>
												<strong>Web Technologies:</strong>{" "}
												{INFO.about.technicalSkills.webTechnologies.join(", ")}
											</li>
											<li>
												<strong>Databases:</strong>{" "}
												{INFO.about.technicalSkills.databases.join(", ")}
											</li>
											<li>
												<strong>Tools/Platforms:</strong>{" "}
												{INFO.about.technicalSkills.tools.join(", ")}
											</li>
										</ul>
									</div>
								)}
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
