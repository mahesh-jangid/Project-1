import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button, Select, Spinner } from "@chakra-ui/react";
import { AdduserData } from "../Redux/actions/userActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddData = () => {
   const dispatch = useDispatch();
  const history = useHistory();
  const [title, settitle] = useState("");
  const addData = useSelector((state) => state.addData);
  const { loading, error, success } = addData;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      AdduserData({
        title:title,
      
      })
    );
  };

   useEffect(() => {
    if (success) {
      history.push("/Home");
    }
  }, [success, dispatch, history]);
  return (
    <>
      <div className="Edituser">
        {" "}
        <div className="formedit ">
          <form onSubmit={submitHandler}>
            {success && <h4>Data successfully Added</h4>}
            {error && <h4>Error Occured</h4>}
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
                  </InputGroup>
                </div>
              </div>

              {/* <input type="submit" className="btna2" value="Add Data" /> */}
              <Button type="submit" colorScheme="pink" size="lg" fontSize="md">
                {loading ? <Spinner color="white.500" /> : "Add Data"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
