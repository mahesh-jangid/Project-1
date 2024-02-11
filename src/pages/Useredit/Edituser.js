import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
// import { IoIosArrowDown } from "react-icons/io";
import RingLoader from "react-spinners/RingLoader";
import "./EditProduct.css";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Checkbox } from "@chakra-ui/checkbox";

import { Helmet } from "react-helmet";
import { getUserDetails, updateUser } from "../../Redux/actions/userActions";
import { Select, Spinner } from "@chakra-ui/react";
import { Button } from "react-bootstrap";

const EditProduct = ({ match, history }) => {
  const userId = match.params.id;
  const userDetails = useSelector((state) => state.userDetails);

  const { loading, error, user } = userDetails;
  console.log("USER", user);

  // ///
  const [title, settitle] = useState("");

  const dispatch = useDispatch();

  const userUpdate = useSelector((state) => state.userUpdate);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    // if (user.id !== userId) {
    //   dispatch(getUserDetails(userId));
    // } else {
      settitle(user.title);
   
    // }
    // }

    return () => {};
  }, [dispatch, userId, history, user, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: userId,
        title:title
      })
    );
  };

  return (
    <div className="Edituser">
      <Helmet>
        <title>Edit data</title>
      </Helmet>
      {/* {error || (errorUpdate && <h4>{error || errorUpdate}</h4>)} */}

      {loading || loadingUpdate ? (
        <div className="loading">
          <Spinner color="white.500" />
        </div>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <div>
          <h4 className="Edittitle">Edit data :</h4>

          <div className="formedit">
            <form onSubmit={submitHandler}>
              {successUpdate && <h4>Updated successfully</h4>}
              {error || (errorUpdate && <h4>{error || errorUpdate}</h4>)}
              <div>
                <div className="input-div zz">
                  <div className="div">
                    <InputGroup>
                      <Input
                        type="text"
                        value={title}
                        placeholder="Enter title name"
                        onChange={(e) => settitle(e.target.value)}
                      />
                      <InputRightElement children={<AiOutlineUser />} />
                    </InputGroup>
                  </div>
                </div>

            
                 <Button
                  type="submit"
                  colorScheme="pink"
                  size="lg"
                  fontSize="md"
                >
                  {loadingUpdate ? <Spinner color="white.500" /> : "Update"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
