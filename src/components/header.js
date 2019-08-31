import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"
import db from "../../static/db/db.json"

const Header = ({siteTitle}) => (
	<header className={"row"}>
		<div className="container">
			<div className={"top-menu"}>
				<div className={"logo col-4"}>
					<Link to="/" title={"Fenomen.group"}>
						<img alt={"Logo"} src={logo}/>
					</Link>
				</div>

				<div className={"get-started col-8"}>
					<a href={["tel:"+db.header.phone]} className={"phone"}>
						{db.header.phone}
					</a>
					<div className={"callback button"}>
						<button className={"default-button"}>{db.header.text}</button>
					</div>
				</div>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
