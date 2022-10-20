import Layout from '../components/Layout'
import Studentsaction from "./studentsAction";
import SortIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import axios from "axios";
import styles from "../styles/EmployeeList.module.css";

import { useRouter } from "next/router";
function Home() {
 
  const deleteStudents = async (id) => {
   
    let text = "Delete Students List ";
    if (confirm(text) == true) {
      let fetchData = await axios.delete(`http://localhost:3000/api/students/${id}`);
      router.push("/Students");
    } else {
      console.log( "You canceled!")
    }
   
  };


const columns = [
  {
      name: 'Students ID',
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
    width: '150px',
    sortable: true
},
{
    name: 'Student Role ID',
    selector: row => row.student_role_id,
    width: '116px',
    sortable: true
},
{
    name: 'Email _ID',
    selector: row => row.email_id,
    width: '200px',
    sortable: true
},

{
    name: 'Phone No',
    selector: row => row.phone_no,
    width: '115px',
    sortable: true
},
{
    name: 'Created',
    selector: row => row.created,
    width: '115px',
    sortable: true
},
  {
        name: 'Edit',
        button: true,
        cell: (row) => <div className={styles.update}><Link  href={`/students/${row.id}`}>Update</Link></div>,
    },
  {
        name: 'Delete',
        button: true,
        cell: (row) => <div className={styles.delete} onClick={() => deleteStudents(row.id)}>DELETE</div>,
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
    fetch(`http://localhost:3000/api/students?page=${page}&limit=${limit}`,{
      method:'get',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.studentsData);
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

  columns={columns}
  data={items}
  pagination
  paginationServer
  paginationRowsPerPageOptions={[1,2,3,4,5,6,7,8,9,10]}
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
      <center><Studentsaction/></center>
      </Grid>
   
    </Layout>
    </div>
  );
}



export default Home;