import Layout from '../components/Layout'
import Employeeaction from "./employeeAction";
import SortIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import Grid from '@mui/material/Grid';

const Button = () => <button type="button">EDIT</button>;
const Button1 = () => <button type="button">DELETE</button>;

const columns = [
  {
      name: 'Emp ID',
      selector: row => row.emp_id,
      width: '100px',
      sortable: true,
  },

  {
      name: 'Emp Name',
      selector: row => row.emp_name,
      width: '190px',
      sortable: true,
  },
  {
      name: ' Emp Email ',
      selector: row => row.emp_email,
      width: '200px',
      sortable: true,
  },
  {
      name: 'Emp Address',
      selector: row => row.emp_address,
      width: '115px',
      sortable: true
  },
 {
      name: 'Emp Phone',
      selector: row => row.emp_phone,
      width: '115px',
      sortable: true
  },
 {
      name: ' Role ID',
      selector: row => row.role_id,
      width: '115px',
      sortable: true
  },
  {
        name: 'Edit',
        button: true,
        cell: () => <Button>EDIT</Button>,
    },
  {
        name: 'Delete',
        button: true,
        cell: () => <Button1>DELETE</Button1>,
    },

];
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

function Home() {
 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState();
  const [perPage, setPerPage] = useState("5");

  useEffect(() => {

    fetchData(0,perPage)
  }, [perPage])

  const fetchData = async (page,limit) => {
    fetch(`http://localhost:3000/api/employee?page=${page}&limit=${limit}`,{
      method:'get',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setTotalRows(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handlePageChange = (page) => {
    fetchData(0.0,page, perPage);
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
      <center><Employeeaction/></center>
      </Grid>
    
    </Layout>
    </div>
  );
}

export default Home;