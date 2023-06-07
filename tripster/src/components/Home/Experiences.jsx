import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const data=[{
    title:"Ubud Tour - Best of Ubud - All Inclusive",
    price:"7,524",
    reviews:"2,345",
    img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/66/4a/caption.jpg?w=300&h=300&s=1"
},{
    title:"Tokyo Full-Day Private Tour with guide",
    price:"8,697",
    reviews:"158",
    img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/03/51/caption.jpg?w=300&h=300&s=1"
},{
    title:"Private Taj Mahal Tour from Delhi by Car - All Inclusive",
    price:"5,601",
    reviews:"1,451",
    img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/e5/07/caption.jpg?w=300&h=300&s=1"
}]

const Experiences = () => {
  return (
    <div style={{width:"55%",margin:"auto"}}>
        
        
        <HStack spacing={4}>
        
    {data.map((el)=>(    <Card variant="unstyled" maxW='xs' _hover={{cursor:"pointer"}}>
  
    <Image
      src={el.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <div style={{border:"1px solid black",width:"120px",textAlign:"center",borderRadius:"7px"}}>BEST SELLER</div>
      <Heading size='md' _hover={{textDecoration:"underline",cursor:"pointer"}}>{el.title}</Heading>
      <HStack spacing={0}><><Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon><Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='transparent'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon><Text fontSize="xs">{el.reviews}</Text>
</></HStack>
      <Text color='black' fontSize='lg' fontWeight="bold">
        from ₹{el.price} per adult
      </Text>
    </Stack>
  
  <Divider />
</Card>))}

     </HStack>

    </div>
  )
}

export default Experiences