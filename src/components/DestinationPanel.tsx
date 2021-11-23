import { useEffect, useState } from "react";

type DestinationPanelProps = {
  destination: string,
}

const DestinationPanel = ({destination}: DestinationPanelProps) => {
  const [data, setData] = useState({"CAN": '', "US": '', "MEX": '', "BLZ": '', "GTM": '', "SLV": '', "HND": '', "NIC": '', "CRI": '', "PAN": ''});
  const [searchingRoute, setSearchingRoute] = useState(['']);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const data = await response.json();
      setData(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if(destination) {
      let src: string = destination;
      let route: Array<string> = [];
      let dataToSearch: { [key: string] : string} = data;
      let isRouteSearching: boolean = true;
      
      while(isRouteSearching) {
        if(src === 'US') {
          isRouteSearching = false;
        }
        for(let key in dataToSearch) {
          if(key === src) {
            route.push(src);
            src = dataToSearch[key];
            break;
          }
        }
      }
      setSearchingRoute(route.reverse());
    }
  }, [destination, data]);
  
  
  return (
    <>
      <h1 className="panel-header">Route from US to {destination ? destination : "..."}</h1>
      <ul className="panel-content">{
        searchingRoute[0] && searchingRoute.map((route, index) => (
          <li key={index}>{route}</li>
        ))
      }</ul>
    </>
  )
}

export default DestinationPanel;