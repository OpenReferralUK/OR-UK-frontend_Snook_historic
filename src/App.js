import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/errorpage/'
import GenericErrorPage from './components/shared/errorpage/errorpagegeneric';
import '../src/styles/sass/styles.scss';
import { fetchLandingPageContent, 
         fetchMainMenuItems } from './helpers/ContentConsumer';
import useOukapi from './helpers/dataFetch';
import HomePage from "./components/home";
import GenericLandingPage from "./components/genericlandingpage/GenericLandingPage";
import WhoIsUsing from "./components/whoisusing";
import GenericContentPage from './components/genericcontentpage/GenericContentPage';
import CaseStudiesLandingPage from './components/casestudies/LandingPage';
import SkipToContent from './components/header/SkipToContent';
import CookieBanner from './components/shared/cookiebanner/';
import { useCookies } from 'react-cookie';

//refactor
//pull data as needed perhaps on first call of page?
function App() {
  const [homeProps, setHomeProps] = useState({});

  const [topMenuId, setTopMenuId] = useState('');
  const [mainMenu, setMainMenu] = useState([]);

  const [errors] = useState({});  //use to confirm render component or error page

  const BASE_URL  = process.env.REACT_APP_BASE_URL;
  const ABOUT_PAGE = process.env.REACT_APP_ABOUT_PAGE_URI;
  const CONTACT_PAGE = process.env.REACT_APP_CONTACT_PAGE;
  const REACT_APP_FOOTER = process.env.REACT_APP_FOOTER;
  const REACT_COOKIE_ID = process.env.REACT_APP_COOKIE_ID;
  console.log(errors);  //take care of on refactor

  const [cookies, setCookie] = useCookies(['']);
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
      const cookieID = REACT_COOKIE_ID ? REACT_COOKIE_ID : "openreferralukorg";
      setCookie(cookieID,"capture?", { path: '/'} );
      setShowBanner(false);
  }

  const handleReject = () => {
    setShowBanner(false);
}

  useEffect(() => {
      if (cookies && cookies.hasOwnProperty("openreferralukorg")) {
          setShowBanner(false);
      }

  },[cookies, setShowBanner]);

  let [{data, isFetching, isError}] = useOukapi(`${BASE_URL}${REACT_APP_FOOTER}`)
  const footerProps = data;

  useEffect(() => {
    // fetch from strapi
    fetchLandingPageContent()
      .then((data) => {
        // set data from strapi to state vars
        console.log("homeprops", data)
        setHomeProps((data));
       // setBodyText(data.projectOverview);
        if (data.top_menu) {
          setTopMenuId(data.top_menu.id);
        }
       
      }).catch(err => console.log("do something with error as required"));

    fetchMainMenuItems()
      .then((data) => { 
        setMainMenu(data)
      });
  }, []);
  console.log('here');
  //now can use iserror instead of object keys
  return (
     !isFetching && !isError  && Object.keys(homeProps).length > 0 &&
    
    ( <div>

    <SkipToContent/>
    <CookieBanner isVisible={showBanner} onClick={{accept: handleAccept, reject: handleReject}}/>
    <Header mainMenu={mainMenu} topMenuId={topMenuId.toString()} />
        
        <Switch>
            <Route exact path="/" render={() => ( <HomePage homePageProps={homeProps} classname="main" /> )}/>
            <Route path="/about-standard" render={() => <GenericContentPage cmsLocation={ABOUT_PAGE} articleType="about" />}/>
            <Route path="/how-it-works/:slugField" render={({ match }) => <GenericContentPage cmsLocation={`/pages?slugfield=${match.params.slugField}`} articleType="page" />}/>
            <Route path="/how-it-works" render={() =>  <GenericLandingPage cmsLocation={process.env.REACT_APP_HOW_WORKS} articleType="HowItWorks"/> }/>
            <Route path="/community/case-studies/:slugField" render={({ match }) => <GenericContentPage cmsLocation={`/case-studies?slugfield=${match.params.slugField}`} articleType="CaseStudy" />} />
            <Route path="/community/case-studies" render={ () => <CaseStudiesLandingPage styleName="main"/> } />
            <Route path="/community" render={() =>  <GenericLandingPage cmsLocation={process.env.REACT_APP_COMMUNITY_PAGE} articleType="communityPage"/> }/>
            <Route path="/contact-us" render={() => <GenericContentPage cmsLocation={CONTACT_PAGE} articleType="contactUs" />} />
            <Route path="/standard-community" render={() =>  <WhoIsUsing styleName="main"/> }/>
            <Route path="/accessibility-statement" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/privacy-policy" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/terms-conditions" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/show-error"  component={GenericErrorPage} />
            <Route path="/open-referral-uk-video-transcript" render={({ location }) => <GenericContentPage cmsLocation={`/pages?slugfield=${location.pathname.substring(1)}`} articleType="page" />} />
            <Route path="/404"  component={NotFound} />
            <Redirect to="/404" />

      </Switch> 
      <Footer footerProps={footerProps} styleName="footer" />
    
    
    </div>)
    
  );
}

export default App;
