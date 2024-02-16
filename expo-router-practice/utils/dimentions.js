import { useWindowDimensions } from "react-native";

const useDimensions = () => {
  const useDimension = useWindowDimensions();
  return useDimension;
};

export default useDimensions;
