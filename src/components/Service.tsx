import Card  from 'react-bootstrap/Card';

type ServiceProps = {
  serviceName: string;
  cluster: string;
  desiredCount: number;
  taskDefinition: string;
  status: string;
  version: number;
  teamCityLink: string;
  dataDogQuery: string;
};

export function Service({
  serviceName,
  cluster,
  desiredCount,
  taskDefinition,
  status,
  version, 
  teamCityLink,
  dataDogQuery
}: ServiceProps) {
  return ( 
    <Card className="h-100">  
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <span className="fs-4">{serviceName}</span>
          <div className="flex flex-col">
            <div className="text-center flex justify-end align-middle">
              <span className="ms-3  text-right text-zinc-400 ">{cluster}</span>
            </div>
            {status === 'ACTIVE' ? (
              <span className="fs-5 text-green-600 text-right">{status}</span>
            ) : (
              <span className="fs-5 text-red-600 text-right">{status}</span>
            )}
          </div>
        </Card.Title>
        <div className="flex flex-row justify-between ">
          <div className="mt-auto flex-initial w-64">
            <div>
              <span className="fs-7">Task Definition: {taskDefinition}</span>
            </div>
            <div>
              <span className="fs-9">Version: {version}</span>
            </div>
            <div>
              <span className="fs-7">Desired: {desiredCount}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-3">
              {
                teamCityLink != 'build.foreflight.com' ? 
                <a
                href={teamCityLink}
                target="_blank"
                className="fs-7 no-underline text-white font-medium bg-blue-600 px-2 py-1.5 rounded"
              >
                TeamCity
              </a> :
              null

              }

              <a
                href={teamCityLink}
                target="_blank"
                className="fs-7 no-underline text-white font-medium bg-blue-600 px-2 py-1.5 rounded"
              >
                TeamCity
              </a>
            </div>
            <div className="">
              <a
                href={dataDogQuery}
                target="_blank"
                className="fs-7 no-underline text-white font-medium bg-purple-500 px-1 py-1.5 rounded"
              >
                DataDog
              </a>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
