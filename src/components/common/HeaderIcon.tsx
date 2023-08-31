import { colors } from "@/config/chakra";
import { Box } from "@chakra-ui/react"; 
import { IconContext, IconType } from "react-icons";



type HeaderIconType = {
    Icon: IconType
    useDefaultColor?: boolean
}
const HeaderIcon = ({ Icon,useDefaultColor }: HeaderIconType) => {
    return (
        <Box position={"relative"} marginY="auto" ml={6}>
            <IconContext.Provider value={{size: "30px", color:useDefaultColor ? "" : colors.pink }}>
                <Icon /> 
            </IconContext.Provider>
        </Box>
    );
}


export default HeaderIcon