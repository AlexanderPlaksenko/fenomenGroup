import React from "react"

const Form = () => (
	<div>
		<form id="contactForm" className={"contact-form"} name="sentMessage" noValidate="novalidate">
			<div className="row">
				<div className="col-3">
					<div className="form-group">
						<input className="form-control" id="name" type="text" placeholder="Имя *"
						       required="required"
						       data-validation-required-message="Пожалуйста, введите своё имя"/>
						<p className="help-block text-danger"></p>
					</div>
				</div>
				<div className="col-3">
					<div className="form-group">
						<input className="form-control" id="phone" type="tel" placeholder="Телефон *"
						       required="required" data-validation-required-message="Пожалуйста, введите свой телефонный номер" />
							<p className="help-block text-danger"></p>
					</div>
				</div>
				<div className="col-3">
					<div className="form-group">
						<input className="form-control" id="email" type="email" placeholder="Email *"
						       required="required" data-validation-required-message="Пожалуйста, введите свой Email" />
							<p className="help-block text-danger"></p>
					</div>
				</div>
				<div className="col-3">
					<div id="success"></div>
					<button id="sendMessageButton" className="default-button form-button" type="submit">Получить консультацию
					</button>
				</div>
			</div>
		</form>
	</div>
)

export default Form
