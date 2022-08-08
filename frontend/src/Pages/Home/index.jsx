import * as yup from "yup";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import indexMobile from "../../Images/index-image-mobile.jpg";
import indexOriginal from "../../Images/index-image.jpg";

import rodapeMobile from "../../Images/rodape-mobile.jpg";
import rodapeDesktop from "../../Images/rodape-desktop.jpg";

import api from "../../service/api";

import { useContext, useEffect } from "react";
import { ListContext } from "../../Provider/context";

const Home = () => {
  const signUpSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/, "Use apenas letras"),

    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),
    birthdate: yup.string().required("Campo obrigatório"),

    cellphone: yup
      .string()
      .min(11, "Deve conter 11 caracteres")
      .max(11, "Deve conter 11 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleCreateUser = async (data) => {
    await api
      .post("", data)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const { isList, setList } = useContext(ListContext);

  useEffect(() => {
    api
      .get("")
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box bgColor={"#060606"} minW={{ base: "375px" }} w={"100%"}>
      <Header />
      {/* INDEX */}
      <Box
        w={"100%"}
        h={"600px"}
        bgImage={{ base: indexMobile, md: indexOriginal, lg: indexOriginal }}
        bgSize={{ base: "contain" }}
        bgRepeat={{ base: "no-repeat" }}
        id={"topo"}
      >
        <VStack color={"#e8e8e8"} spacing={0} mr={{ md: "220px", lg: "280px" }}>
          <Box
            fontFamily={"Roboto"}
            mt={{ base: "120px", md: "120px", lg: "180px", xl: "200px" }}
          >
            <Heading
              fontWeight={"100"}
              fontSize={{
                base: "2.6em",
                md: "3em",
                lg: "3.7em",
                xl: "4.5em",
              }}
            >
              ESTÁGIO
            </Heading>
          </Box>
          <Box>
            <Text
              fontWeight={"100"}
              fontSize={{
                base: "1.2em",
                md: "1.3em",
                lg: "1.6em",
                xl: "1.8em",
              }}
            >
              PROVA DE SELEÇÃO
            </Text>
          </Box>
        </VStack>
      </Box>
      {/* CADASTRO */}
      <Center
        id={"cadastro"}
        flexDir={"column"}
        bgColor={"#29abe2"}
        color={"#fff"}
        py={12}
      >
        <Heading fontFamily={"Roboto"} fontWeight={"100"} pb={12}>
          CADASTRO
        </Heading>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Center flexDir={"column"}>
            {/* NOME */}
            <FormControl
              fontFamily={"Roboto"}
              fontWeight={"100"}
              isInvalid={errors.name}
            >
              <FormLabel mb={4}>
                Nome
                <Input
                  variant={"unstyled"}
                  borderRadius={0}
                  type="text"
                  {...register("name")}
                  borderBottom={
                    errors.name ? "4px solid #FF530D" : "4px solid #fff"
                  }
                />
                <FormErrorMessage>
                  {errors.name ? <Text>{errors.name.message}</Text> : ""}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            {/* EMAIL */}
            <FormControl
              w={"50vw"}
              minW={"300px"}
              fontFamily={"Roboto"}
              fontWeight={"100"}
              isInvalid={errors.email}
            >
              <FormLabel mb={4}>
                Email
                <Input
                  variant={"unstyled"}
                  borderRadius={0}
                  type="email"
                  {...register("email")}
                  borderBottom={
                    errors.email ? "4px solid #FF530D" : "4px solid #fff"
                  }
                />
                <FormErrorMessage>
                  {errors.email ? <Text>{errors.email.message}</Text> : ""}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            {/* NASCIMENTO */}
            <FormControl
              fontFamily={"Roboto"}
              fontWeight={"100"}
              isInvalid={errors.birthdate}
            >
              <FormLabel mb={4}>
                Nascimento
                <Input
                  variant={"unstyled"}
                  borderRadius={0}
                  type="date"
                  {...register("birthdate")}
                  borderBottom={
                    errors.birthdate ? "4px solid #FF530D" : "4px solid #fff"
                  }
                />
                <FormErrorMessage>
                  {errors.birthdate ? (
                    <Text>{errors.birthdate.message}</Text>
                  ) : (
                    ""
                  )}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            {/* TELEFONE */}
            <FormControl
              fontFamily={"Roboto"}
              fontWeight={"100"}
              isInvalid={errors.cellphone}
            >
              <FormLabel mb={4}>
                Telefone
                <Input
                  variant={"unstyled"}
                  borderRadius={0}
                  type="number"
                  {...register("cellphone")}
                  borderBottom={
                    errors.cellphone ? "4px solid #FF530D" : "4px solid #fff"
                  }
                />
                <FormErrorMessage>
                  {errors.cellphone ? (
                    <Text>{errors.cellphone.message}</Text>
                  ) : (
                    ""
                  )}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            <Button
              bgColor={"#012d51"}
              borderRadius={0}
              color={"#29abe2"}
              _hover={{ filter: "brightness(1.2)" }}
              fontFamily={"Roboto"}
              fontSize={"22px"}
              p={8}
              fontWeight={"100"}
              type="submit"
              my={12}
            >
              CADASTRAR
            </Button>
          </Center>
        </form>
      </Center>

      {/* LISTA DE CADASTRO  */}
      <Center id={"lista"} bgColor={"#fff"} py={12}>
        <VStack h={"auto"} pb={200}>
          <Heading
            color={"#29abe2"}
            fontFamily={"Roboto"}
            fontWeight={"100"}
            pb={12}
          >
            LISTA DE CADASTRO
          </Heading>
          <Tabs
            display={{ base: "block", md: "none" }}
            w={"100%"}
            minW={"350px"}
            h={"260px"}
            variant={"enclosed"}
          >
            <TabList border={"2px solid #29abe2"}>
              <Tab borderRadius={0} w={"25%"}>
                1
              </Tab>
              <Tab borderRadius={0} w={"25%"}>
                2
              </Tab>
              <Tab borderRadius={0} w={"25%"}>
                3
              </Tab>
              <Tab borderRadius={0} w={"25%"}>
                4
              </Tab>
            </TabList>

            <TabPanels>
              {isList.data
                ? isList.data.map((element) => (
                    <TabPanel>
                      <SimpleGrid columns={1} spacing={2}>
                        <HStack
                          borderBottom={"2px solid #29abe2"}
                          h={"50px"}
                          w={"100%"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#012d51"}
                            fontWeight={"700"}
                            w={"50px"}
                            height="20px"
                          >
                            NOME
                          </Text>
                          <Text w={"75%"} height="20px">
                            {element.name}
                          </Text>
                        </HStack>

                        <HStack
                          borderBottom={"2px solid #29abe2"}
                          h={"50px"}
                          w={"100%"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#012d51"}
                            fontWeight={"700"}
                            w={"50px"}
                            height="20px"
                          >
                            EMAIL
                          </Text>
                          <Text w={"75%"} height="20px">
                            {element.email}
                          </Text>
                        </HStack>

                        <HStack
                          borderBottom={"2px solid #29abe2"}
                          h={"50px"}
                          w={"100%"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#012d51"}
                            fontWeight={"700"}
                            w={"50px"}
                            height="20px"
                          >
                            NASC.
                          </Text>
                          <Text w={"75%"} height="20px">
                            {element.birthdate}
                          </Text>
                        </HStack>

                        <HStack
                          borderBottom={"2px solid #29abe2"}
                          h={"50px"}
                          w={"100%"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#012d51"}
                            fontWeight={"700"}
                            w={"50px"}
                            height="20px"
                          >
                            TEL.
                          </Text>
                          <Text w={"75%"} height="20px">
                            {element.cellphone}
                          </Text>
                        </HStack>
                      </SimpleGrid>
                    </TabPanel>
                  ))
                : console.log("ffff")}
            </TabPanels>
          </Tabs>

          {/* TABELA DE CADASTRO */}
          <TableContainer
            display={{ base: "none", md: "block" }}
            variant={"striped"}
          >
            <Table>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th
                    border={"2px solid #29abe2"}
                    borderTop={"none"}
                    w={"110px"}
                    textAlign={"center"}
                  >
                    NOME
                  </Th>
                  <Th
                    border={"2px solid #29abe2"}
                    borderTop={"none"}
                    w={"110px"}
                    textAlign={"center"}
                  >
                    EMAIL
                  </Th>
                  <Th
                    border={"2px solid #29abe2"}
                    borderTop={"none"}
                    w={"110px"}
                    textAlign={"center"}
                  >
                    NASCIMENTO
                  </Th>
                  <Th
                    border={"2px solid #29abe2"}
                    borderTop={"none"}
                    borderRight={"none"}
                    w={"110px"}
                    textAlign={"center"}
                  >
                    TELEFONE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {isList.data ? (
                  isList.data.map((element, index) => (
                    <Tr textAlign={"center"}>
                      <Td
                        border={"2px solid #29abe2"}
                        borderLeft={"none"}
                        w={"110px"}
                        textAlign={"center"}
                      >
                        {index + 1}
                      </Td>
                      <Td
                        border={"2px solid #29abe2"}
                        borderLeft={"none"}
                        w={"110px"}
                        textAlign={"center"}
                      >
                        {element.name}
                      </Td>
                      <Td
                        border={"2px solid #29abe2"}
                        borderLeft={"none"}
                        w={"110px"}
                        textAlign={"center"}
                      >
                        {element.email}
                      </Td>
                      <Td
                        border={"2px solid #29abe2"}
                        borderLeft={"none"}
                        w={"110px"}
                        textAlign={"center"}
                      >
                        {moment(element.birthdate).format("DD/MM/YYYY")}
                      </Td>
                      <Td
                        border={"2px solid #29abe2"}
                        borderRight={"none"}
                        w={"110px"}
                        textAlign={"center"}
                      >
                        {element.cellphone}
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Stack>
                    <Skeleton w={"100%"} height="20px" />
                    <Skeleton w={"100%"} height="20px" />
                    <Skeleton w={"100%"} height="20px" />
                    <Skeleton w={"100%"} height="20px" />
                  </Stack>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Center>
      <VStack
        id={"sobremim"}
        bgImage={{ base: rodapeMobile, md: rodapeDesktop }}
        bgSize={"contain"}
        fontSize={"18px"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        h={{ base: "260px" }}
      >
        <Text>Fulano Beltrano de Oliveira</Text>
        <Text>fulanobos@gmail.com</Text>
        <Text>(31) 9 9666-1111</Text>
        <Text>Faculdade de Belo Horizonte</Text>
      </VStack>
    </Box>
  );
};

export default Home;
