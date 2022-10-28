import Layout from '../components/Layout'
import Answersaction from "./answersAction";
import SortIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import axios from "axios";
import styles from "../styles/EmployeeList.module.css";
import {Url } from "../constants/Global";

import { useRouter } from "next/router";
function Home() {
 
  const deleteAnswers = async (id) => {
   
    let text = "Delete Answers  List ";
    if (confirm(text) == true) {
      let fetchData = await axios.delete(Url+`/api/answers/${id}`);
      router.push("/Answers ");
    } else {
      console.log( "You canceled!")
    }
   
  };


const columns = [
  {
      name: 'Answers  ID',
      selector: row => row.id,
      width: '200px',
      sortable: true,
  },

 
  {
    name: ' Answers',
    selector: row => row.answers,
    width: '205px',
    sortable: true,
},
{
    name: ' Question  ID',
    selector: row => row.question_id,
    width: '120px',
    sortable: true,
},
{
    name: 'Iscurrect',
    selector: row => row.iscurrect,
    width: '300px',
    sortable: true
},
  {
        name: 'Edit',
        width: '300px',
        button: true,
        cell: (row) => <div className={styles.update}><Link  href={`/answers/${row.id}`}>Update</Link></div>,
    },
  {
        name: 'Delete',
        width: '300px',
        button: true,
        cell: (row) => <div className={styles.delete} onClick={() => deleteAnswers(row.id)}>DELETE</div>,
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
    fetch(Url+`/api/answers?page=${page}&limit=${limit}`,{
      method:'get',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.answersData);
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
title="Answers"
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
      <center><Answersaction/></center>
      </Grid>
   
    </Layout>
    </div>
  );
}



export default Home;