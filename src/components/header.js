import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import { Modal } from 'semantic-ui-react'
import logo from "../../static/images/logo.png"
import db from "../../static/db/db.json"
import FeedbackForm from "./form";

class Header extends Component {
	constructor(props) {
		super(props);
	}
	state = { modalOpen: false, showEmail: false};

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });
	render() {
		let {siteTitle} = this.props;
		return (
			<header className={"row"}>
				<div className="container">
					<div className={"top-menu"}>
						<div className={"logo col-4"}>
							<Link to="/" title={"Fenomen.group"}>
								<img alt={"Logo"} src={logo}/>
							</Link>
						</div>

						<div className={"get-started col-8"}>
							<a href={["tel:" + db.header.phone]} className={"phone"}>
								{db.header.phone}
							</a>
							<div className={"callback button"}>
								<Modal
									trigger={<div onClick={this.handleOpen} className={"default-button"}>{db.header.text}</div>}
									open={this.state.modalOpen}
									onClose={this.handleClose}
									basic
									closeIcon
									className={'callback-modal-wrapper'}
									size='mini'
								>
									<Modal.Content className={'callback-modal'}>
										<FeedbackForm hideEmail={true}/>
									</Modal.Content>
								</Modal>
							</div>
						</div>
					</div>
				</div>

				<Modal/>
			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
