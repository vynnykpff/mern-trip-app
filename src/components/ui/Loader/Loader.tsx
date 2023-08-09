import {MutatingDots} from "react-loader-spinner";

export const Loader = () => {
	return (
		<>
			<MutatingDots
				height="100"
				width="100"
				color="var(--secondary-color)"
				secondaryColor="var(--secondary-color)"
				radius="12.5"
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}
				wrapperClass=""
				visible={true}
			/>
		</>
	);
};
