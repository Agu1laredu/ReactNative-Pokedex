import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { FirsName, LastName } = props;
  return (
    <Text>
      Hola
      {FirsName}
      {LastName}, Mucho gusto que estes con nosotros
    </Text>
  );
}

Saludar.propTypes = {
  FirsName: PropTypes.string.isRequired,
  LastName: PropTypes.string.isRequired,
};
