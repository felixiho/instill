import { colors } from "@/config/chakra";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconContext, IconType } from "react-icons";



type NotificationIconType = {
    Icon: IconType
    children: ReactNode
}
const NotificationIcon = ({ Icon, children }: NotificationIconType) => {
    return (
        <Box position={"relative"} marginY="auto" ml={6}>
            <IconContext.Provider value={{size: "30px", }}>
                <Icon />
                <Box position={"absolute"} py="2px" fontWeight="bold" fontSize="2xs" right="-5px" top="-5px" backgroundColor={colors.pink} color="white" borderRadius={"base"}  px={2}>
                    {children}
                </Box>
            </IconContext.Provider>
        </Box>
    );
}


export default NotificationIcon