import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 1000px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/customers/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user!");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3002/customers/${id}`, updatedData);
      const updatedUser = response.data;
      const newArray = users.map((user) => (user.id === id ? updatedUser : user));
      setUsers(newArray);
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Failed to update user!");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Email</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="50%">{item.id}</Td>
            <Td width="20%">{item.email}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
