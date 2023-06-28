import React from "react";
import PropTypes from "prop-types";


//create component for numbers
const Counter = (props) => {
	
	return (
		<div className="Counter">
			<div className="Icon"><i class="fa-regular fa-clock"></i></div>
			<div className="HundredThousands">{props.hundredthousands}</div>
			<div className="TenThousands">{props.tenthousands}</div>
			<div className="Thousands">{props.thousands}</div>
			<div className="hundreds">{props.hundreds}</div>
			<div className="tens">{props.tens}</div>		
			<div className="unit">{props.unit}</div>	
		</div>
	);
};

export default Counter;