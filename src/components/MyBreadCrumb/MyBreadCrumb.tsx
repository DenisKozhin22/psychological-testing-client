import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import NextLink from 'next/link'
const MyBreadCrumb: FC = () => {
	const router = useRouter()
	const { department, group, student } = router.query

	return (
		<Breadcrumb separator={<ChevronRightIcon />} spacing='8px'>
			<BreadcrumbItem>
				<BreadcrumbLink href='/' as={NextLink}>
					Отделения
				</BreadcrumbLink>
			</BreadcrumbItem>

			{department && (
				<BreadcrumbItem>
					<BreadcrumbLink href={`/${department}`} as={NextLink}>
						{department.toString().replace('-', ' ')}
					</BreadcrumbLink>
				</BreadcrumbItem>
			)}

			{group && (
				<BreadcrumbItem>
					<BreadcrumbLink href={`/department/${department}/group/${group}`} as={NextLink}>
						{group}
					</BreadcrumbLink>
				</BreadcrumbItem>
			)}

			{student && (
				<BreadcrumbItem>
					<BreadcrumbLink
						href={`/department/${department}/group/${group}/student/${student}`}
						as={NextLink}>
						{student}
					</BreadcrumbLink>
				</BreadcrumbItem>
			)}
		</Breadcrumb>
	)
}

export default MyBreadCrumb
