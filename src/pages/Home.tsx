import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useOktaAuth } from '@okta/okta-react';

import { Service } from '../components/Service';


export function Home() {
  const [env, setEnv] = useState<string>('Environment');
  let storage = window.localStorage;
  const { authState, oktaAuth } = useOktaAuth();
  console.log(authState)

  const logout = async () => oktaAuth.signOut();

  // if (envStore != 'Environment') {
  //   setEnv(envStore);
  // }
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  //const [reload, setReload] = useState(false);

  function localEnv() {
    if (localStorage.getItem('env') === null) {
      localStorage.setItem('env', env)
    }
    const envStore = localStorage.getItem('env')

    console.log(envStore)
  }

  const loadData = async () => {
    // Till the data is fetch using API
    // the Loading page will show.
    setLoading(true);
    const key: any = import.meta.env.VITE_API_ACCESS_KEY
    const myHeaders: Headers = new Headers();
    // add content type header and API key to object
    //myHeaders.append('X-Api-Key', process.env.VITE_API_ACCESS_KEY);
    myHeaders.append('X-Api-Key', key);
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions: object = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ env: env }),
      redirect: 'follow'
    };
    //const api_invocation_link: string = process.env.VITE_API_INVOKE_URL;
    const api_invocation_link: any = import.meta.env.VITE_API_INVOKE_URL;
    const response: any = await fetch(api_invocation_link, requestOptions);
    const res_json: any = await response.json();
    const res_body: string = res_json.body
    const res = await JSON.parse(res_body);
    const newArrayDataOfObject: Array<string | string[]> = Object.entries(res);
    setData(newArrayDataOfObject);
    setLoading(false);
  };

  useEffect(() => {
    // Call the function
    if (env != 'Environment') {
      // Run every minute
      loadData();
      localEnv();
      //setInterval(loadData(), 20*1000);

      //setReload(true)
    }
  }, [env]);

  const handleSelect = (e: string) => {
    setEnv(e);
    return e;
  };
  console.log(env == 'Environment', env)
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between pb-2">
          <div>
            <h1>ECS Dashboard</h1>
          </div>
          <button onClick={logout}>Logout</button>
          <div className="flex flex-row p-2 align-middle justify-center">
            <div>
              
              {
                env == 'Environment' && loading == false ? <Button type="button"
                size='sm'  className='mr-3 h-9' disabled>
                Refresh
              </Button> : <Button type="button" onClick={()=> loadData()}
                size='sm' className='mr-3 h-9'>
                Refresh
              </Button>
              } 
            </div>
            
            <div>

              <DropdownButton
                title={env}
                id="dropdown-menu-align-right"
                onSelect={(eventKey: any) => handleSelect(eventKey)}
              >
                <Dropdown.Item eventKey="Apollo">Apollo</Dropdown.Item>
                <Dropdown.Item eventKey="QA">QA</Dropdown.Item>
                <Dropdown.Item eventKey="Prod Account">
                  Prod Account
                </Dropdown.Item>
                <Dropdown.Item eventKey="Production">Production</Dropdown.Item>
                <Dropdown.Item eventKey="AviationCloud QA">
                  AviationCloud QA
                </Dropdown.Item>
                <Dropdown.Item eventKey="AviationCloud Production">
                  AviationCloud Production
                </Dropdown.Item>
                <Dropdown.Item eventKey="Flight Deck Pro">
                  Flight Deck Pro
                </Dropdown.Item>
                <Dropdown.Item eventKey="Foreflight Data">
                  Foreflight Data
                </Dropdown.Item>
                <Dropdown.Item eventKey="GIS">GIS</Dropdown.Item>
                <Dropdown.Item eventKey="Root">Root</Dropdown.Item>
                <Dropdown.Item eventKey="Mapping">Mapping</Dropdown.Item>
                <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                <Dropdown.Item eventKey="MFB">MFB</Dropdown.Item>
                <Dropdown.Item eventKey="Prod Flight">Prod Flight</Dropdown.Item>
                <Dropdown.Item eventKey="Prod Security">
                  Prod Security
                </Dropdown.Item>
                <Dropdown.Item eventKey="Skylab">Skylab</Dropdown.Item>
                <Dropdown.Item eventKey="Tools">Tools</Dropdown.Item>
                <Dropdown.Item eventKey="MobileOps">MobileOps</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className="pu-1">
          <Row md={2} xs={1} lg={3} className="g-3">
            {env != 'Environment' && loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              data.map((item) => {
                return (
                  <Col key={item[1].tableID}>
                    <Service {...item[1]} />
                  </Col>
                );
              })
            )}
          </Row>
        </div>
      </div>
    </>
  );
}
