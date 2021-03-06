import React from "react";
import "./Toppings.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Icon } from "@material-ui/core";

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData("MARGHERITA [BIG 10'']", 350.0),
  createData("DOUBLE CHEEZE MARGHERITA [BIG 10'']", 350.0),
  createData("FARM HOUSE [BIG 10'']", 350.0),
  createData("PEPPY PANEER [BIG 10'']", 350.0),
  createData("MEXICAN GREEN WAVE [BIG 10'']", 350.0),
];

function Toppings() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  color: "#787878",
                }}
              >
                Toppings
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  color: "#787878",
                }}
              >
                Price
              </TableCell>
              {/* <TableCell></TableCell> */}
              <TableCell align="right">
                <div className="add-items">
                  <span className="add-toppings">Add Toppings</span>
                  <Icon className="add-icon" style={{ fontSize: "35px" }}>
                    add_circle
                  </Icon>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>

                <TableCell align="right">
                  <Icon className="edit-icon">edit_circle</Icon>
                </TableCell>
                <TableCell align="center">
                  <Icon className="del-icon">delete_circle</Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Toppings;
