import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import indexMobile from "../../Images/index-image-mobile.jpg";
import indexOriginal from "../../Images/index-image.jpg";
import api from "../../service/api";

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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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
      >
        <VStack color={"#e8e8e8"} spacing={0} mr={{ md: "220px", lg: "280px" }}>
          <Box
            fontFamily={"Roboto"}
            mt={{ base: "120px", md: "120px", lg: "180px", xl: "200px" }}
          >
            <Heading
              fontWeight={"100"}
              fontSize={{ base: "2.6em", md: "3em", lg: "3.7em", xl: "4.5em" }}
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
      <Center flexDir={"column"} bgColor={"#29abe2"} color={"#fff"} py={12}>
        <Heading fontFamily={"Roboto"} fontWeight={"100"} pb={12}>
          CADASTRO
        </Heading>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Center flexDir={"column"}>
            {/* NOME */}
            <FormControl fontFamily={"Roboto"} fontWeight={"100"}>
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
              </FormLabel>
            </FormControl>
            {/* EMAIL */}
            <FormControl
              w={"50vw"}
              minW={"300px"}
              fontFamily={"Roboto"}
              fontWeight={"100"}
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
              </FormLabel>
            </FormControl>
            {/* NASCIMENTO */}
            <FormControl fontFamily={"Roboto"} fontWeight={"100"}>
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
              </FormLabel>
            </FormControl>
            {/* TELEFONE */}
            <FormControl fontFamily={"Roboto"} fontWeight={"100"}>
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
    </Box>
  );
};

export default Home;
