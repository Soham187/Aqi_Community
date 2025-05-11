import { Flex, MenuItem, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import useDirectory from "../../hooks/useDirectory";

type MenuListItemProps = {
  displayText: string;
  link: string;
  imageURL?: string;  // Now we only use imageURL
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  link,
  imageURL,
}) => {
  const { onSelectMenuItem } = useDirectory();
  const hoverBg = useColorModeValue("gray.100", "#2A4365");

  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: hoverBg }}
      onClick={() => {
        onSelectMenuItem({ displayText, link, imageURL }); // Passing imageURL directly
      }}
    >
      <Flex alignItems="center">
        {imageURL ? (
          <Image borderRadius="full" boxSize="18px" src={imageURL} mr={2} />
        ) : null} {/* Only renders image if imageURL exists */}
        {displayText}
      </Flex>
    </MenuItem>
  );
};

export default MenuListItem;
