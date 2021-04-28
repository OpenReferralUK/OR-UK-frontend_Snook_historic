import { useState, useEffect } from 'react';
import SideMenu from '../sidemenu';
import HtmlSection from '../htmlsection';
//import  ErrorBoundary  from '../errorboundary/'
   
const About = ({aboutProps, styleName}) => {
    const { about: { title, sections} } = aboutProps;
  
    const [sectionHeadings, setSectionHeadings] = useState([]);
  useEffect(() => {
        setSectionHeadings(sections.map(section => section.sectionHeading));
    }, [sections]);

    return (
       
    <>
   
        <main id="content" className={styleName} role="main" aria-label="main">
            <div className="flexcontainer">
            <SideMenu subMenu={sectionHeadings} />
          
            <article className="flexright">     
                <h1>{title}</h1>
                <HtmlSection sections={sections} /> 
                
                <hr/>
                {/*<LinksList list={} />*/}
            </article>
            </div>     
        </main>
       
       </>
      
    )
}
export default About;