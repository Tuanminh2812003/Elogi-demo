import "./LayoutDefault.scss";

import SectionMain from "../../Components/SectionMain";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import Section5 from "../../Components/Section5";
import Section6 from "../../Components/Section6";
import Section7 from "../../Components/Section7";
import Footer from "../../Components/Footer";

function LayoutDefault(){
    return(
        <>
            <SectionMain/>
            <Section1 />
            <Section2 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer/>
        </>
    )
}

export default LayoutDefault;