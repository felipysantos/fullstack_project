import {
  HStack,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Link,
  Center,
} from "@chakra-ui/react";
import logo from "../../Images/logo-in8-dev.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center zIndex={1000} position={"absolute"} minW={"375px"} w={"100%"}>
      <HStack
        w={{ base: "100%", md: "80%", lg: "70%" }}
        justifyContent={{ base: "space-between" }}
        px={{ base: 4, md: 10 }}
        py={2}
        h={"70px"}
        color={"#fff"}
      >
        <Link href="#topo" display={{ base: "none", lg: "initial" }}>
          <Image src={logo} w={"80px"} />
        </Link>

        <Button
          style={{ background: "none", padding: "0" }}
          fontSize={{ base: "32px" }}
          onClick={onOpen}
          minW={"auto"}
          h={"auto"}
          color={"#29abe2"}
          display={{ base: "block", lg: "none" }}
        >
          <HiOutlineMenuAlt2 />
        </Button>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent w={"70%"} bgColor={"#29abe2"} pb={8}>
            <DrawerHeader
              textAlign={"left"}
              alignContent={"start"}
              alignItems={"start"}
              py={0}
              pt={4}
            >
              <DrawerCloseButton
                position={"initial"}
                fontSize={"34px"}
                color={"#fff"}
              >
                <HiOutlineMenuAlt2 />
              </DrawerCloseButton>
            </DrawerHeader>

            <DrawerBody
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"space-around"}
              flexDir={"column"}
              fontFamily={"Roboto"}
              fontWeight={"400"}
              color={"#fff"}
            >
              <Link href="#lista">
                <Button
                  color={"#fff"}
                  variant={"unstyled"}
                  fontSize={"22px"}
                  mt={4}
                >
                  lista
                </Button>
              </Link>
              <Link href="#sobremim">
                <Button color={"#fff"} variant={"unstyled"} fontSize={"22px"}>
                  sobre mim
                </Button>
              </Link>
              <Link href="#cadastro">
                <Button color={"#fff"} variant={"unstyled"} fontSize={"22px"}>
                  cadastro
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <HStack display={{ base: "none", lg: "flex" }}>
          <Link href="#cadastro">
            <Button variant={"link"} color={"#fff"}>
              cadastro
            </Button>
          </Link>
          <GoPrimitiveDot />
          <Link href="#lista">
            <Button
              variant={"link"}
              color={"#fff"}
              display={{ base: "none", lg: "initial" }}
            >
              lista
            </Button>
          </Link>
          <GoPrimitiveDot />
          <Link href="#sobremim">
            <Button
              variant={"link"}
              color={"#fff"}
              display={{ base: "none", lg: "initial" }}
            >
              sobre mim
            </Button>
          </Link>
        </HStack>
        <Link href="#topo" display={{ base: "block", lg: "none" }}>
          <Image src={logo} w={"80px"} />
        </Link>
      </HStack>
    </Center>
  );
};

export default Header;
