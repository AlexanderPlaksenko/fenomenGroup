import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'

import db from "../../static/db/db.json";

let tabs = db.section2.tabs.map(function (item) {
	let sub_id = item.id;
	let sub_title = item.sub_title;
	let sub_text = item.sub_text;
	return {
		"sub_id": sub_id,
		"sub_title": sub_title,
		"sub_text": sub_text,
	}
});

export default class AccordionExampleStyled extends Component {
	state = {activeIndex: 0}

	handleClick = (e, titleProps) => {
		e.preventDefault();
		const {index} = titleProps
		const {activeIndex} = this.state
		const newIndex = activeIndex === index ? -1 : index

		this.setState({activeIndex: newIndex})
	}

	render() {
		const {activeIndex} = this.state;

		return db.section2.tabs.map( (item, i) => {
			let sub_id = i;
			let sub_title = item.sub_title;
			let sub_text = item.sub_text;
			return <Accordion className={"fenomen-accordion"} key={sub_id} styled fluid>
				<Accordion.Title
					className={'accordion-title '}
					active={activeIndex === sub_id}
					index={sub_id}
					onClick={this.handleClick}
				>
					<span className={'accordion-count font-light'}>0{sub_id+1}.</span>
					<span className={'mr-auto ml-1'}>{sub_title}</span>
					<Icon name={activeIndex === sub_id ? 'minus square outline':'plus square outline'}/>
				</Accordion.Title>
				<Accordion.Content className={'accordion-content'} active={activeIndex === sub_id}>
					<p className={'accordion-text'}>
						{sub_text}
					</p>
				</Accordion.Content>
			</Accordion>
		})
	}
}