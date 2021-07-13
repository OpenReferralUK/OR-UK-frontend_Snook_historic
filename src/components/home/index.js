import React from 'react';
import Section from '../section/index';
import Who from './Who';
import InjectHtml from './InjectHtml';
import PropTypes from 'prop-types';
import CardList from '../cardlist/';
import Title from '../shared/title';
import { Link } from 'react-router-dom';
import ReadNextItem from '../readnext';
import TwoColumnGrid from './sidebyside/';
import Video from '../shared/video';
import Footer from '../footer/Footer';
//refactoring
//look at structure of api response for page
//remove env var setting and checks for now as I cannot pick them up on the server at the moment

function HomePage({ homePageProps, footerProps, classname }) {

    const {
        heroBanner: { body, title },
        PullQuote: { quote },
        BenefitsAndOpportunities,
        introParagraph,
        caseStudiesLink,
        benefitsSection,
        readNextLinks
    } = homePageProps;

    let caseStudyLinks = [];
    caseStudyLinks.push(caseStudiesLink);
   
    return (
        <>
       { homePageProps ? ( <main id="content" className="main-container">
            <div className="page-container">
                <Section headingText={title} bodyText={body} styleName="section" />
                <TwoColumnGrid id="right"  leftSideContent={ <InjectHtml paragraphText={introParagraph}/>}  rightSideContent={  <Video name="oruk-video" height="250" /> }/>
               
                {caseStudiesLink && caseStudiesLink.id && <p id="case-studies" className="card-content"><Link to={caseStudiesLink.url}>{caseStudiesLink.TextToDisplay}</Link></p>}&nbsp;
            </div>

            {quote && <figure role="figure" className="figure-block">
                <div className="page-container">
                    <div className="format">
                        <blockquote>{homePageProps.PullQuote.quote}</blockquote>
                        <figcaption>{homePageProps.PullQuote.Attribution && homePageProps.PullQuote.Attribution}</figcaption>
                    </div>
                </div>
            </figure>}

            <div className="page-container">
            
                {BenefitsAndOpportunities && <InjectHtml paragraphText={BenefitsAndOpportunities} />}

                {homePageProps.CommunityStatsBox && homePageProps.CommunityStatsBox.title && <Who {...homePageProps.CommunityStatsBox} />}

                {benefitsSection && benefitsSection.title && <Title title={benefitsSection.title} />}
                {benefitsSection && benefitsSection.introParagraph && benefitsSection.benefits && <p>{benefitsSection.introParagraph}</p>}
                {benefitsSection && benefitsSection.benefits &&
                    <div id={`${benefitsSection.id}_title`} className="cardgrid">

                        <CardList key={benefitsSection.id} bodyText={benefitsSection.benefits.benefitText} paragraphTextList={benefitsSection.benefits} contentImage={benefitsSection.benefits.icon} />
                    </div>
                }
                <hr />
                { readNextLinks &&  
                        ( <div>
                            <ul className="listnostyle readlinkscard">
                              {readNextLinks.map((next, index) => { 
                                return <ReadNextItem key={index} linkItem={next} styleName="listnostyle readlinksitem"/>
                                })}
                            </ul>
                        </div>)
        }
       </div>

        </main> ): <div>Loading...</div> }
        { homePageProps && footerProps && <Footer footerProps={footerProps} styleName="footer" /> }
        </>
    );
}

HomePage.propTypes = {
    links: PropTypes.array
}
export default HomePage;