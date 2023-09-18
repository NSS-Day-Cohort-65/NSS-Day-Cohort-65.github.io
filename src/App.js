import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import StudentList from './components/StudentList';
import TechList from './components/TechList';
import DemoDayCTA from './components/DemoDayCTA';
import Footer from './components/Footer';

function App() {
  const [cohort, setCohort] = useState({});
  const navBarRef = useRef();
  const heroRef = useRef();

  useEffect(() => {
    const cohortId = process.env.REACT_APP_COHORT_ID;
    const api = process.env.REACT_APP_API;

    fetch(`${api}/cohorts/${cohortId}`).then(res => res.json()).then(data => setCohort(data));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [navBarRef])

  const handleScroll = (event) => {
    const heroBodyRect = heroRef.current.getBoundingClientRect();
    const body = document.getElementsByTagName('body')[0];
    if (heroBodyRect.height <= Math.abs(heroBodyRect.top)) {
      navBarRef.current.classList.add('is-fixed-top');
      navBarRef.current.classList.add('is-warning');
      navBarRef.current.classList.add('is-bold');
      body.classList.add('has-navbar-fixed-top');
    } else {
      navBarRef.current.classList.remove('is-fixed-top');
      navBarRef.current.classList.remove('is-warning');
      navBarRef.current.classList.remove('is-bold');
      body.classList.remove('has-navbar-fixed-top');
    }
  }


  return (
    <div className="App has-background-light">
      <Hero
        cohortName={cohort.name}
        programName={cohort.program?.name}
        demoDate={cohort.demo_day_readable}
        demoDayLink={cohort.demo_day_link}
        navBarRef={navBarRef}
        heroRef={heroRef}
      />
      <StudentList students={cohort.students} />
      <hr className="container has-background-danger" />
      <TechList techs={cohort.techs} />
      <hr className="container has-background-danger" />
      <DemoDayCTA demoDate={cohort.demo_day_readable} demoDayLink={cohort.demo_day_link} />
      <Footer />
    </div>
  );
}

export default App;
