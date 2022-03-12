import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import './styles.css'
const Alerts = ({ locationData }) => {
  const { alerts } = locationData || [];
  // console.log(alerts);

  return (
    <div className="container-fluid p-3" id="alertDiv">
      <h3>Alerts</h3>
      <div className="container d-flex justify-content-between">
        {alerts ? (
          alerts.map((alert, index) => {
            // console.log(alert);
            return (
              <Card style={{ textAlign: "center", margin: "8px",padding:"10px" }} key={index}>
                <Card.Title>{alert.event}</Card.Title>
                <Card.Body>
                  <p>{alert.sender_name}</p>
                  <div className="d-flex justify-content-around">
                    <p>
                      Starts:{" "}
                      <Moment unix format="LLL">
                        {alert.start}
                      </Moment>{" "}
                    </p>
                    <p>
                      Ends:{" "}
                      <Moment unix format="LLL">
                        {alert.end}
                      </Moment>
                    </p>
                    
                  </div><p>{alert.description}</p>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h5 className="text-center">No Alerts</h5>
        )}
      </div>
    </div>
  );
};

export default Alerts;
