import Layout from '../components/Layout'
import Employeesaction from "./employeesAction";
import SortIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import axios from "axios";
import styles from "../styles/EmployeeList.module.css";
import {Url } from "../constants/Global"

import { useRouter } from "next/router";
function Employee() {
 
  const deleteEmployees = async (id) => {
   
    let text = "Delete Employees List ";
    if (confirm(text) == true) {
      let fetchData = await axios.delete( Url+`/api/employees/${id}`);
      router.push("/Employees");
    } else {
      console.log( "You canceled!")
    }
   
  };


const columns = [
  {
      name: 'Employees ID',
      selector: row => row.id,
      width: '100px',
      sortable: true,
  },

 
  {
    name: 'First Name',
    selector: row => row.FirstName,
    width: '115px',
    sortable: true,
},
{
    name: ' Last Name',
    selector: row => row.LastName,
    width: '115px',
    sortable: true,
},
{
    name: 'UUID',
    selector: row => row.uuid,
    width: '200px',
    sortable: true
},
{
    name: 'DOB',
    selector: row => row.DOB,
    width: '200px',
    sortable: true
},
{
    name: 'Emp Role ID',
    selector: row => row.emp_role_id,
    width: '116px',
    sortable: true
},
{
    name: 'Email _ID',
    selector: row => row.email_id,
    width: '190px',
    sortable: true
},
{
    name: 'Created',
    selector: row => row.created,
    width: '195px',
    sortable: true
},
  {
        name: 'Edit',
        button: true,
        cell: (row) => <div className={styles.update}><Link  href={`/employees/${row.id}`}>Update</Link></div>,
    },
  {
        name: 'Delete',
        
        button: true,
        cell: (row) => <div className={styles.delete} onClick={() => deleteEmployees(row.id)}>DELETE</div>,
    },


];
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState();
  const [perPage, setPerPage] = useState("2");
  const router = useRouter();

  useEffect(() => {

    fetchData(1,perPage)
  }, [perPage])

  const fetchData = async (page,limit) => {
    fetch(Url+`/api/employees?page=${page}&limit=${limit}`,{
      method:'get',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.employeesData);
          setTotalRows(result.totalPages);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handlePageChange = (page) => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage) => {
    setPerPage(newPerPage);
  }
  return (
    <div>
       <Layout>
       <Grid item xs={12} sm={8} md={5}  elevation={6} square>
       <div class="rdt_Pagination">

<DataTable
title="Employees"
  columns={columns}
  data={items}
  pagination
  paginationServer
  paginationRowsPerPageOptions={[2,4,6,8,10]}
  paginationTotalRows={totalRows}
  onChangePage={handlePageChange}
  onChangeRowsPerPage={handlePerRowsChange}
  defaultSortField="title"
  sortIcon={<SortIcon />}
  selectableRows
  selectableRowsComponent={Checkbox}
  selectableRowsComponentProps={selectableRowsComponentProps}
  highlightOnHover
  pointerOnHover
  dense
/>

</div>
      <center><Employeesaction/></center>
      </Grid>
   
    </Layout>
    </div>
  );
}



export default Employee;