import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Box,
} from "@chakra-ui/react";


const Card = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack>
      <VStack
        justifyContent={"flex-end"}
        bgImage={children.bgImage}
        w={{ base: "70vw", lg: "20vw" }}
        maxW={"400px"}
        h={"200px"}
        bgSize={"cover"}
        bgPos={{ base: "center", lg: "top" }}
        p={2}
        borderRadius={"10px"}
      >
        <Button
          bgColor={"#5D48BA"}
          color={"#fff"}
          _hover={{ color: "#5D48BA", bgColor: "#fff" }}
        onClick={onOpen}
        >
          Ver mais
        </Button>
      </VStack>

      {/* MODAL */}
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Flex
              w={{ base: "100%" }}
              h={{ base: "auto" }}
              justifyContent={{ base: "space-between" }}
              alignItems={{ base: "center" }}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box
                bgImage={children.bgImage}
                bgSize={"cover"}
                bgPos={"center"}
                w={{ base: "180px" }}
                h={{ base: "120px" }}
              />

              <VStack
                maxW={"450px"}
                w={{ base: "90%", md: "65%" }}
                alignItems={"flex-start"}
                mt={4}
              >
                <Heading
                  fontSize={{ base: 14 }}
                  overflow={"hidden"}
                  maxW={{ base: "30ch", md: "full" }}
                  whiteSpace={{ base: "nowrap", md: "normal" }}
                  textOverflow={{ base: "ellipsis" }}
                >
                  {children.title}
                </Heading>

                
                <Text fontSize={{ base: "sm", md: "md" }}>
                  {children.description}
                </Text>
              </VStack>
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent={{ base: "center" }}>
            <Link
              color={"#fff"}
              href={children.repo_link}
              textDecorationStyle={"none"}
              isExternal
            >
              <Button
                bgColor={"#5D48BA"}
                _hover={{ filter: "brightness(1.1)" }}
              >
                Ir para o repositório
              </Button>
            </Link>
            <Link
              color={"#fff"}
              href={children.link}
              textDecorationStyle={"none"}
              isExternal
            >
              <Button
                bgColor={"#5D48BA"}
                _hover={{ filter: "brightness(1.1)" }}
                mx={4}
              >
                Ir para o site
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
export default Card;
