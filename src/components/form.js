import React, {Component} from 'react';
import {Form, Input} from 'semantic-ui-react-form-validator';
import {Button, Message, Transition} from 'semantic-ui-react';
import axios from 'axios';

class FeedbackForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameValue: '',
			telValue: '',
			emailValue: '',
			mailSent: false,
			visible: false,
			hideEmail: false
		};
	}

	handleSubmit = () => {
		axios({
			method: 'post',
			url: `http://fenomen.group/emailSubmit/emailSubmit.php`,
			headers: {
				'Content-Type': '*',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': '*',
				"Access-Control-Allow-Origin": "*",
			},
			data: this.state
		})
			.then(response => {
				this.setState({
					mailSent: true
				});
				console.log('true');
			})
			.catch(error => {
				this.setState({
					mailSent: false
				});
				console.log('false');
			});

		this.toggleVisibility();
		this.setState({
			nameValue: '',
			telValue: '',
			emailValue: '',
		});
		setTimeout(() => {
			this.toggleVisibility()
		}, 3200)
	};

	toggleVisibility = () =>
		this.setState((prevState) => ({visible: !prevState.visible}))

	render() {
		const {visible} = this.state;
		const hideEmail = this.props.hideEmail;
		return (
			<div className={'w-full'}>
				<Form className={"contact-form"}
				      ref="form"
				      onSubmit={this.handleSubmit}
				>
					<div className="row">
						<div className="col-3">
							<div className="form-group">
								<Input className="form-control"
								       type="text"
								       placeholder="Имя *"
								       onChange={(e) => {
									       this.setState({nameValue: e.target.value})
								       }}
								       value={this.state.nameValue}
								       validators={['required']}
								       errorMessages={['Пожалуйста, введите своё имя']}/>
							</div>
						</div>
						<div className="col-3">
							<div className="form-group">
								<Input className="form-control"
								       type="tel"
								       placeholder="Телефон *"
								       onChange={(e) => {
									       this.setState({telValue: e.target.value})
								       }}
								       value={this.state.telValue}
								       validators={['required']}
								       errorMessages={['Пожалуйста, введите свой телефонный номер']}/>
							</div>
						</div>
						{hideEmail ? ''
						: <div className="col-3">
								<div className="form-group">
									<Input className="form-control"
									       type="text"
									       placeholder="Email *"
									       onChange={(e) => {
										       this.setState({emailValue: e.target.value})
									       }}
									       value={this.state.emailValue}
									       validators={['required', 'isEmail']}
									       errorMessages={['Пожалуйста, введите свой Email', 'Должен быть Email формат']}/>
								</div>
							</div>}
						<div className="col-3">
							<Button className="default-button form-button">Получить
								консультацию
							</Button>
						</div>
					</div>
				</Form>
				<Transition visible={visible} animation='fade up' duration={500}>
					<Message
						className={'form-info'}
						info
						compact
						header='Запрос отправлен'
						content='Мы свяжемся с вами в скором времени!'
					/>
				</Transition>
			</div>
		);
	}
}

export default FeedbackForm
