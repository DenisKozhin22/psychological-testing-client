import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import UserLayout from '@/components/Layout/UserLayout'
import { useGetStudents } from '@/hooks/adminHooks/useGetStudents'
import { useGenerateBreadcrumbs } from '@/hooks/useGenerateBreadcrumbs'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Grid,
	GridItem,
	Heading,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react'

const Group: FC = () => {
	const router = useRouter()
	const department = (router.query.department as string)?.replace('-', ' ')
	const group = router.query.group as string
	const breadCrumbs = useGenerateBreadcrumbs(router)
	const { studentsList } = useGetStudents(decodeURI(department), group)
	return (
		<UserLayout>
			<Heading textAlign='center' as='h2' size='md' py='4'>
				{group != undefined && `Группа ${group}`}
			</Heading>
			<Breadcrumb
				mb='2'
				listProps={{
					flexWrap: 'wrap',
				}}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/' as={NextLink}>
						Отделения
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
			<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap='2'>
				{studentsList?.map(item => (
					<GridItem key={item._id} w='100%' minH='80px'>
						<LinkBox
							as='article'
							h='full'
							display='flex'
							alignItems='center'
							justifyContent='center'
							px='5'
							borderWidth='1px'
							rounded='md'
							bg='teal.500'
							color='white'
							textAlign='center'>
							<LinkOverlay as={NextLink} href={`${breadCrumbs[0].href}/${group}/${item._id}`}>
								{`${item.userSurName} ${item.userName}`}
							</LinkOverlay>
						</LinkBox>
					</GridItem>
				))}
			</Grid>
		</UserLayout>
	)
}

export default Group
