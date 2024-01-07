import FirstSection from "./Single_Parts/FirstSection/FirstSection";
import SecondSection from "./Single_Parts/SecondSection/SecondSection";
import ThirdSection from "./Single_Parts/ThirdSection/ThirdSection";
import FourthSection from "./Double_part/FourthSection/FourthSection";
import FifthSection from "./Double_part/FifthSection/FifthSection";
import Sixsection from "./Double_part/SixSection/Sixsection";
import YouTube from "./YouTube/YouTube";
import DFristSection from "./Double_part/DFirstSection.jsx/DFirstSection"

import React from 'react'
import Slider from "./Slider/Slider";

function Main() {
  return (
		<>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<DFristSection />
			<FourthSection />
			<FifthSection />
			<Sixsection />
			<Slider/>
			<YouTube />
		</>
	);
}

export default Main