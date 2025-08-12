import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38Fggz5ieeBt6JezNqSsuXa8na5rbHPDuaw&s"
								alt="SCSE"
								className="work-image"
							/>
							<div className="work-title">Society of Computer Science and Engineering</div>
							<div className="work-subtitle">
								WEB TEAM MEMBER
							</div>
							<div className="work-duration">2024 - present</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACgg3_ivaf-eGTSFJwO4BZQ_Av94hxuODQA&s"
								alt="QUOD INVICTA"
								className="work-image"
							/>
							<div className="work-title">QUOD INVICTA</div>
							<div className="work-subtitle">
								CAPTAIN
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
