import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TimeSheet from './Timesheet';

const  SheetsTabs=()=> {
  return (
    <Tabs
      defaultActiveKey="current-week"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="current-week" title="Current-Week">
        <TimeSheet/>
      </Tab>
      <Tab eventKey="submitted" title="Submitted-Sheets">
        No Submitted Sheets Data Available
      </Tab>
      <Tab eventKey="pending" title="Pending" >
        No Pending Sheets Available to Display 
      </Tab>
      <Tab eventKey="rejected" title="Rejected" >
        No Un-Submmited Sheets Available to Display 
      </Tab>
    </Tabs>
  );
}

export default SheetsTabs;