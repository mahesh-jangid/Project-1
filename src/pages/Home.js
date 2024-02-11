import { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Container, SimpleGrid, Spinner } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListUsers } from "../Redux/actions/userActions";
import Product from "../components/Product";

function Home({ history }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  console.log("users",users)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(ListUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      {/* <Select placeholder="Select option">
        {city.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </Select> */}

      <Link to="/adddata">
        <Button colorScheme="pink"> Add Data</Button>
      </Link>
      {loading ? (
        <div className="loading">
          <Spinner color="white.500" />
        </div>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Flex direction={"column"} minWidth="max-content">
          <Box m={5}>
            <Heading>All Data</Heading>
            <Divider />
          </Box>

          <Grid
            templateColumns="repeat(1,minmax(200px,1fr))"
            rowGap={5}
            columnGap={3}
            p={5}
          >
            {users?.products?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </Grid>
        </Flex>
      )}
    </>
  );
}

export default Home;
