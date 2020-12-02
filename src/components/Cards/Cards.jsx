import React from "react";
import { Card, CardTitle, Row, Col } from "reactstrap";
import styles from "./Cards.module.css";
import NumberFormat from "react-number-format"

const Cards = ({ data: { confirmed, recovered, deaths }, text }) => {
  if (!confirmed) {
    return "";
  }

  return (
    <div className={styles.container}>
      <br />
      <h2>{text}</h2>
      <Row>
        <Col xs="12" md="4">
          <Card
            body
            className="text-center"
            inverse
            style={{ borderRadius: 25, backgroundColor: "#ffa500" }}
          >
            <CardTitle>
              <h5>Positif</h5>
            </CardTitle>
					<h5>
              <NumberFormat
                value={confirmed.value ? confirmed.value : confirmed}
                thousandSeparator={true}
                displayType={"text"}
              />
          </h5>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card
            body
            className="text-center"
            inverse
            color="danger"
            style={{ borderRadius: 25 }}
          >
            <CardTitle>
              <h5>Meninggal</h5>
            </CardTitle>
						<h5>
              <NumberFormat
                value={deaths.value ? deaths.value : deaths}
                thousandSeparator={true}
                displayType={"text"}
              />
            </h5>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card
            body
            className="text-center"
            inverse
            color="success"
            style={{ borderRadius: 25 }}
          >
            <CardTitle>
              <h5>Sembuh</h5>
            </CardTitle>
						<h5>
              <NumberFormat
                value={recovered.value ? recovered.value : recovered}
                thousandSeparator={true}
                displayType={"text"}
              />
            </h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
