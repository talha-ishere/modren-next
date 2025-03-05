"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material"; // For the Box component
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import EditUserModal from "./EditUserModal";
import { useState } from "react";
const User = () => {
  const [editModal, setEditModal] = useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#5D87FF",
      color: theme.palette.common.white,
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {/* <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard> */}

      {/* Modal Component */}
      <EditUserModal open={editModal} onClose={() => setEditModal(false)} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
              {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">
                  <Grid container spacing={1} justifyContent="flex-end">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="info"
                        size="small"
                        onClick={() => setEditModal(true)}
                      >
                        <EditIcon /> Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="error" size="small">
                        <DeleteIcon /> Delete
                      </Button>
                    </Grid>
                  </Grid>
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* <TableCell colSpan={4} sx={{ textAlign: "right" }}>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  // rowsPerPage={rowsPerPage}
                  // page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  // onPageChange={handleChangePage}
                  // onRowsPerPageChange={handleChangeRowsPerPage}
                  // ActionsComponent={TablePaginationActions}
                />
              </TableCell> */}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default User;
