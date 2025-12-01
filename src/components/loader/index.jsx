import { Spin } from "antd";

const Loader = (props) => {
	return (
		<div className={`${props.customClass}`} style={props.style}>
			<Spin size="large" />
		</div>
	);
};
export default Loader;