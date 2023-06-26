import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import UserLayout from '@/components/Layout/UserLayout'
import { useGetGroups } from '@/hooks/adminHooks/useGetGroups'
import { useGenerateBreadcrumbs } from '@/hooks/useGenerateBreadcrumbs'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Heading,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react'

const Department: FC = () => {
	const router = useRouter()
	const breadCrumbs = useGenerateBreadcrumbs(router)
	const department = (router.query.department as string)?.replace('-', ' ')
	console.log(breadCrumbs)
	const { groupsList } = useGetGroups(decodeURI(department))
	return (
		<UserLayout>
			<Heading textAlign='center' as='h2' size='md' py='4'>
				Отделение {department?.toLowerCase()}
			</Heading>
			<Breadcrumb
				mb='2'
				listProps={{
					flexWrap: 'wrap',
				}}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/' as={NextLink}>
						Отделение
					</BreadcrumbLink>
				</BreadcrumbItem>
				{breadCrumbs?.map((item, i) => (
					<BreadcrumbItem
						key={item.href}
						isCurrentPage={i === breadCrumbs.length - 1 ? true : false}>
						<BreadcrumbLink href={item.href} as={i === breadCrumbs.length - 1 ? 'span' : NextLink}>
							{item.title}
						</BreadcrumbLink>
					</BreadcrumbItem>
				))}
			</Breadcrumb>
			<Box maxW='sm' mx='auto' display='flex' flexDirection='column' gap='2'>
				{groupsList?.map(item => (
					<LinkBox
						key={item._id}
						as='article'
						maxW='sm'
						p='5'
						borderWidth='1px'
						rounded='md'
						bg='teal.500'
						color='white'
						textAlign='center'>
						<LinkOverlay as={NextLink} href={`${breadCrumbs[0].href}/${item.value}`}>
							{item.value}
						</LinkOverlay>
					</LinkBox>
				))}
			</Box>
		</UserLayout>
	)
}

export default Department
