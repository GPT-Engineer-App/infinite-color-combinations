import { Box, VStack, Heading } from "@chakra-ui/react";

const RecursiveSquare = ({ level, maxLevel, color }) => {
  if (level > maxLevel) return null;

  const nextColor = {
    r: (color.r + 255) % 256,
    g: (color.g + 255) % 256,
    b: (color.b + 255) % 256,
  };

  return (
    <Box pos="relative" w="100%" h="100%" border="1px solid" borderColor={`rgb(${color.r}, ${color.g}, ${color.b})`}>
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="50%" h="50%">
        <RecursiveSquare level={level + 1} maxLevel={maxLevel} color={nextColor} />
      </Box>
    </Box>
  );
};

const Index = () => {
  const maxLevel = 4; // Set the maximum level of recursion
  const startColor = { r: 255, g: 0, b: 0 }; // Start with red

  return (
    <VStack p={10} spacing={8} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Infinite Color Combinations
      </Heading>
      <Box w="400px" h="400px" pos="relative" margin="0 auto">
        <RecursiveSquare level={1} maxLevel={maxLevel} color={startColor} />
      </Box>
    </VStack>
  );
};

export default Index;
