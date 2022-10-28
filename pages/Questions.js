import Layout from '../components/Layout'
import Questionsaction from "./questionsAction";
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
function Question() {
 
  const deleteQuestions = async (id) => {
   
    let text = "Delete Questions List ";
    if (confirm(text) == true) {
      let fetchData = await axios.delete(Url+`/api/questions/${id}`);
      router.push("/Questions");
    } else {
      console.log( "You canceled!")
    }
   
  };


const columns = [
  {
      name: 'Questions ID',
      selector: row => row.id,
      width: '100px',
      sortable: true,
  },

 
  {
    name: 'Name',
    selector: row => row.name,
    width: '418px',
    sortable: true,
},
{
    name: ' Question Type ID',
    selector: row => row.question_type_id,
    width: '115px',
    sortable: true,
},
{
    name: 'Is Delete',
    selector: row => row.is_delete,
    width: '200px',
    sortable: true
},
{
    name: 'Is Active',
    selector: row => row.is_active,
    width: '200px',
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
        cell: (row) => <div className={styles.update}><Link  href={`/questions/${row.id}`}>Update</Link></div>,
    },
  {
        name: 'Delete',
        
        button: true,
        cell: (row) => <div className={styles.delete} onClick={() => deleteQuestions(row.id)}>DELETE</div>,
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
    fetch(Url+`/api/questions?page=${page}&limit=${limit}`,{
      method:'get',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.questionsData);
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
title="Questions"
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
      <center><Questionsaction/></center>
      </Grid>
   
    </Layout>
    </div>
  );
}



export default Question;