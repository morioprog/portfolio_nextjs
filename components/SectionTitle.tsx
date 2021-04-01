import { Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => (
  <Heading
    as="h2"
    color="#04041c"
    textAlign="center"
    fontFamily="Avenir"
    fontWeight="normal"
    fontSize={{ base: "24px", sm: "40px", md: "54px" }}
    margin="16px auto"
    _after={{
      display: "block",
      height: "2px",
      content: "''",
      background:
        "linear-gradient(to right, white 25%, red 40%, blue 60%, white 75%)",
    }}
  >
    {title}
  </Heading>
);

export default SectionTitle;