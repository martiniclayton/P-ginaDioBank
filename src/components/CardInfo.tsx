import { Box, Text } from "@chakra-ui/react"



interface Info {
    mainContent: string,
    content: string | number
}

export const CardInfo = ({mainContent, content}: Info) => {
    return (
        <>
            <Box backgroundColor={'white'} padding={'8px'} width={'320px'} minHeight={'120px'} borderRadius={"25px"} border={"1px solid gray"}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>{mainContent}</Text>
                <Text fontSize={'xl'}>{content}</Text>
            </Box>
        </>
    )
}