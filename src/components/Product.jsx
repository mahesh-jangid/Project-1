import React, { useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Flex,
  Spacer,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { AiFillDelete, AiOutlineEdit, AiOutlineFundView } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, ListUsers } from "../Redux/actions/userActions";
const Product = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;
  useEffect(() => {
    if (successDelete) {
      history.push("/Home");
    }
  }, [successDelete, dispatch, history]);
  const deletehandler = (id) => {
    if (window.confirm("Are You Sure to delete?")) {
      dispatch(DeleteUser(id));
    }
  };
  return (
    <>
      <Box p={[2, 4, 6, 3]} borderBottom={"1px solid #b5bab5"}>
        <Flex justifyContent={"space-between"}>
          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text>Title- {product.title}</Text>
              <Text>Price- {product.price}</Text>
          
            </VStack>
          </HStack>
          <Spacer />
          <Flex alignItems={"center"}>
            <Stack>
              <Link to={`/${product.id}/update`}>
                <Button
                  leftIcon={<AiOutlineEdit size="16" />}
                  colorScheme="blue"
                  size="xs"
                >
                  EDIT
                </Button>
              </Link>
              <Button
                colorScheme="red"
                leftIcon={<AiFillDelete size="16" />}
                size="xs"
                onClick={() => {
                  deletehandler(product.id);
                }}
              >
                DELETE
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Product;
