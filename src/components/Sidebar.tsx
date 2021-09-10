import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";

import { useSidebarDrawer } from "../hooks/useSidebarDrawer";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay>
        <DrawerContent bg="blue.700" p="4">
          <DrawerCloseButton mt="6" />

          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>

          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}