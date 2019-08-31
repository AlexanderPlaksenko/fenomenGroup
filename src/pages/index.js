import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import Form from "../components/form"
import AccordionExampleStyled from "../components/accordion"

import db from "../../static/db/db.json";

const IndexPage = () => (
	<Layout>
		<SEO title="ФЕНОМЕН - помощник руководителя отдела продаж"/>

		<div className={"page-header"}>
			<div className="container">
				<div className="row">
					<div className={"col-12 page-header-hero"}>
						<h1 className={"text-left font-semibold"}>{db.section1.title}</h1>
						<div className={"text-left first-section-list"}>
							<p>&mdash; {db.section1.text1}</p>
							<p>&mdash; {db.section1.text2}</p>
							<p>&mdash; {db.section1.text3}</p>
						</div>
					</div>
{/*					<div className={"col-6"}>
						<img alt={"Dashboard"} src={featureImage}/>
					</div>*/}
				</div>
				<div className="row">
					<Form/>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-12">
					<h2 className={"text-4xl"}>{db.section2.title}</h2>
					<p className={"text-3xl"}>{db.section2.sub_title}</p>
					<div className="row">
						<AccordionExampleStyled/>
					</div>
				</div>
			</div>

		</div>

		<div className={"container"}>
			<div className={"features"}>
				<div className={"feature__item"}>
					<div className={"row"}>
						<div className={"col-12"}>
							<div className={"feature__content"}>
								<h2>{db.section3.title}</h2>
								<p className={"mb-5"}>&mdash; {db.section3.text}</p>
								<p className={"mb-5"}>&mdash; {db.section3.text1}</p>
								<p className={"mb-5"}>&mdash; {db.section3.text3}</p>
								<p className={"mb-5"}>&mdash; {db.section3.text4}</p>
								<p className={"mb-5"}>&mdash; {db.section3.text5}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default IndexPage
