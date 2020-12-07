import React from 'react';
import Collapsible from 'react-collapsible';

import './WorkExperience.scss';

const WorkExperience = () => {
    return (
       <div>
          <h1>Work Experience</h1>

          <Collapsible trigger="Maverick Software Consulting">
             <p>Testing Java software using Selenium</p>
             <p>Used AGILE to develop tests</p>
             <p>Participated in weekly code reviews</p>
          </Collapsible>

          <Collapsible trigger="Iowa State University Department of Psychology">
             <p>Worked with a ticketing system</p>
             <p>Problem solve in real-time when issues arose</p>
             <p>Built a deeper understanding on computer architecture</p>
          </Collapsible>

          <Collapsible trigger="Security Coverage">
             <p>Help callers solve their Internet, phone, and Television issues</p>
             <p>Report to a ticketing system.</p>
          </Collapsible>

       </div>
    );
}

export default WorkExperience;
